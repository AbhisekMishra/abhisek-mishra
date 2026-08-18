import Reveal from "@/components/Reveal";
import { skillGroups } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl scroll-mt-20 px-6 py-16">
      <Reveal>
        <h2 className="text-sm font-mono uppercase tracking-widest text-accent">Skills</h2>
      </Reveal>

      <div className="mt-8 grid gap-8 sm:grid-cols-2">
        {skillGroups.map((group) => (
          <Reveal key={group.label}>
            <h3 className="text-sm font-medium">{group.label}</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-border bg-muted-bg px-3 py-1 text-xs text-foreground/85"
                >
                  {skill}
                </span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
