import { ArrowRight, Download, MapPin } from "lucide-react";
import { profile } from "@/lib/data";

export default function Hero() {
  return (
    <section className="mx-auto flex max-w-5xl flex-col items-start gap-10 px-6 pb-20 pt-16 sm:pt-24 md:flex-row md:items-center">
      <div className="flex h-28 w-28 shrink-0 items-center justify-center rounded-2xl bg-accent font-mono text-4xl font-semibold text-accent-foreground sm:h-32 sm:w-32">
        {profile.initials}
      </div>

      <div>
        <p className="flex items-center gap-1.5 text-sm text-muted">
          <MapPin size={14} />
          {profile.location}
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
          {profile.name}
        </h1>
        <p className="mt-2 text-lg text-muted">{profile.title}</p>
        <p className="mt-4 max-w-xl text-balance text-base text-foreground/90">
          {profile.tagline}
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
          >
            Get in touch
            <ArrowRight size={15} />
          </a>
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-1.5 rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-muted-bg"
          >
            <Download size={15} />
            Download résumé
          </a>
        </div>
      </div>
    </section>
  );
}
