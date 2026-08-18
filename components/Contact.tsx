import { Mail, Phone } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import Reveal from "@/components/Reveal";
import { profile } from "@/lib/data";

const links = [
  { icon: Mail, label: profile.email, href: `mailto:${profile.email}` },
  { icon: Phone, label: profile.phone, href: `tel:${profile.phone.replace(/\s+/g, "")}` },
  { icon: LinkedinIcon, label: "LinkedIn", href: profile.linkedin },
  { icon: GithubIcon, label: "GitHub", href: profile.github },
];

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl scroll-mt-20 px-6 py-16">
      <Reveal>
        <h2 className="text-sm font-mono uppercase tracking-widest text-accent">Contact</h2>
        <h3 className="mt-4 max-w-xl text-2xl font-semibold text-balance">
          Building applied AI for enterprises, or turning frontier models into products people
          use? Let&apos;s talk.
        </h3>

        <div className="mt-8 flex flex-wrap gap-4">
          {links.map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noreferrer" : undefined}
              className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2.5 text-sm transition-colors hover:bg-muted-bg"
            >
              <Icon size={15} />
              {label}
            </a>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
