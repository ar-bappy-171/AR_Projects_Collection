import {
  Github,
  ExternalLink,
  Globe,
} from "lucide-react";

import type { Project, ProjectPlatform } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/** Platform metadata: label + dot color. */
const platformMeta: Record<
  ProjectPlatform,
  { label: string; dot: string }
> = {
  Vercel: { label: "Vercel", dot: "bg-zinc-900 dark:bg-zinc-100" },
  Netlify: { label: "Netlify", dot: "bg-teal-500" },
  "GitHub Pages": { label: "GitHub Pages", dot: "bg-zinc-700" },
  Other: { label: "Other", dot: "bg-brand" },
};

/**
 * A single project card — clean, text-only design (no screenshot).
 *
 * Gracefully handles optional fields:
 *  - no description → shows a muted "Description coming soon" note
 *  - no tech        → hides the tech row
 *  - no repoUrl     → hides the "View Code" button
 *  - no liveUrl     → hides the "Live Demo" button
 */
export function ProjectCard({ project }: { project: Project }) {
  const platform = platformMeta[project.platform] ?? platformMeta.Other;
  const showLive = Boolean(project.liveUrl);
  const showCode = Boolean(project.repoUrl);
  const showTech = Boolean(project.tech && project.tech.length > 0);
  const hasAnyAction = showLive || showCode;

  return (
    <article
      className={cn(
        "group bg-card text-card-foreground flex flex-col gap-4 rounded-xl border p-5 shadow-sm",
        "transition-all duration-200",
        "hover:-translate-y-1 hover:shadow-md hover:border-brand/50"
      )}
    >
      {/* Header row: name + platform badge */}
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-base font-semibold leading-tight tracking-tight">
          {project.name}
        </h3>
        <Badge
          variant="secondary"
          className="shrink-0 border-border/60"
        >
          <span
            className={cn("size-1.5 rounded-full", platform.dot)}
            aria-hidden
          />
          {platform.label}
        </Badge>
      </div>

      {/* Description (or a tasteful "coming soon" note) */}
      {project.description ? (
        <p className="text-muted-foreground text-sm leading-relaxed">
          {project.description}
        </p>
      ) : (
        <p className="text-muted-foreground/70 text-sm italic leading-relaxed">
          Description coming soon.
        </p>
      )}

      {/* Tech badges (hidden if none) */}
      {showTech && (
        <div className="flex flex-wrap gap-1.5">
          {project.tech!.map((t) => (
            <Badge key={t} variant="outline" className="font-normal">
              {t}
            </Badge>
          ))}
        </div>
      )}

      {/* Actions */}
      {hasAnyAction ? (
        <div className="mt-auto flex flex-wrap gap-2 pt-1">
          {showCode && (
            <Button asChild size="sm" variant="outline" className="h-9">
              <a
                href={project.repoUrl as string}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View source code for ${project.name}`}
              >
                <Github className="size-4" aria-hidden />
                View Code
              </a>
            </Button>
          )}
          {showLive && (
            <Button
              asChild
              size="sm"
              className="bg-brand text-brand-foreground hover:bg-brand/90 h-9"
            >
              <a
                href={project.liveUrl as string}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open live demo of ${project.name}`}
              >
                <ExternalLink className="size-4" aria-hidden />
                Live Demo
              </a>
            </Button>
          )}
        </div>
      ) : (
        <div className="mt-auto flex items-center gap-1.5 pt-1 text-xs text-muted-foreground/60">
          <Globe className="size-3.5" aria-hidden />
          <span>Links coming soon</span>
        </div>
      )}
    </article>
  );
}
