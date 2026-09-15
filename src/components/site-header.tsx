"use client";

import * as React from "react";
import Link from "next/link";
import { Github, Mail, ExternalLink, Menu, Cpu } from "lucide-react";

import { siteConfig } from "@/data/site";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
] as const;

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

function IconLink({
  href,
  label,
  children,
  external,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
  external?: boolean;
}) {
  return (
    <Button
      asChild
      variant="ghost"
      size="icon"
      className="text-muted-foreground hover:text-foreground hover:bg-accent size-9 rounded-full"
    >
      <a
        href={href}
        aria-label={label}
        title={label}
        {...(external
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {children}
      </a>
    </Button>
  );
}

export function SiteHeader() {
  const [open, setOpen] = React.useState(false);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur-md",
        "supports-[backdrop-filter]:bg-background/60"
      )}
    >
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        {/* Wordmark */}
        <Link
          href="#top"
          className="flex items-center gap-2 text-base font-semibold tracking-tight transition-colors hover:text-brand"
          aria-label={`${siteConfig.shortName} — home`}
        >
          <span className="bg-brand text-brand-foreground flex size-8 items-center justify-center rounded-lg">
            <Cpu className="size-4" aria-hidden />
          </span>
          <span className="hidden sm:inline">{siteConfig.shortName}</span>
          <span className="sm:hidden">{siteConfig.shortName}</span>
        </Link>

        {/* Desktop nav */}
        <nav
          className="hidden items-center gap-1 md:flex"
          aria-label="Primary"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-muted-foreground hover:text-foreground hover:bg-accent rounded-md px-3 py-2 text-sm font-medium transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right-side actions (desktop) */}
        <div className="flex items-center gap-1">
          <div className="hidden items-center gap-1 sm:flex">
            <IconLink
              href={siteConfig.github}
              label="GitHub"
              external
            >
              <Github className="size-4" aria-hidden />
            </IconLink>
            <IconLink
              href={siteConfig.orcid}
              label="ORCID profile"
              external
            >
              <OrcidMark className="size-4" />
            </IconLink>
            <IconLink
              href={siteConfig.portfolio}
              label="Existing portfolio"
              external
            >
              <ExternalLink className="size-4" aria-hidden />
            </IconLink>
            <IconLink href={`mailto:${siteConfig.email}`} label="Email">
              <Mail className="size-4" aria-hidden />
            </IconLink>
          </div>

          <ThemeToggle />

          {/* Mobile menu */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="size-9 rounded-full md:hidden"
                aria-label="Open navigation menu"
              >
                <Menu className="size-5" aria-hidden />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <SheetTitle className="px-4 pt-4 text-base font-semibold">
                Menu
              </SheetTitle>
              <nav
                className="flex flex-col gap-1 px-4 pt-4"
                aria-label="Mobile"
              >
                {navLinks.map((link) => (
                  <SheetClose asChild key={link.href}>
                    <Link
                      href={link.href}
                      className="hover:bg-accent rounded-md px-3 py-3 text-base font-medium transition-colors"
                    >
                      {link.label}
                    </Link>
                  </SheetClose>
                ))}
              </nav>
              <div className="mt-4 flex flex-col gap-1 border-t px-4 pt-4">
                <SheetClose asChild>
                  <a
                    href={siteConfig.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:bg-accent flex items-center gap-3 rounded-md px-3 py-3 text-sm font-medium transition-colors"
                  >
                    <Github className="size-4" aria-hidden />
                    GitHub
                  </a>
                </SheetClose>
                <SheetClose asChild>
                  <a
                    href={siteConfig.orcid}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:bg-accent flex items-center gap-3 rounded-md px-3 py-3 text-sm font-medium transition-colors"
                  >
                    <OrcidMark className="size-4" />
                    ORCID
                  </a>
                </SheetClose>
                <SheetClose asChild>
                  <a
                    href={siteConfig.portfolio}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:bg-accent flex items-center gap-3 rounded-md px-3 py-3 text-sm font-medium transition-colors"
                  >
                    <ExternalLink className="size-4" aria-hidden />
                    Existing Portfolio
                  </a>
                </SheetClose>
                <SheetClose asChild>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="hover:bg-accent flex items-center gap-3 rounded-md px-3 py-3 text-sm font-medium transition-colors"
                  >
                    <Mail className="size-4" aria-hidden />
                    Email
                  </a>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
