import type { ReactNode } from "react";
import { ArrowDown, Check } from "lucide-react";
import Figure from "./Figure";

type Block = { w: number; kind: "sys" | "user" | "asst" | "tool" };

const heroBlocks: Block[] = [
  { w: 36, kind: "sys" },
  { w: 24, kind: "user" },
  { w: 24, kind: "asst" },
  { w: 80, kind: "tool" },
  { w: 36, kind: "asst" },
  { w: 24, kind: "user" },
  { w: 24, kind: "asst" },
  { w: 96, kind: "tool" },
  // everything below this line no longer fits
  { w: 36, kind: "asst" },
  { w: 24, kind: "user" },
  { w: 24, kind: "asst" },
  { w: 70, kind: "tool" },
];
const FIT_COUNT = 8;
const GAP = 2;
const BAR_X = 36;

const heroFill: Record<Block["kind"], string> = {
  sys: "fill-accent",
  user: "fill-sky-500/70",
  asst: "fill-border",
  tool: "fill-violet-500/70",
};

function heroLayout() {
  let x = BAR_X;
  const rects = heroBlocks.map((b, i) => {
    const rect = { ...b, x, over: i >= FIT_COUNT };
    x += b.w + GAP;
    return rect;
  });
  const limitX = rects[FIT_COUNT].x - GAP / 2;
  const overStart = rects[FIT_COUNT].x;
  const overEnd = x - GAP;
  return { rects, limitX, overCenter: (overStart + overEnd) / 2 };
}

export function ContextHero() {
  const { rects, limitX, overCenter } = heroLayout();
  const legend: { label: string; cls: string; x: number }[] = [
    { label: "system", cls: "fill-accent", x: 36 },
    { label: "user", cls: "fill-sky-500/70", x: 124 },
    { label: "assistant", cls: "fill-border", x: 190 },
    { label: "tool result", cls: "fill-violet-500/70", x: 292 },
  ];
  return (
    <Figure>
      <svg
        viewBox="0 0 640 250"
        className="h-auto w-full"
        role="img"
        aria-label="A row of chat messages grows past the context limit. The last few messages no longer fit."
      >
        <rect x="0.75" y="0.75" width="638.5" height="248.5" rx="20" className="fill-muted-bg stroke-border" />
        <text x="36" y="58" className="fill-foreground text-[26px] font-bold">
          The message list only grows.
        </text>
        <text x="36" y="92" className="fill-accent text-[26px] font-bold">
          You decide what the model sees.
        </text>

        {rects.map((r, i) => (
          <rect
            key={i}
            x={r.x}
            y={136}
            width={r.w}
            height={44}
            rx={6}
            className={`${heroFill[r.kind]} ${r.over ? "stroke-red-500 opacity-40" : ""}`}
            strokeDasharray={r.over ? "3 2" : undefined}
            strokeWidth={r.over ? 1.5 : undefined}
          />
        ))}

        <line
          x1={limitX}
          y1={118}
          x2={limitX}
          y2={196}
          strokeDasharray="5 4"
          strokeWidth="2.5"
          className="stroke-red-500"
        />
        <text
          x={limitX}
          y={112}
          textAnchor="middle"
          className="fill-red-600 text-[13px] font-semibold dark:fill-red-400"
        >
          context limit
        </text>
        <text
          x={overCenter}
          y={208}
          textAnchor="middle"
          className="fill-red-600 text-[13px] dark:fill-red-400"
        >
          doesn&apos;t fit
        </text>

        {legend.map((l) => (
          <g key={l.label}>
            <rect x={l.x} y={226} width={11} height={11} rx={3} className={l.cls} />
            <text x={l.x + 17} y={236} className="fill-muted text-[12px]">
              {l.label}
            </text>
          </g>
        ))}
      </svg>
    </Figure>
  );
}

