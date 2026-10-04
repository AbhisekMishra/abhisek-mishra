import type { ReactNode } from "react";
import { Check, X } from "lucide-react";
import Figure from "./Figure";

function Ticket({ id }: { id: string }) {
  return (
    <span className="inline-flex shrink-0 items-center rounded-md border border-dashed border-accent bg-card px-2 py-0.5 font-mono text-xs text-accent">
      {id}
    </span>
  );
}

export function AgentLoopHero() {
  return (
    <Figure>
      <svg
        viewBox="0 0 640 240"
        className="h-auto w-full"
        role="img"
        aria-label="Pseudo-code: while the model asks for a tool, run the tool and hand the result back. A circular arrow shows the repeat."
      >
        <rect x="0.75" y="0.75" width="638.5" height="238.5" rx="20" className="fill-muted-bg stroke-border" />
        <circle cx="28" cy="26" r="5" className="fill-border" />
        <circle cx="46" cy="26" r="5" className="fill-border" />
        <circle cx="64" cy="26" r="5" className="fill-border" />

        <g className="font-mono text-[20px]">
          <text x="36" y="92" className="fill-foreground">
            <tspan className="fill-accent">while</tspan> (model asks for a tool) <tspan className="fill-muted">{"{"}</tspan>
          </text>
          <text x="62" y="130" className="fill-foreground">
            run the tool
          </text>
          <text x="62" y="168" className="fill-foreground">
            hand the result back
          </text>
          <text x="36" y="206" className="fill-muted">
            {"}"}
          </text>
        </g>

        <path
          d="M540 74 A54 54 0 1 1 486 128"
          className="fill-none stroke-accent"
          strokeWidth="6"
          strokeLinecap="round"
        />
        <polygon points="486,102 475,126 497,126" className="fill-accent" />
        <text x="540" y="134" textAnchor="middle" className="fill-muted text-[16px] font-semibold">
          repeat
        </text>
        <text x="540" y="214" textAnchor="middle" className="fill-muted text-[13px]">
          until it stops asking
        </text>
      </svg>
    </Figure>
  );
}

function FlowBox({
  x,
  y,
  w = 190,
  h = 42,
  lines,
  accent = false,
}: {
  x: number;
  y: number;
  w?: number;
  h?: number;
  lines: string[];
  accent?: boolean;
}) {
  const lineHeight = 18;
  const firstY = y + h / 2 - ((lines.length - 1) * lineHeight) / 2 + 5;
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx="10"
        strokeWidth="1.5"
        className={accent ? "fill-card stroke-accent" : "fill-card stroke-border"}
      />
      {lines.map((line, i) => (
        <text
          key={line}
          x={x + w / 2}
          y={firstY + i * lineHeight}
          textAnchor="middle"
          className="fill-foreground text-[14px]"
        >
          {line}
        </text>
      ))}
    </g>
  );
}

function ArrowDown({ x, y1, y2 }: { x: number; y1: number; y2: number }) {
  return (
    <g>
      <line x1={x} y1={y1} x2={x} y2={y2 - 8} className="stroke-muted" strokeWidth="2" />
      <polygon points={`${x},${y2} ${x - 5},${y2 - 9} ${x + 5},${y2 - 9}`} className="fill-muted" />
    </g>
  );
}

export function AgentLoopFlow() {
  return (
    <Figure maxWidth="max-w-[440px]" caption="The whole agent. Everything else is added around this loop.">
      <svg
        viewBox="0 0 440 424"
        className="h-auto w-full"
        role="img"
        aria-label="Flow: your message goes to the model. If the model asked for a tool, run it, add the result to the conversation and call the model again. If not, return the final answer."
      >
        <FlowBox x={65} y={8} lines={["Your message"]} />
        <ArrowDown x={160} y1={50} y2={80} />
        <FlowBox x={65} y={80} lines={["Call the model"]} accent />
        <ArrowDown x={160} y1={122} y2={150} />

        <polygon
          points="160,150 255,198 160,246 65,198"
          strokeWidth="1.5"
          className="fill-card stroke-border"
        />
        <text x="160" y="194" textAnchor="middle" className="fill-foreground text-[14px]">
          Asked for
        </text>
        <text x="160" y="212" textAnchor="middle" className="fill-foreground text-[14px]">
          a tool?
        </text>

        <line x1="255" y1="198" x2="292" y2="198" className="stroke-muted" strokeWidth="2" />
        <polygon points="300,198 291,193 291,203" className="fill-muted" />
        <text x="276" y="188" textAnchor="middle" className="fill-muted text-[12px] font-semibold">
          No
        </text>
        <rect x="300" y="177" width="130" height="42" rx="10" className="fill-accent" />
        <text x="365" y="203" textAnchor="middle" className="fill-accent-foreground text-[14px] font-semibold">
          Final answer
        </text>

        <ArrowDown x={160} y1={246} y2={284} />
        <text x="172" y="268" className="fill-muted text-[12px] font-semibold">
          Yes
        </text>
        <FlowBox x={65} y={284} lines={["Run the tool(s)"]} />
        <ArrowDown x={160} y1={326} y2={356} />
        <FlowBox x={65} y={356} h={52} lines={["Add the results to", "the conversation"]} />

        <path d="M65 382 H28 V101 H56" className="fill-none stroke-muted" strokeWidth="2" />
        <polygon points="65,101 56,96 56,106" className="fill-muted" />
        <text
          x="14"
          y="242"
          textAnchor="middle"
          transform="rotate(-90 14 242)"
          className="fill-muted text-[12px] font-semibold"
        >
          repeat
        </text>
      </svg>
    </Figure>
  );
}

