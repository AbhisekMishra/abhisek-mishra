import Reveal from "@/components/Reveal";
import { Award, GraduationCap } from "lucide-react";
import { certifications, education } from "@/lib/data";

export default function Education() {
  return (
    <section id="education" className="mx-auto max-w-5xl scroll-mt-20 px-6 py-16">
      <Reveal>
        <h2 className="text-sm font-mono uppercase tracking-widest text-accent">
          Education &amp; Certifications
        </h2>
      </Reveal>

      <div className="mt-8 grid gap-8 sm:grid-cols-2">
        <Reveal>
          <div className="flex items-start gap-3">
            <GraduationCap size={20} className="mt-0.5 shrink-0 text-accent" />
            <div>
              <h3 className="text-base font-semibold">{education.degree}</h3>
              <p className="text-sm text-muted">
                {education.school} · {education.detail}
              </p>
              <p className="mt-1 text-sm text-muted">{education.period}</p>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="flex items-start gap-3">
            <Award size={20} className="mt-0.5 shrink-0 text-accent" />
            <div>
              <h3 className="text-base font-semibold">Certifications &amp; Awards</h3>
              <ul className="mt-2 space-y-1.5">
                {certifications.map((item) => (
                  <li key={item} className="text-sm text-foreground/85">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