type Status = "built" | "not built" | "not checked";
const options: { n: number; name: string; note: string; status: Status }[] = [
  { n: 1, name: "Sliding window", note: "Free. Forgets what it drops.", status: "built" },
  { n: 2, name: "Summarizing", note: "Keeps the facts. One extra model call.", status: "built" },
  { n: 3, name: "Trim old tool results", note: "Often the biggest, easiest win.", status: "not built" },
  { n: 4, name: "Count tokens, not messages", note: "Tokens are what the limit measures.", status: "not built" },
  { n: 5, name: "Limit tool output size", note: "Stop huge results at the door.", status: "not built" },
  { n: 6, name: "Store facts outside", note: "Scales furthest. More moving parts.", status: "not built" },
  { n: 7, name: "Sub-task contexts", note: "Keeps the mess out of the main chat.", status: "not built" },
  { n: 8, name: "Check the real limit", note: "Easy to miss (num_ctx in Ollama).", status: "not checked" },
];

function StatusChip({ status }: { status: Status }) {
  if (status === "built") {
    return (
      <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/15 px-2 py-0.5 text-[11px] font-semibold text-emerald-700 dark:text-emerald-400">
        <Check size={12} />
        Built
      </span>
    );
  }
  if (status === "not checked") {
    return (
      <span className="inline-flex items-center rounded-full bg-amber-500/15 px-2 py-0.5 text-[11px] font-semibold text-amber-700 dark:text-amber-400">
        Not checked
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-muted-bg px-2 py-0.5 text-[11px] font-semibold text-muted">
      <span className="h-2 w-2 rounded-full border-2 border-red-500/70" />
      Not built
    </span>
  );
}

export function OptionsMap() {
  return (
    <Figure
      maxWidth="max-w-2xl"
      caption="The eight options, and where my own agent stands on each."
    >
      <ul className="grid gap-3 sm:grid-cols-2">
        {options.map((o) => (
          <li key={o.n} className="flex gap-3 rounded-xl border border-border bg-card p-3">
            <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-semibold text-accent-foreground">
              {o.n}
            </span>
            <div className="min-w-0">
              <p className="text-sm font-semibold">{o.name}</p>
              <p className="mt-0.5 text-xs text-muted">{o.note}</p>
              <div className="mt-2">
                <StatusChip status={o.status} />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </Figure>
  );
}

type Seg = { w: number; tone: "sys" | "user" | "asst" | "tool" | "gone" };
const toneClass: Record<Seg["tone"], string> = {
  sys: "bg-accent",
  user: "bg-sky-500/60",
  asst: "bg-border",
  tool: "bg-violet-500/60",
  gone: "border border-dashed border-violet-500/70 bg-violet-500/10",
};

const before: Seg[] = [
  { w: 6, tone: "sys" },
  { w: 3, tone: "user" },
  { w: 3, tone: "asst" },
  { w: 29, tone: "tool" },
  { w: 6, tone: "asst" },
  { w: 3, tone: "user" },
  { w: 3, tone: "asst" },
  { w: 27, tone: "tool" },
  { w: 6, tone: "asst" },
  { w: 3, tone: "user" },
];
const after: Seg[] = [
  { w: 6, tone: "sys" },
  { w: 3, tone: "user" },
  { w: 3, tone: "asst" },
  { w: 2, tone: "gone" },
  { w: 6, tone: "asst" },
  { w: 3, tone: "user" },
  { w: 3, tone: "asst" },
  { w: 27, tone: "tool" },
  { w: 6, tone: "asst" },
  { w: 3, tone: "user" },
];

function Bar({ segs }: { segs: Seg[] }) {
  return (
    <div className="flex h-7 w-full gap-[2px] overflow-hidden rounded-md border border-border bg-muted-bg p-[2px]">
      {segs.map((s, i) => (
        <div key={i} className={`h-full flex-none rounded-sm ${toneClass[s.tone]}`} style={{ width: `${s.w}%` }} />
      ))}
    </div>
  );
}

function LegendDot({ cls, label }: { cls: string; label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 text-[11px] text-muted">
      <span className={`h-2.5 w-2.5 rounded-sm ${cls}`} />
      {label}
    </span>
  );
}

export function ToolResultTrim() {
  return (
    <Figure
      maxWidth="max-w-2xl"
      caption="Illustrative sizes. Old tool results are usually the bulkiest messages, so replacing them frees the most room. The empty track is free space."
    >
      <div className="space-y-4 rounded-xl border border-border bg-card p-5">
        <div>
          <p className="mb-2 text-xs font-semibold text-muted">Before: old tool results fill most of the window</p>
          <Bar segs={before} />
        </div>
        <div>
          <p className="mb-2 text-xs font-semibold text-muted">
            After: the old result becomes a short placeholder, the latest one stays
          </p>
          <Bar segs={after} />
        </div>
        <div className="flex flex-wrap gap-x-4 gap-y-1">
          <LegendDot cls="bg-accent" label="system" />
          <LegendDot cls="bg-sky-500/60" label="user" />
          <LegendDot cls="bg-border" label="assistant" />
          <LegendDot cls="bg-violet-500/60" label="tool result" />
          <LegendDot cls="border border-dashed border-violet-500/70 bg-violet-500/10" label="[tool result removed]" />
        </div>
      </div>
    </Figure>
  );
}

export function CompactAt() {
  return (
    <Figure
      maxWidth="max-w-xl"
      caption="Trigger compaction at around 70 to 80 percent of the window, not at 100 percent (the limit)."
    >
      <div className="rounded-xl border border-border bg-card p-5 pt-8">
        <div className="relative">
          <span className="absolute -top-6 left-[75%] -translate-x-1/2 whitespace-nowrap text-xs font-semibold text-amber-700 dark:text-amber-400">
            compact here
          </span>
          <div className="flex h-7 w-full overflow-hidden rounded-md border border-border">
            <div className="h-full bg-emerald-500/30" style={{ width: "70%" }} />
            <div className="h-full bg-amber-500/60" style={{ width: "10%" }} />
            <div className="h-full bg-red-500/30" style={{ width: "20%" }} />
          </div>
          <div className="relative mt-1.5 h-4 text-[11px] text-muted">
            <span className="absolute left-0">0%</span>
            <span className="absolute left-[70%] -translate-x-1/2">70%</span>
            <span className="absolute left-[80%] -translate-x-1/2">80%</span>
            <span className="absolute right-0">100%</span>
          </div>
        </div>
      </div>
    </Figure>
  );
}

function Pill({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-md border border-border bg-muted-bg px-2 py-1 font-mono text-[11px] text-muted">
      {children}
    </span>
  );
}

function MemCard({ title, tag, children }: { title: string; tag: string; children: ReactNode }) {
  return (
    <div className="rounded-xl border border-border bg-card p-4">
      <div className="flex items-center justify-between gap-2">
        <p className="text-sm font-semibold">{title}</p>
        <span className="rounded-full bg-accent/15 px-2 py-0.5 text-[11px] font-semibold text-accent">{tag}</span>
      </div>
      <div className="mt-3 flex flex-wrap gap-2">{children}</div>
    </div>
  );
}

export function ExternalMemory() {
  return (
    <Figure
      maxWidth="max-w-2xl"
      caption="The conversation can stay short while the memory grows."
    >
      <div className="grid gap-3 sm:grid-cols-2">
        <MemCard title="The conversation" tag="stays short">
          <Pill>latest messages</Pill>
        </MemCard>
        <MemCard title="Memory outside it" tag="keeps growing">
          <Pill>notes file</Pill>
          <Pill>database</Pill>
          <Pill>embeddings</Pill>
        </MemCard>
      </div>
      <div className="flex flex-col items-center gap-1 py-2 text-xs text-muted">
        <ArrowDown size={18} />
        <span>Fetch only what&apos;s relevant for this question</span>
        <ArrowDown size={18} />
      </div>
      <MemCard title="What the model sees" tag="small">
        <Pill>system prompt</Pill>
        <Pill>a few relevant facts</Pill>
        <Pill>latest messages</Pill>
      </MemCard>
    </Figure>
  );
}
