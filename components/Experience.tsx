import Reveal from "@/components/Reveal";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-5xl scroll-mt-20 px-6 py-16">
      <Reveal>
        <h2 className="text-sm font-mono uppercase tracking-widest text-accent">Experience</h2>
      </Reveal>

      <div className="mt-8 space-y-10">
        {experience.map((role) => (
          <Reveal key={`${role.company}-${role.role}-${role.period}`}>
            <div className="grid gap-2 border-l-2 border-border pl-6 sm:grid-cols-[220px_1fr] sm:gap-8">
              <div>
                <p className="text-sm font-medium text-muted">{role.period}</p>
                <p className="mt-1 text-sm text-muted">{role.location}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold">{role.role}</h3>
                <p className="text-sm text-accent">{role.company}</p>
                <ul className="mt-3 space-y-2">
                  {role.bullets.map((bullet) => (
                    <li key={bullet.slice(0, 40)} className="text-sm leading-relaxed text-foreground/85">
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
