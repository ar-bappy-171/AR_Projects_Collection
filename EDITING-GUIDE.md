# Editing Guide — AR Bappy Portfolio

This guide tells you exactly which file to open for anything you might want
to change. Edit the file, save, and the dev server hot-reloads instantly.

> All paths are relative to the project root, e.g. `src/data/site.ts`.

---

## 1. Your personal info (name, title, links)

**File:** `src/data/site.ts`

```ts
name:           "Md. Asibur Rahman Bappy"   // your full name (hero h1)
shortName:      "AR Bappy"                  // wordmark in the header
title:          "Electrical & Electronic..."// the brand-coloured subtitle in hero
github:         "https://github.com/ar-bappy-171"
email:          "asibur.eee.171@gmail.com"
whatsapp:       "https://wa.me/8801853265996"   // wa.me link (no "+" or leading zeros)
whatsappNumber: "+880 1853265996"               // text shown to visitors
orcid:          "https://orcid.org/0009-0006-9444-8982"
```

---

## 2. Projects (add / edit / remove)

**File:** `src/data/projects.ts`

This is the ONLY file you touch to manage project cards. Each project is one
object in the `projects` array:

```ts
{
  name: "AR PassVault",                              // card title
  description: "One short paragraph about it…",      // card text (edit freely)
  tech: ["Next.js", "TypeScript"],                   // OPTIONAL — tech badges
  platform: "Vercel",                                // "Vercel" | "Netlify" | "GitHub Pages" | "Other"
  liveUrl: "https://arpassvault.vercel.app/",        // "Live Demo" button
  repoUrl: "https://github.com/.../repo",            // OPTIONAL — "View Code" button
},
```

- To **add** a project: copy the block above, fill it in, paste inside the `[]`.
- To **remove** a project: delete its block.
- To **edit** a description: just change the text between the quotes.
- Omit `repoUrl` / `tech` / `liveUrl` to hide the corresponding button/badges.

The file has a full commented example at the top showing every field.

---

## 3. Hero section (badge, name, title, profile photo, buttons)

**File:** `src/app/page.tsx` → look for `{/* ===== HERO ===== */}`

| What | Where in the file |
|---|---|
| "Available for opportunities" badge text | `Available for opportunities` |
| Your name | `{siteConfig.name}` (comes from `site.ts`) |
| Your title (brand-coloured line) | `{siteConfig.title}` (comes from `site.ts`) |
| "View Projects" button text | `View Projects` |
| "Get in Touch" button text | `Get in Touch` |
| Profile photo file | `src="/profile.jpg"` → the image at `public/profile.jpg` |
| Profile photo size | `size-32 sm:size-40 lg:size-48` (128 / 160 / 192 px) |
| Profile photo shape | `rounded-full` (circular) — change to `rounded-2xl` for a rounded square |
| Profile photo ring/border | `ring-2 ring-brand/30 ring-offset-4` |

**To change the photo:** replace the file `public/profile.jpg` with a new image
(keep the same filename). Or put a new image in `public/` and change `src`.

---

## 4. Projects section heading & subtitle

**File:** `src/components/projects-section.tsx`

```tsx
<h2 id="projects-heading" className="text-2xl font-bold tracking-tight sm:text-3xl">
  Personal Project          {/* ← the section heading */}
</h2>
<p className="text-muted-foreground ...">
  A selection of things I've designed, built, and verified.   {/* ← subtitle */}
</p>
```

---

## 5. Project card appearance & behaviour

**File:** `src/components/project-card.tsx`

| What | Where |
|---|---|
| Description line-clamp on desktop | `sm:line-clamp-3` (3 lines). Change the `3` to any number. |
| Hover tooltip | `title={project.description}` on the `<article>` — remove to disable |
| Card hover lift effect | `hover:-translate-y-1 hover:shadow-md hover:border-brand/50` |
| Card padding | `p-5` (change to `p-4` for tighter, `p-6` for looser) |
| Card border radius | `rounded-xl` (change to `rounded-lg` or `rounded-2xl`) |
| Platform badge dot colours | `platformMeta` object at the top of the file |
| "Live Demo" / "View Code" button text | `Live Demo` / `View Code` strings |

---

## 6. Header (logo, nav, social icons)

**File:** `src/components/site-header.tsx`

