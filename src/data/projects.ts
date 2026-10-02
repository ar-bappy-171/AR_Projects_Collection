/**
 * ============================================================================
 *  PROJECTS CONFIG — Single source of truth for the Projects section
 * ============================================================================
 *
 *  HOW TO ADD / EDIT A PROJECT
 *  ---------------------------
 *  1. Append a new object to the `projects` array below, matching the
 *     `Project` type. Your editor will flag any missing/invalid field.
 *  2. Save the file. The dev server hot-reloads and the card appears on the
 *     home page instantly — no layout code to touch.
 *
 *  FIELD REFERENCE
 *  ---------------
 *    name        (string,  REQUIRED)  Display name of the project.
 *    description (string?, OPTIONAL)  One short paragraph (1–3 sentences).
 *                                     Omit or leave "" to show a tasteful
 *                                     "Description coming soon" note on the
 *                                     card while you write it.
 *    tech        (string[]?,OPTIONAL) Tech stack badges, e.g.
 *                                     ["Next.js", "TypeScript"]. Omit or []
 *                                     to hide the tech row.
 *    platform    ("Vercel" | "Netlify" | "GitHub Pages" | "Other", REQUIRED)
 *                                     Where the live demo is hosted. Drives
 *                                     the small colored platform dot on the
 *                                     card.
 *    liveUrl     (string?, OPTIONAL)  Link to the deployed live demo.
 *                                     Omit or "" to hide the "Live Demo"
 *                                     button.
 *    repoUrl     (string?, OPTIONAL)  Link to the source code (GitHub repo
 *                                     URL). Omit or "" to hide the
 *                                     "View Code" button.
 *
 *  NOTE: There is intentionally NO image/screenshot field — this portfolio
 *  uses a clean, text-only card design. Just fill in the text fields above.
 *
 *  FULL COMMENTED EXAMPLE (copy, uncomment, and edit):
 *  -----------------------------------------------------------------
 *  {
 *    name: "AR PassVault",
 *    description:
 *      "A secure, client-side password vault that encrypts credentials" +
 *      " in the browser and syncs nothing to a server. Built to solve the" +
 *      " problem of managing dozens of strong, unique passwords without" +
 *      " trusting a third party with the plaintext.",
 *    tech: ["Next.js", "TypeScript", "WebCrypto"],
 *    platform: "Vercel",
 *    liveUrl: "https://arpassvault.vercel.app/",
 *    repoUrl: "https://github.com/ar-bappy-171/ar-passvault",
 *  },
 *  -----------------------------------------------------------------
 *
 *  NOTES
 *  -----
 *  • Leave the array empty (`[]`) to show the friendly
 *    "No projects added yet — check back soon!" empty state.
 *  • The `Project` type is exported so other components can import it.
 * ============================================================================
 */

export type ProjectPlatform = "Vercel" | "Netlify" | "GitHub Pages" | "Other";

export interface Project {
  /** Display name of the project. */
  name: string;
  /** One short paragraph (1–3 sentences). Optional — omit for a "coming soon" note. */
  description?: string;
  /** Tech stack badges. Optional — omit or [] to hide the tech row. */
  tech?: string[];
  /** Where the live demo is hosted. Drives the platform dot. */
  platform: ProjectPlatform;
  /** Optional link to the deployed live demo. Omit/"" to hide the Live Demo button. */
  liveUrl?: string;
  /** Optional link to the source code (GitHub repo). Omit/"" to hide the View Code button. */
  repoUrl?: string;
}

/**
 * The list of projects rendered on the home page.
 *
 * Currently populated with the live Vercel deployments you provided.
 * Each entry below is a REAL project — only the `name` was derived from the
 * URL slug; `liveUrl` and `platform` come directly from your list. Please
 * send the missing per-project details (description, tech stack, GitHub repo
 * URL) and they'll be dropped straight in here.
 */
export const projects: Project[] = [
  {
    name: "AR PassVault",
    description:
      "A secure, browser-based password vault that encrypts and stores your credentials locally — so your passwords stay private and accessible only to you.",
    platform: "Vercel",
    liveUrl: "https://arpassvault.vercel.app/",
  },
  {
    name: "AR Prompt Studio",
    description:
      "A workspace for crafting, testing, and refining AI prompts — built to help you write better prompts and get more reliable results from language models.",
    platform: "Vercel",
    liveUrl: "https://arpromptstudio.vercel.app/",
  },
  {
    name: "AR Prompt Vault",
    description:
      "A personal library to save, tag, and organize your most useful AI prompts so you can find and reuse them anytime in one centralized place.",
    platform: "Vercel",
    liveUrl: "https://arpromptlibrary.vercel.app/",
  },
  {
    name: "AR Stream",
    description:
      "A streaming-focused web app built to deliver smooth, responsive media playback and a clean viewing experience in the browser.",
    platform: "Vercel",
    liveUrl: "https://arstream.vercel.app/",
  },
  {
    name: "AR Actors Library",
    description:
      "A searchable reference library of actors — browse, search, and look up filmographies and details in a clean, fast interface.",
    platform: "Vercel",
    liveUrl: "https://aractresslibrary.vercel.app/",
  },
  {
    name: "AR Power Web",
    description:
      "A collection of handy web-based utilities and calculators — quick, everyday tools bundled into one fast, accessible site.",
    platform: "Vercel",
    liveUrl: "https://ar-power-web.vercel.app/",
  },
];
