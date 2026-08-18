import Reveal from "@/components/Reveal";
import { profile } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl scroll-mt-20 px-6 py-16">
      <Reveal>
        <h2 className="text-sm font-mono uppercase tracking-widest text-accent">About</h2>
        <div className="mt-4 max-w-3xl space-y-4 text-base leading-relaxed text-foreground/90">
          {profile.summary.map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