| What | Where |
|---|---|
| Wordmark text ("AR Bappy") | `{siteConfig.shortName}` (comes from `site.ts`) |
| Wordmark icon | `<Cpu className="size-4" />` (lucide icon — swap to any from https://lucide.dev) |
| Nav links (Projects / Contact) | `navLinks` array at the top |
| Social icon links (GitHub, ORCID, WhatsApp, Email) | The `<IconLink>` blocks |
| WhatsApp icon | `WhatsappMark` SVG component (defined in this file) |
| ORCID icon | `OrcidMark` SVG component (defined in this file) |
| Theme toggle button | `<ThemeToggle />` (separate component) |
| Mobile hamburger menu | The `<Sheet>` block at the bottom |

---

## 7. Contact section

**File:** `src/app/page.tsx` → look for `{/* ===== CONTACT ===== */}`

| What | Where |
|---|---|
| Section heading "Get in Touch" | `Get in Touch` |
| Section subtitle | `Have a project, role, or question?…` |
| Direct channels (Email / GitHub / ORCID / WhatsApp) | The `<a>` blocks in the "Direct channels" card |
| Form fields & behaviour | `src/components/contact-form.tsx` |

---

## 8. Contact form (Formspree)

**File:** `src/components/contact-form.tsx`

```ts
const FORMSPREE_ENDPOINT = "https://formspree.io/f/mzzaqakn";  // ← your form ID
```

- To change the recipient: replace `mzzaqakn` with a new Formspree form ID.
- Form field labels ("Name", "Email", "Message"): search for `Label htmlFor=`.
- Button text ("Send Message"): search for `Send Message`.
- Success message ("Message sent — thank you!"): search for it in the file.
- Error message: search for `Something went wrong`.

---

## 9. Footer

**File:** `src/app/page.tsx` → look for `{/* ===== FOOTER ===== */}`

| What | Where |
|---|---|
| Copyright text | `© 2025 {siteConfig.name}` |
| Footer links | GitHub / ORCID / Email / "Built with Next.js" |
| Footer is sticky to bottom | `mt-auto` on the `<footer>` + `min-h-screen flex flex-col` on the root wrapper |

---

## 10. Colours (the accent / brand colour)

**File:** `src/app/globals.css`

The accent colour is a CSS variable called `--brand`, defined in two places:

```css
:root {                          /* LIGHT MODE */
  --brand:           oklch(0.58 0.15 240);   /* sky blue — main accent */
  --brand-foreground: oklch(0.985 0 0);       /* text on brand-coloured buttons */
  --brand-muted:     oklch(0.95 0.04 240);   /* pale tint for icon backgrounds */
}

.dark {                          /* DARK MODE */
  --brand:           oklch(0.75 0.14 240);   /* brighter sky blue for dark bg */
  --brand-foreground: oklch(0.145 0 0);       /* dark text on brand buttons */
  --brand-muted:     oklch(0.27 0.04 240);   /* dark tint for icon backgrounds */
}
```

### How to change the accent colour

Change the three numbers in `oklch(L C H)`:
- **L** = lightness (0 = black, 1 = white)
- **C** = chroma / saturation (0 = grey, higher = more vivid)
- **H** = hue angle in degrees (0 = red, 120 = green, 240 = blue, 60 = yellow)

**Hue cheatsheet** — change the last number (H) to switch colour family:

| Hue (H) | Colour | Example |
|---|---|---|
| `0` or `25` | red | `oklch(0.58 0.18 25)` |
| `60` | amber / gold | `oklch(0.70 0.15 60)` |
| `120` | green | `oklch(0.55 0.15 120)` |
| `145` | emerald | `oklch(0.62 0.15 145)` |
| `162` | teal | `oklch(0.62 0.15 162)` |
| `200` | cyan | `oklch(0.62 0.15 200)` |
| `240` | **sky blue** (current) | `oklch(0.58 0.15 240)` |
| `270` | violet | `oklch(0.55 0.15 270)` |
| `300` | magenta | `oklch(0.55 0.15 300)` |

> **Important — keep contrast for readability:**
> - In **light mode**, keep `--brand` lightness around `0.55–0.62` so it's dark
>   enough to read on white. If you go lighter than `0.65`, text becomes hard
>   to see on white.
> - In **dark mode**, keep `--brand` lightness around `0.72–0.80` so it's
>   bright enough on the dark background.
> - `--brand-foreground` should be near-white (`0.985`) in light mode and
>   near-black (`0.145`) in dark mode (this is the button text colour).

### Other colours (background, text, borders, etc.)

All other theme colours are in the same `globals.css` file under `:root` and
`.dark` — `--background`, `--foreground`, `--card`, `--border`, `--muted`, etc.
You usually don't need to touch these.

---

## 11. Light / dark mode

**Files:**
- `src/components/theme-provider.tsx` — the next-themes wrapper config
- `src/components/theme-toggle.tsx` — the sun/moon toggle button

The toggle is in the header (top-right). The choice is remembered per browser.
Default theme is "system" (follows the visitor's OS setting).

---

## 12. Page `<title>`, meta tags, analytics

**File:** `src/app/layout.tsx`

| What | Where |
|---|---|
| Browser tab title | `title: { ... }` in the `metadata` export |
| Meta description | `description: "..."` |
| Open Graph (social preview) | `openGraph: { ... }` |
| Twitter card | `twitter: { ... }` |
| Favicon | `app/favicon.ico` or `app/icon.tsx` |
| Vercel Analytics | `<Analytics />` (already enabled) |
| Plausible analytics | Commented `<Script>` block in `<head>` — uncomment and set your domain to enable |

---

## 13. Icons (anywhere on the site)

All icons come from **lucide-react** (https://lucide.dev/icons).

To change an icon:
1. Find the icon on https://lucide.dev/icons and copy its name (e.g. `Github`).
2. In the file, find the import at the top:
   ```ts
   import { Github, Mail } from "lucide-react";
   ```
3. Add the new icon name to the import.
4. Replace the old `<Github />` usage with `<NewIconName />`.

**Special icons** (ORCID, WhatsApp) are custom inline SVGs because lucide
doesn't have them — they're defined as `OrcidMark` and `WhatsappMark`
components in `src/app/page.tsx` and `src/components/site-header.tsx`.

---

## 14. Sizes & spacing (quick reference)

Tailwind size classes work everywhere. Common patterns used in this project:

| Class | Size |
|---|---|
| `size-4` | 16px (small icon) |
| `size-8` | 32px (icon in a badge) |
| `size-9` | 36px (icon button) |
| `size-20` | 80px |
| `size-32` | 128px (profile photo on mobile) |
| `size-40` | 160px (profile photo on tablet) |
| `size-48` | 192px (profile photo on desktop) |
| `p-4` | 16px padding |
| `p-5` | 20px padding (card default) |
| `p-6` | 24px padding |
| `gap-4` | 16px gap |
| `gap-6` | 24px gap |
| `text-sm` | 14px text |
| `text-base` | 16px text |
| `text-lg` | 18px text |
| `text-2xl` | 24px heading |
| `text-3xl` | 30px heading |
| `rounded-md` | 6px radius |
| `rounded-lg` | 8px radius |
| `rounded-xl` | 12px radius (card default) |
| `rounded-full` | fully circular (photo, pills) |

Responsive prefixes: `sm:` (≥640px), `md:` (≥768px), `lg:` (≥1024px), `xl:` (≥1280px).
Example: `text-4xl sm:text-5xl lg:text-6xl` = 36px on mobile, 48px on tablet, 60px on desktop.

---

## Quick "I want to…" index

| I want to… | Open this file |
|---|---|
| Change my name / title / links | `src/data/site.ts` |
| Add / edit / remove a project | `src/data/projects.ts` |
| Edit a project description | `src/data/projects.ts` |
| Change my profile photo | replace `public/profile.jpg` |
| Change the accent colour | `src/app/globals.css` (`--brand` lines) |
| Change the "Personal Project" heading | `src/components/projects-section.tsx` |
| Change header logo / nav / social icons | `src/components/site-header.tsx` |
| Change contact form / Formspree ID | `src/components/contact-form.tsx` |
| Change the browser tab title | `src/app/layout.tsx` |
| Change what the cards look like | `src/components/project-card.tsx` |
| Change the hero section text | `src/app/page.tsx` |
| Change footer text / links | `src/app/page.tsx` |

---

**After any edit:** save the file. The dev server reloads automatically — no
build step, no restart needed. If you make a syntax error, the page shows a
red error overlay; fix the typo and save again.
