import Link from "next/link";
import { ArrowRight, Mail, Github, ExternalLink } from "lucide-react";

import { siteConfig } from "@/data/site";
import { SiteHeader } from "@/components/site-header";
import { ProjectsSection } from "@/components/projects-section";
import { ContactForm } from "@/components/contact-form";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

/** Small inline ORCID glyph (lucide has no ORCID icon). */
function OrcidMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      role="img"
      aria-label="ORCID"
      className={className}
      fill="currentColor"
    >
      <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-4.5 4.25a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5zm-.75 2.75h1.5v8h-1.5v-8zm3.5 0h4.06c2.05 0 3.3 1.46 3.3 3.4 0 1.97-1.28 3.42-3.34 3.42H11.5V9zm1.5 1.35v5.12h2.05c1.18 0 1.95-.86 1.95-2.56 0-1.64-.8-2.56-2.02-2.56H13z" />
    </svg>
  );
}

export default function Home() {
  return (
    <div
      id="top"
      className="flex min-h-screen flex-col bg-background text-foreground"
    >
      <SiteHeader />

      <main className="flex-1">
        {/* ====================================================== HERO */}
        <section
          aria-labelledby="hero-heading"
          className="relative overflow-hidden"
        >
          {/* Subtle background gradient / texture */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-brand-muted/50 via-background to-background" />
            <div className="absolute -top-24 right-0 h-72 w-72 rounded-full bg-brand/10 blur-3xl" />
            <div
              className="absolute inset-0 opacity-[0.4] [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]"
              style={{
                backgroundImage:
                  "radial-gradient(var(--border) 1px, transparent 1px)",
                backgroundSize: "22px 22px",
              }}
            />
          </div>

          <div className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
            <div className="flex flex-col items-start gap-6">
              <Badge
                variant="outline"
                className="border-brand/40 text-brand bg-brand-muted/40 gap-1.5"
              >
                <span className="bg-brand size-1.5 rounded-full" aria-hidden />
                Available for opportunities
              </Badge>

              <h1
                id="hero-heading"
                className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
              >
                {siteConfig.name}
              </h1>

              <p className="text-brand text-base font-medium sm:text-lg">
                {siteConfig.title}
              </p>

              <p className="text-muted-foreground max-w-2xl text-base leading-relaxed sm:text-lg">
                {siteConfig.summary}
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <Button
                  asChild
                  size="lg"
                  className="bg-brand text-brand-foreground hover:bg-brand/90 h-11"
                >
                  <Link href="#projects">
                    View Projects
                    <ArrowRight className="size-4" aria-hidden />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="h-11"
                >
                  <Link href="#contact">Get in Touch</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================== PROJECTS */}
        <ProjectsSection />

        {/* =================================================== CONTACT */}
        <section
          id="contact"
          aria-labelledby="contact-heading"
          className="scroll-mt-20 border-t py-16 sm:py-24"
        >
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-2">
              <p className="text-brand text-sm font-medium tracking-wide uppercase">
                Say hello
              </p>
              <h2
                id="contact-heading"
                className="text-2xl font-bold tracking-tight sm:text-3xl"
              >
                Get in Touch
              </h2>
              <p className="text-muted-foreground max-w-2xl text-sm sm:text-base">
                Have a project, role, or question? Send a message below or
                reach out directly through any of the channels on the right.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2">
              {/* Form */}
              <Card>
                <CardHeader className="px-6 pt-6">
                  <CardTitle className="text-base">
                    Send a message
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-6 pb-6">
                  <ContactForm />
                </CardContent>
              </Card>

              {/* Direct links */}
              <Card>
                <CardHeader className="px-6 pt-6">
                  <CardTitle className="text-base">
                    Direct channels
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col gap-3 px-6 pb-6">
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="hover:border-brand/50 hover:bg-accent flex items-center gap-3 rounded-lg border p-3 transition-colors"
                  >
                    <span className="bg-brand-muted/60 text-brand flex size-9 items-center justify-center rounded-md">
                      <Mail className="size-4" aria-hidden />
                    </span>
                    <span className="flex flex-col">
                      <span className="text-sm font-medium">Email</span>
                      <span className="text-muted-foreground text-xs">
                        {siteConfig.email}
                      </span>
                    </span>
                  </a>

                  <a
                    href={siteConfig.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:border-brand/50 hover:bg-accent flex items-center gap-3 rounded-lg border p-3 transition-colors"
                  >
                    <span className="bg-brand-muted/60 text-brand flex size-9 items-center justify-center rounded-md">
                      <Github className="size-4" aria-hidden />
                    </span>
                    <span className="flex flex-col">
                      <span className="text-sm font-medium">GitHub</span>
                      <span className="text-muted-foreground text-xs">
                        @ar-bappy-171
                      </span>
                    </span>
                  </a>

                  <a
                    href={siteConfig.orcid}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:border-brand/50 hover:bg-accent flex items-center gap-3 rounded-lg border p-3 transition-colors"
                  >
                    <span className="bg-brand-muted/60 text-brand flex size-9 items-center justify-center rounded-md">
                      <OrcidMark className="size-4" />
                    </span>
                    <span className="flex flex-col">
                      <span className="text-sm font-medium">ORCID</span>
                      <span className="text-muted-foreground text-xs">
                        0009-0006-9444-8982
                      </span>
                    </span>
                  </a>

                  <a
                    href={siteConfig.portfolio}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:border-brand/50 hover:bg-accent flex items-center gap-3 rounded-lg border p-3 transition-colors"
                  >
                    <span className="bg-brand-muted/60 text-brand flex size-9 items-center justify-center rounded-md">
                      <ExternalLink className="size-4" aria-hidden />
                    </span>
                    <span className="flex flex-col">
                      <span className="text-sm font-medium">
                        Existing Portfolio
                      </span>
                      <span className="text-muted-foreground text-xs">
                        ar-bappy-171.github.io
                      </span>
                    </span>
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      {/* ====================================================== FOOTER */}
      <footer
        className="mt-auto border-t"
        style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      >
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row sm:px-6 lg:px-8">
          <p className="text-muted-foreground text-sm">
            © 2025 {siteConfig.name}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm">
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              GitHub
            </a>
            <span className="text-border" aria-hidden>
              ·
            </span>
            <a
              href={siteConfig.orcid}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              ORCID
            </a>
            <span className="text-border" aria-hidden>
              ·
            </span>
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Email
            </a>
            <span className="text-border" aria-hidden>
              ·
            </span>
            <span className="text-muted-foreground">
              Built with{" "}
              <a
                href="https://nextjs.org"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors"
              >
                Next.js
              </a>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
