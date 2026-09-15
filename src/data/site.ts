/**
 * Central site configuration — personal info, links, and content for the
 * portfolio. Edit values here and they propagate across the whole site.
 */

export const siteConfig = {
  name: "Md. Asibur Rahman Bappy",
  shortName: "AR Bappy",
  title: "Electrical & Electronic Engineering Graduate | VLSI & Semiconductor",
  /** One-line role used in the document title and hero subtitle. */
  role: "EEE Graduate · VLSI & Semiconductor Focus",
  summary:
    "EEE graduate (2025, AUST) focused on VLSI / IC design — SRAM cell design, DRC/LVS verification at 90nm / 45nm using Cadence Virtuoso — with strong C++, Python, and MATLAB skills for automation and analysis.",
  // --- Links ---
  github: "https://github.com/ar-bappy-171",
  email: "asibur.eee.171@gmail.com",
  /** Existing static portfolio (GitHub Pages). */
  portfolio: "https://ar-bappy-171.github.io/AsiburPortfolio/",
  /** ORCID iD — full URL constructed from the iD. */
  orcid: "https://orcid.org/0009-0006-9444-8982",
} as const;

export type SiteConfig = typeof siteConfig;
