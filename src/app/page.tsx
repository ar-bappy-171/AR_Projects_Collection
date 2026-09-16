import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Mail, Github } from "lucide-react";

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

/** WhatsApp brand glyph (lucide has no WhatsApp icon). */
function WhatsappMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      role="img"
      aria-label="WhatsApp"
      className={className}
      fill="currentColor"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
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

              <div className="flex items-center gap-4 sm:gap-6">
                <h1
                  id="hero-heading"
                  className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
                >
                  {siteConfig.name}
                </h1>
                {/* Profile picture — circular, not downloadable.
                     Download deterrents: draggable=false (no drag),
                     select-none (no select), pointer-events-none on the image
                     + a transparent overlay on top so right-click hits the
                     overlay (not the image), preventing "Save image".
                     NOTE: no technique is 100% — a determined user can still
                     open DevTools or screenshot. This stops casual saving. */}
                <div
                  className="relative size-20 shrink-0 select-none overflow-hidden rounded-full ring-2 ring-brand/30 ring-offset-2 ring-offset-background sm:size-24 lg:size-28"
                  aria-label="Profile photo of Md. Asibur Rahman Bappy"
                >
                  <Image
                    src="/profile.jpg"
                    alt="Md. Asibur Rahman Bappy"
                    width={112}
                    height={112}
                    priority
                    draggable={false}
                    className="pointer-events-none h-full w-full object-cover"
                  />
                  {/* Transparent overlay intercepts right-clicks (pure CSS) */}
                  <div className="absolute inset-0" aria-hidden />
                </div>
              </div>

              <p className="text-brand text-base font-medium sm:text-lg">
                {siteConfig.title}
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
                    href={siteConfig.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:border-brand/50 hover:bg-accent flex items-center gap-3 rounded-lg border p-3 transition-colors"
                  >
                    <span className="bg-brand-muted/60 text-brand flex size-9 items-center justify-center rounded-md">
                      <WhatsappMark className="size-4" />
                    </span>
                    <span className="flex flex-col">
                      <span className="text-sm font-medium">WhatsApp</span>
                      <span className="text-muted-foreground text-xs">
                        {siteConfig.whatsappNumber}
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
