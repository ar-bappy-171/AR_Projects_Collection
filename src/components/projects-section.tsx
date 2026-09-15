import { FolderOpen } from "lucide-react";

import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/project-card";

/**
 * Projects section. Renders cards from the central config file. When the
 * config is empty (the default), shows a friendly centered empty state.
 */
export function ProjectsSection() {
  const hasProjects = projects.length > 0;

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="scroll-mt-20 border-t py-16 sm:py-24"
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-2">
          <p className="text-brand text-sm font-medium tracking-wide uppercase">
            Work
          </p>
          <h2
            id="projects-heading"
            className="text-2xl font-bold tracking-tight sm:text-3xl"
          >
            Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl text-sm sm:text-base">
            A selection of things I&apos;ve designed, built, and verified —
            from VLSI layouts to software tools.
          </p>
        </div>

        {hasProjects ? (
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p) => (
              <ProjectCard key={p.name} project={p} />
            ))}
          </div>
        ) : (
          <div
            className="mt-10 flex items-center justify-center"
            role="status"
          >
            <div className="bg-card text-card-foreground flex max-w-md flex-col items-center gap-3 rounded-xl border border-dashed p-10 text-center shadow-sm">
              <div className="bg-brand-muted/50 text-brand flex size-14 items-center justify-center rounded-full">
                <FolderOpen className="size-7" aria-hidden />
              </div>
              <h3 className="text-lg font-semibold">No projects added yet</h3>
              <p className="text-muted-foreground text-sm">
                Check back soon! New projects are on the way.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
