import type { ReactNode } from "react";
import { ArrowDown, ArrowLeftRight, ArrowRight, Check } from "lucide-react";
import Figure from "./Figure";

type Role = "system" | "user" | "assistant" | "tool" | "summary";
type ChipState = "normal" | "dropped" | "bad" | "forged";

const roleTone: Record<Role, string> = {
  system: "border-accent text-accent",
  user: "border-sky-500/50 text-sky-700 dark:text-sky-400",
  assistant: "border-border text-muted",
  tool: "border-dashed border-violet-500/60 text-violet-700 dark:text-violet-400",
  summary: "border-accent bg-accent/10 text-accent",
};

function Msg({ role, label, state = "normal" }: { role: Role; label?: string; state?: ChipState }) {
  const tone =
    state === "forged"
      ? "border-red-500 bg-red-500/5 text-red-700 dark:text-red-400"
      : roleTone[role];
  const extra =
    state === "dropped" ? "opacity-35 line-through" : state === "bad" ? "ring-2 ring-red-500" : "";
  return (
    <span
      className={`inline-flex items-center rounded-md border bg-card px-2 py-1 font-mono text-[11px] ${tone} ${extra}`}
    >
      {label ?? role}
    </span>
  );
}

function Down() {
  return (
    <div className="flex justify-center py-1 text-muted">
      <ArrowDown size={18} />
    </div>
  );
}

function PanelTitle({ children }: { children: ReactNode }) {
  return (
    <p className="font-mono text-xs font-semibold uppercase tracking-widest text-accent">{children}</p>
  );
}

export function GuardrailsHero() {
  return (
    <Figure>
      <svg
        viewBox="0 0 640 240"
        className="h-auto w-full"
        role="img"
        aria-label="A shield with a check mark next to the words: guardrails are code around the model, not instructions to it."
      >
        <rect x="0.75" y="0.75" width="638.5" height="238.5" rx="20" className="fill-muted-bg stroke-border" />
        <path
          d="M130 36 L196 60 V120 C196 162 164 192 130 208 C96 192 64 162 64 120 V60 Z"
          className="fill-accent/10 stroke-accent"
          strokeWidth="6"
          strokeLinejoin="round"
        />
        <path
          d="M100 120 L123 144 L162 96"
          className="fill-none stroke-accent"
          strokeWidth="9"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <g className="text-[28px] font-bold">
          <text x="248" y="104" className="fill-foreground">
            Guardrails are code
          </text>
          <text x="248" y="142" className="fill-foreground">
            around the model,
          </text>
          <text x="248" y="180" className="fill-accent">
            not instructions to it.
          </text>
        </g>
      </svg>
    </Figure>
  );
}

type Gate = { n: number; title: string; built: string[]; missing: string[] };

const gates: Record<"before" | "tools" | "loop" | "after", Gate> = {
  before: {
    n: 1,
    title: "Before the model",
    built: ["Drops fake system messages from the browser", "Trims long history (window or summary)"],
    missing: ["Message length limit", "Rate limit", "Only the system role is filtered"],
  },
  tools: {
    n: 2,
    title: "Around the tools",
    built: ["A zod schema checks every argument"],
    missing: [
      "An unknown tool name crashes the request",
      "Tool errors crash it too, instead of going back to the model",
      "Permission checks",
    ],
  },
  loop: {
    n: 3,
    title: "Around the loop",
    built: [],
    missing: ["Step limit", "Timeout on the model call"],
  },
  after: {
    n: 4,
    title: "After the model",
    built: ["Replaces replies that contain a tool name (weak: exact names only)"],
    missing: ["A smarter check on the answer"],
  },
};

