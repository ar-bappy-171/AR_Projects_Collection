"use client";

import * as React from "react";
import Link from "next/link";
import { Github, Mail, Menu, Cpu } from "lucide-react";

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
              href={siteConfig.whatsapp}
              label="WhatsApp"
              external
            >
              <WhatsappMark className="size-4" />
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
                    href={siteConfig.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:bg-accent flex items-center gap-3 rounded-md px-3 py-3 text-sm font-medium transition-colors"
                  >
                    <WhatsappMark className="size-4" />
                    WhatsApp
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
