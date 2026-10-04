import type { ReactNode } from "react";

export default function Callout({ title, children }: { title: string; children: ReactNode }) {
  return (
    <aside className="my-8 rounded-xl border border-border border-l-4 border-l-accent bg-muted-bg px-6 py-5">
      <p className="not-prose mb-2 font-mono text-xs font-semibold uppercase tracking-widest text-accent">
        {title}
      </p>
      <div className="[&>*:first-child]:mt-0 [&>*:last-child]:mb-0">{children}</div>
    </aside>
  );
}