function StepRow({ n, title, children }: { n: number; title: string; children: ReactNode }) {
  return (
    <li className="flex gap-4">
      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-semibold text-accent-foreground">
        {n}
      </span>
      <div className="min-w-0">
        <p className="text-sm font-medium">{title}</p>
        <div className="mt-2 space-y-2">{children}</div>
      </div>
    </li>
  );
}

function TicketLine({ id, children }: { id: string; children: ReactNode }) {
  return (
    <div className="flex flex-wrap items-center gap-2 text-sm">
      <Ticket id={id} />
      <span className="text-muted">→</span>
      <span className="font-mono text-[13px]">{children}</span>
    </div>
  );
}

export function CoatCheck() {
  return (
    <Figure
      maxWidth="max-w-xl"
      caption="Like a coat check: you get a numbered ticket, and you get your coat back by ticket number, not by description."
    >
      <ol className="space-y-6 rounded-xl border border-border bg-card p-5">
        <StepRow n={1} title="The model sends two requests. Each gets its own ticket.">
          <TicketLine id="call_A">get_score(&quot;Rahul&quot;)</TicketLine>
          <TicketLine id="call_B">get_score(&quot;Shivam&quot;)</TicketLine>
        </StepRow>
        <StepRow n={2} title="The tools finish in any order. Each result brings its ticket back.">
          <TicketLine id="call_B">90</TicketLine>
          <TicketLine id="call_A">60</TicketLine>
        </StepRow>
        <StepRow n={3} title="The model matches by ticket, not by order.">
          <p className="flex items-center gap-2 text-sm">
            <Check size={16} className="text-emerald-600 dark:text-emerald-400" />
            <span>
              Rahul = <strong>60</strong>, Shivam = <strong>90</strong>
            </span>
          </p>
        </StepRow>
      </ol>
    </Figure>
  );
}

function Outcome({
  good,
  heading,
  answer,
  who,
  verdict,
}: {
  good: boolean;
  heading: string;
  answer: string;
  who: string;
  verdict: string;
}) {
  const tone = good
    ? "border-emerald-500/40 bg-emerald-500/5 text-emerald-700 dark:text-emerald-400"
    : "border-red-500/40 bg-red-500/5 text-red-700 dark:text-red-400";
  return (
    <div className={`rounded-xl border p-4 ${tone}`}>
      <p className="text-xs text-muted">{heading}</p>
      <p className="mt-1 font-mono text-sm font-semibold text-foreground">{answer}</p>
      <p className="mt-3 flex items-center gap-1.5 text-sm font-medium">
        {good ? <Check size={16} /> : <X size={16} />}
        <span>
          {who}: {verdict}
        </span>
      </p>
    </div>
  );
}

export function IdSwapExperiment() {
  return (
    <Figure
      maxWidth="max-w-2xl"
      caption="Same two calls. I swapped the results between the IDs on purpose, to see who reads the IDs."
    >
      <div className="rounded-xl border border-border bg-card p-5">
        <p className="font-mono text-xs font-semibold uppercase tracking-widest text-accent">What I sent</p>
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          <div className="flex flex-wrap items-center gap-2 text-sm">
            <Ticket id="call_A" />
            <span className="text-muted">Rahul&apos;s call →</span>
            <span className="font-mono font-semibold">90</span>
          </div>
          <div className="flex flex-wrap items-center gap-2 text-sm">
            <Ticket id="call_B" />
            <span className="text-muted">Shivam&apos;s call →</span>
            <span className="font-mono font-semibold">60</span>
          </div>
        </div>
        <p className="mt-3 text-xs text-muted">
          The results arrive in this order: call_B (60) first, then call_A (90).
        </p>
      </div>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <Outcome
          good
          heading="A model that reads the IDs says"
          answer="Rahul 90 · Shivam 60"
          who="Claude"
          verdict="followed the IDs"
        />
        <Outcome
          good={false}
          heading="A model that goes by position says"
          answer="Rahul 60 · Shivam 90"
          who="Qwen3 8B"
          verdict="went by position"
        />
      </div>
    </Figure>
  );
}

export function ApiCompare() {
  const good = "font-mono text-emerald-700 dark:text-emerald-400";
  const bad = "font-mono text-red-700 dark:text-red-400";
  return (
    <Figure maxWidth="max-w-2xl">
      <div className="overflow-x-auto rounded-xl border border-border bg-card">
        <table className="w-full min-w-[480px] text-left text-sm">
          <thead className="bg-muted-bg text-xs text-muted">
            <tr>
              <th className="px-4 py-3 font-medium" />
              <th className="px-4 py-3 font-mono font-semibold text-foreground">/api/chat</th>
              <th className="px-4 py-3 font-mono font-semibold text-foreground">/v1/chat/completions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            <tr>
              <td className="px-4 py-3 text-muted">What it is</td>
              <td className="px-4 py-3">Ollama&apos;s own schema</td>
              <td className="px-4 py-3">Ollama imitating OpenAI&apos;s API</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-muted">Result matching</td>
              <td className={`px-4 py-3 ${bad}`}>tool_name only</td>
              <td className={`px-4 py-3 ${good}`}>tool_call_id</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-muted">Response shape</td>
              <td className="px-4 py-3 font-mono text-[13px]">message, done, timing stats</td>
              <td className="px-4 py-3 font-mono text-[13px]">choices, usage</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Figure>
  );
}
