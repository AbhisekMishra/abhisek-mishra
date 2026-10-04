import type { ReactNode } from "react";

export default function Figure({
  children,
  caption,
  maxWidth = "max-w-full",
}: {
  children: ReactNode;
  caption?: string;
  maxWidth?: string;
}) {
  return (
    <figure className={`not-prose mx-auto my-8 ${maxWidth}`}>
      {children}
      {caption && <figcaption className="mt-3 text-center text-xs text-muted">{caption}</figcaption>}
    </figure>
  );
}