function GateBody({ gate }: { gate: Gate }) {
  return (
    <>
      <div className="flex items-center gap-2">
        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-semibold text-accent-foreground">
          {gate.n}
        </span>
        <p className="text-sm font-semibold">{gate.title}</p>
      </div>
      <ul className="mt-3 space-y-1.5 text-[13px]">
        {gate.built.map((item) => (
          <li key={item} className="flex items-start gap-2">
            <Check size={14} className="mt-0.5 shrink-0 text-emerald-600 dark:text-emerald-400" />
            <span>{item}</span>
          </li>
        ))}
        {gate.missing.map((item) => (
          <li key={item} className="flex items-start gap-2 text-muted">
            <span className="mt-[3px] h-3 w-3 shrink-0 rounded-full border-2 border-red-500/70" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </>
  );
}

function GateCard({ gate }: { gate: Gate }) {
  return (
    <div className="rounded-xl border border-border bg-card p-4">
      <GateBody gate={gate} />
    </div>
  );
}

function Pill({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto w-fit rounded-full border border-border bg-muted-bg px-4 py-1.5 text-sm font-medium">
      {children}
    </div>
  );
}

function Box({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-lg border border-accent bg-card px-4 py-2 text-sm font-semibold">
      {children}
    </span>
  );
}

export function GuardrailPipeline() {
  return (
    <Figure
      maxWidth="max-w-xl"
      caption="Four places to put a check. A check mark means I built it. An empty circle means it's still missing."
    >
      <Pill>User message</Pill>
      <Down />
      <GateCard gate={gates.before} />
      <Down />
      <div className="rounded-2xl border-2 border-dashed border-accent/60 p-4">
        <GateBody gate={gates.loop} />
        <div className="my-4 flex items-center justify-center gap-3">
          <Box>Model</Box>
          <ArrowLeftRight size={18} className="text-muted" />
          <Box>Tools</Box>
        </div>
        <GateCard gate={gates.tools} />
      </div>
      <Down />
      <GateCard gate={gates.after} />
      <Down />
      <Pill>Reply to the user</Pill>
    </Figure>
  );
}

function Verdict({
  tag,
  tagTone,
  cardTone,
  title,
  points,
}: {
  tag: string;
  tagTone: string;
  cardTone: string;
  title: string;
  points: string[];
}) {
  return (
    <div className={`rounded-xl border p-4 ${cardTone}`}>
      <div className="flex items-center justify-between gap-2">
        <p className="text-sm font-semibold">{title}</p>
        <span className={`rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${tagTone}`}>{tag}</span>
      </div>
      <ul className="mt-3 space-y-2 text-[13px] text-muted">
        {points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
    </div>
  );
}

export function SoftVsHard() {
  return (
    <Figure maxWidth="max-w-2xl">
      <div className="grid gap-4 sm:grid-cols-2">
        <Verdict
          tag="Soft"
          tagTone="bg-amber-500/15 text-amber-700 dark:text-amber-400"
          cardTone="border-amber-500/40 bg-card"
          title="A rule in the prompt"
          points={[
            "You ask the model nicely.",
            "It can be talked around.",
            "I asked a small model for a three-word reply. It wrote a paragraph and an emoji.",
          ]}
        />
        <Verdict
          tag="Hard"
          tagTone="bg-emerald-500/15 text-emerald-700 dark:text-emerald-400"
          cardTone="border-emerald-500/40 bg-card"
          title="A check in code"
          points={[
            "It runs every single time.",
            "The model can't talk its way past it.",
            "But mine only catches exact tool names. A floor, not a wall.",
          ]}
        />
      </div>
    </Figure>
  );
}

function Panel({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="rounded-xl border border-border bg-card p-4">
      <PanelTitle>{title}</PanelTitle>
      <div className="mt-3 flex flex-wrap gap-2">{children}</div>
    </div>
  );
}

export function HistoryFilter() {
  return (
    <Figure
      maxWidth="max-w-2xl"
      caption="The client controls its own history, so the server never trusts a system message from it."
    >
      <div className="grid items-center gap-3 sm:grid-cols-[1fr_auto_1fr]">
        <Panel title="The browser sends">
          <Msg role="system" label="system (fake!)" state="forged" />
          <Msg role="user" />
          <Msg role="assistant" />
          <Msg role="user" />
        </Panel>
        <div className="flex flex-col items-center gap-1 text-center text-xs text-muted sm:max-w-[130px]">
          <ArrowRight size={18} className="hidden sm:block" />
          <ArrowDown size={18} className="sm:hidden" />
          <span>Server drops every system message, then adds its own</span>
        </div>
        <Panel title="The model gets">
          <Msg role="system" label="system (the server's own)" />
          <Msg role="user" />
          <Msg role="assistant" />
          <Msg role="user" />
        </Panel>
      </div>
    </Figure>
  );
}

const conversation: { role: Role; label: string }[] = [
  { role: "system", label: "system" },
  { role: "user", label: "user" },
  { role: "assistant", label: "call" },
  { role: "tool", label: "result" },
  { role: "assistant", label: "answer" },
  { role: "user", label: "user" },
  { role: "assistant", label: "call" },
  { role: "tool", label: "result" },
  { role: "assistant", label: "answer" },
  { role: "user", label: "user" },
];

function ChipRow({
  title,
  note,
  stateFor,
}: {
  title: string;
  note?: string;
  stateFor: (index: number) => ChipState;
}) {
  return (
    <div>
      <p className="text-xs font-semibold text-muted">{title}</p>
      <div className="mt-2 flex flex-wrap gap-1.5">
        {conversation.map((m, i) => (
          <Msg key={i} role={m.role} label={m.label} state={stateFor(i)} />
        ))}
      </div>
      {note && <p className="mt-2 text-xs text-muted">{note}</p>}
    </div>
  );
}

export function WindowCut() {
  return (
    <Figure
      maxWidth="max-w-2xl"
      caption="Faded chips are dropped. The system prompt always stays first."
    >
      <div className="space-y-5 rounded-xl border border-border bg-card p-5">
        <ChipRow title="The conversation" stateFor={() => "normal"} />
        <ChipRow
          title="Naive: keep the last 3 messages"
          note="The window starts on a tool result with no request in front of it. The model gets confused."
          stateFor={(i) => (i === 0 || i >= 8 ? "normal" : i === 7 ? "bad" : "dropped")}
        />
        <ChipRow
          title="Mine: always start at a user message"
          note="No tool call is ever split from its result."
          stateFor={(i) => (i === 0 || i === 9 ? "normal" : "dropped")}
        />
      </div>
    </Figure>
  );
}

export function SummarizeFlow() {
  return (
    <Figure
      maxWidth="max-w-2xl"
      caption="The browser table still shows every original message. Only the model's view is shortened."
    >
      <div className="rounded-xl border border-border bg-card p-5">
        <p className="text-xs font-semibold text-muted">1. The conversation passes the limit</p>
        <div className="mt-2 flex flex-wrap gap-1.5">
          <Msg role="system" />
          <Msg role="user" label="msg 1" />
          <Msg role="assistant" label="msg 2" />
          <Msg role="user" label="msg 3" />
          <Msg role="assistant" label="msg 4" />
          <Msg role="user" label="msg 5" />
          <Msg role="assistant" label="msg 6" />
        </div>
        <Down />
        <p className="text-xs font-semibold text-muted">
          2. Ask the model to summarize the older messages. Keep the newest ones as they were.
        </p>
        <Down />
        <p className="text-xs font-semibold text-muted">3. This is what the model sees</p>
        <div className="mt-2 flex flex-wrap gap-1.5">
          <Msg role="summary" label="system + summary of msgs 1-4" />
          <Msg role="user" label="msg 5" />
          <Msg role="assistant" label="msg 6" />
        </div>
      </div>
    </Figure>
  );
}
