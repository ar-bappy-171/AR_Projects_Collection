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
  // --- Links ---
  github: "https://github.com/ar-bappy-171",
  email: "asibur.eee.171@gmail.com",
  /** WhatsApp — wa.me link (international format, no "+" or leading zeros). */
  whatsapp: "https://wa.me/8801853265996",
  /** WhatsApp number shown to visitors. */
  whatsappNumber: "+880 1853265996",
  /** ORCID iD — full URL constructed from the iD. */
  orcid: "https://orcid.org/0009-0006-9444-8982",
} as const;

export type SiteConfig = typeof siteConfig;
