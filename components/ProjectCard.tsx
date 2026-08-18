import { ExternalLink } from "lucide-react";
import type { Project } from "@/lib/data";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="flex h-full flex-col rounded-xl border border-border bg-card p-6">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-base font-semibold">{project.name}</h3>
          <p className="text-sm text-muted">{project.org}</p>
        </div>
        <span
          className={`shrink-0 rounded-full px-2.5 py-1 text-[11px] font-medium ${
            project.status === "Production"
              ? "bg-accent/15 text-accent"
              : "bg-muted-bg text-muted"
          }`}
        >
          {project.status === "Production" ? "Production" : "Personal"}
        </span>
      </div>

      <p className="mt-3 text-sm leading-relaxed text-foreground/85">{project.description}</p>

      <ul className="mt-4 space-y-2">
        {project.bullets.map((bullet) => (
          <li key={bullet.slice(0, 40)} className="text-sm leading-relaxed text-foreground/75">
            {bullet}
          </li>
        ))}
      </ul>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span key={tag} className="rounded-full border border-border px-2.5 py-1 text-[11px] text-muted">
            {tag}
          </span>
        ))}
      </div>

      {project.link ? (
        <a
          href={project.link.url}
          target="_blank"
          rel="noreferrer"
          className="mt-5 inline-flex w-fit items-center gap-1.5 text-sm font-medium text-accent hover:opacity-80"
        >
          {project.link.label}
          <ExternalLink size={13} />
        </a>
      ) : (
        <p className="mt-5 text-xs text-muted">Private — enterprise production system</p>
      )}
    </div>
  );
}
