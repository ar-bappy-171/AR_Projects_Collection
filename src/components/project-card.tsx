"use client";

import * as React from "react";
import {
  Github,
  ExternalLink,
  FolderGit2,
} from "lucide-react";

import type { Project, ProjectPlatform } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/** Platform metadata: label, dot color, and small icon. */
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
 * A single project card. Handles image loading (shimmer placeholder), image
 * load-error (clean initial-on-muted-bg fallback), tech badges, platform dot,
 * and Live Demo / View Code buttons.
 */
export function ProjectCard({ project }: { project: Project }) {
  const [imgState, setImgState] = React.useState<
    "loading" | "loaded" | "error"
  >("loading");

  const initial = project.name.trim().charAt(0).toUpperCase() || "P";
  const platform = platformMeta[project.platform] ?? platformMeta.Other;
  const showLive = Boolean(project.liveUrl);

  return (
    <article
      className={cn(
        "group bg-card text-card-foreground flex flex-col overflow-hidden rounded-xl border shadow-sm",
        "transition-all duration-200",
        "hover:-translate-y-1 hover:shadow-md hover:border-brand/50"
      )}
    >
      {/* Thumbnail */}
      <div className="bg-muted relative aspect-[16/9] w-full overflow-hidden">
        {/* Shimmer while loading */}
        {imgState === "loading" && (
          <div className="brand-shimmer absolute inset-0" aria-hidden />
        )}

        {/* The actual image (hidden via opacity until loaded) */}
        {imgState !== "error" && (
          <img
            src={project.image}
            alt={`${project.name} preview`}
            loading="lazy"
            decoding="async"
            onLoad={() => setImgState("loaded")}
            onError={() => setImgState("error")}
            className={cn(
              "h-full w-full object-cover transition-opacity duration-500",
              imgState === "loaded"
                ? "opacity-100 brand-fade-in"
                : "opacity-0"
            )}
          />
        )}

        {/* Clean fallback: project initial on a muted background — no broken icon */}
        {imgState === "error" && (
          <div
            className="absolute inset-0 flex items-center justify-center bg-muted"
            aria-hidden
          >
            <div className="flex flex-col items-center gap-2 text-muted-foreground">
              <FolderGit2 className="size-8" />
              <span className="text-3xl font-semibold tracking-tight">
                {initial}
              </span>
            </div>
          </div>
        )}

        {/* Platform badge */}
        <div className="absolute right-2 top-2">
          <Badge
            variant="secondary"
            className="bg-background/80 text-foreground border-border/60 backdrop-blur-sm"
          >
            <span
              className={cn("size-1.5 rounded-full", platform.dot)}
              aria-hidden
            />
            {platform.label}
          </Badge>
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col gap-3 p-5">
        <h3 className="text-base font-semibold leading-tight tracking-tight">
          {project.name}
        </h3>
        <p className="text-muted-foreground line-clamp-3 text-sm leading-relaxed">
          {project.description}
        </p>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <Badge key={t} variant="outline" className="font-normal">
              {t}
            </Badge>
          ))}
        </div>

        {/* Actions */}
        <div className="mt-auto flex flex-wrap gap-2 pt-2">
          <Button
            asChild
            size="sm"
            variant="outline"
            className="h-9"
          >
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View source code for ${project.name}`}
            >
              <Github className="size-4" aria-hidden />
              View Code
            </a>
          </Button>
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
      </div>
    </article>
  );
}
