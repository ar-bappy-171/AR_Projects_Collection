/**
 * ============================================================================
 *  PROJECTS CONFIG — Single source of truth for the Projects section
 * ============================================================================
 *
 *  HOW TO ADD A PROJECT
 *  -------------------
 *  1. Append a new object to the `projects` array below, matching the `Project`
 *     type. Each object must satisfy the TypeScript type — the editor will
 *     show errors if a required field is missing or a value is invalid.
 *  2. Save the file. The dev server hot-reloads and the new card appears
 *     instantly on the Projects section of the home page.
 *
 *  FIELD REFERENCE
 *  ---------------
 *    name        (string, required)              — Display name of the project.
 *    description (string, required)              — One short paragraph (1–3
 *                                                  sentences). Avoid markdown.
 *    image       (string, required)              — Thumbnail image URL.
 *                                                  • LOCAL FILE:  put the image
 *                                                    in /public/projects/ (e.g.
 *                                                    /public/projects/adc.png)
 *                                                    and reference it as
 *                                                    "/projects/adc.png".
 *                                                  • EXTERNAL URL: paste any
 *                                                    https://... URL directly.
 *                                                  If the image fails to load,
 *                                                    a clean placeholder (the
 *                                                    project's initial on a
 *                                                    muted background) is shown
 *                                                    automatically — no broken
 *                                                    image icon ever appears.
 *    tech        (string[], required)            — Tech stack badges, e.g.
 *                                                  ["Cadence Virtuoso", "C++"].
 *    platform    ("Vercel" | "Netlify" |         — Where the live demo is
 *                 "GitHub Pages" | "Other",        hosted. Drives the small
 *                 required)                         colored platform dot/icon.
 *    repoUrl     (string, required)              — Link to the source code
 *                                                  (GitHub repo URL, must start
 *                                                  with https://).
 *    liveUrl     (string, optional)              — Link to the deployed live
 *                                                  demo. OMIT this field (or
 *                                                  leave it as an empty string
 *                                                  "") when there is no live
 *                                                  demo; in that case the
 *                                                  "Live Demo" button is hidden
 *                                                  automatically.
 *
 *  FULL COMMENTED EXAMPLE (copy, uncomment, and edit):
 *  -----------------------------------------------------------------
 *  {
 *    name: "90nm SRAM Cell Design",
 *    description:
 *      "Designed and simulated a 6T SRAM bitcell in Cadence Virtuoso at the" +
 *      " 90nm node. Performed DRC/LVS clean layout, static-noise-margin" +
 *      " analysis, and read/write margin characterization across process" +
 *      " corners.",
 *    image: "/projects/sram-cell.png",
 *    tech: ["Cadence Virtuoso", "DRC/LVS", "SPICE", "CMOS 90nm"],
 *    platform: "GitHub Pages",
 *    repoUrl: "https://github.com/ar-bappy-171/sram-cell-design",
 *    liveUrl: "https://ar-bappy-171.github.io/sram-cell-design/",
 *  },
 *  -----------------------------------------------------------------
 *
 *  NOTES
 *  -----
 *  • Leave the array empty (`[]`) to show the friendly
 *    "No projects added yet — check back soon!" empty state on the page.
 *  • The `Project` type is also exported so other components can import it.
 * ============================================================================
 */

export type ProjectPlatform = "Vercel" | "Netlify" | "GitHub Pages" | "Other";

export interface Project {
  /** Display name of the project. */
  name: string;
  /** One short paragraph describing the project (1–3 sentences). */
  description: string;
  /**
   * Thumbnail image URL.
   * Local file: put it in /public/projects/ and use "/projects/yourimage.png".
   * External URL: any https://... URL.
   * Falls back to a clean placeholder if loading fails.
   */
  image: string;
  /** Tech stack badges, e.g. ["Cadence Virtuoso", "C++"]. */
  tech: string[];
  /** Where the live demo is hosted. Drives the platform dot/icon. */
  platform: ProjectPlatform;
  /** Link to the source code (GitHub repo URL). */
  repoUrl: string;
  /**
   * Optional link to the deployed live demo.
   * Omit or set to "" to hide the "Live Demo" button.
   */
  liveUrl?: string;
}

/**
 * The list of projects rendered on the home page.
 *
 * Currently EMPTY by design — add your real projects above following the
 * commented example. While empty, the Projects section shows a friendly
 * "No projects added yet — check back soon!" message.
 */
export const projects: Project[] = [];
