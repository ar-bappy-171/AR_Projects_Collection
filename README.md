# AR Bappy — Personal Portfolio

A clean, modern, single-page portfolio website for **Md. Asibur Rahman Bappy**
(EEE Graduate · VLSI & Semiconductor focus) — a central hub linking to all
deployed projects, with a working contact form, light/dark mode, and a
privacy-friendly analytics integration.

🔗 **Live projects linked:** 6 Vercel-hosted apps (PassVault, Prompt Studio,
Prompt Vault, Stream, Actors Library, Power Web)

---

## ✨ Features

- **Single-page layout** — header, hero, projects, contact, footer
- **Project cards** loaded from one config file — add/edit/remove without
  touching layout code
- **Smart descriptions** — long text clamps to 3 lines on desktop with a hover
  tooltip showing the full text; full text shown on mobile (no hidden info)
- **Live contact form** — Formspree-powered, sends to your email (no backend
  needed, works on static hosting)
- **Light / dark mode** — system-aware, remembers visitor's choice, toggle in
  the header
- **Circular profile photo** — non-downloadable (drag disabled, right-click
  intercepted, selection blocked)
- **Responsive** — mobile-first, hamburger menu on small screens, touch-friendly
- **Privacy-friendly analytics** — Vercel Analytics (enabled) + Plausible
  (ready to enable, see below)
- **SEO-ready** — Open Graph tags, Twitter cards, descriptive meta tags,
  semantic HTML
- **Accessible** — ARIA labels, keyboard navigation, screen-reader friendly,
  AA-contrast text

---

## 🧰 Tech Stack

| Layer | Technology |
|---|---|
| Framework | [Next.js 16](https://nextjs.org) (App Router) |
| Language | TypeScript 5 |
| Styling | [Tailwind CSS 4](https://tailwindcss.com) |
| UI components | [shadcn/ui](https://ui.shadcn.com) (New York style) + [Lucide](https://lucide.dev) icons |
| Theme toggle | [next-themes](https://github.com/pacocoursey/next-themes) |
| Images | `next/image` (optimized, lazy-loaded) |
| Contact form | [Formspree](https://formspree.io) (no-backend form service) |
| Analytics | [@vercel/analytics](https://vercel.com/analytics) + [Plausible](https://plausible.io) (optional) |
| Package manager | [Bun](https://bun.sh) |
| Fonts | Geist Sans / Geist Mono (via `next/font`) |

---

## 🚀 Quick Start (local development)

### Prerequisites

- [Node.js](https://nodejs.org) 18.18+ or [Bun](https://bun.sh) 1.0+
- A code editor ([VS Code](https://code.visualstudio.com) recommended)

### Install & run

```bash
# 1. Install dependencies
bun install        # or: npm install

# 2. Start the dev server
bun run dev        # or: npm run dev

# 3. Open the site
#    The dev server runs on http://localhost:3000
```

The site hot-reloads on every file save — no restart needed.

### Useful commands

```bash
bun run dev        # Start dev server (port 3000)
bun run lint       # Run ESLint to check code quality
bun run build      # Production build (outputs to .next/)
bun run start      # Run the production build locally
```

---

## 📁 Project Structure

```
.
├── public/
│   ├── profile.jpg              ← Your profile photo (replace to change)
│   ├── logo.svg                 ← Site logo
│   └── robots.txt               ← SEO robots file
│
├── src/
│   ├── app/
│   │   ├── layout.tsx           ← Page shell: <head>, meta, fonts, analytics, theme provider
│   │   ├── page.tsx             ← The single-page portfolio (hero, contact, footer)
│   │   └── globals.css          ← Tailwind + theme colors (accent color lives here)
│   │
│   ├── components/
│   │   ├── site-header.tsx      ← Sticky header: logo, nav, social icons, theme toggle
│   │   ├── projects-section.tsx ← Projects section wrapper
│   │   ├── project-card.tsx     ← One project card (clamps, tooltips, buttons)
│   │   ├── contact-form.tsx     ← Formspree contact form
│   │   ├── theme-provider.tsx   ← next-themes wrapper
│   │   ├── theme-toggle.tsx     ← Sun/moon toggle button
│   │   └── ui/                  ← shadcn/ui primitives (button, card, input, etc.)
│   │
│   └── data/
│       ├── site.ts              ← YOUR personal info (name, title, links)
│       └── projects.ts          ← YOUR project list (the only file to edit for projects)
│
├── EDITING-GUIDE.md             ← Detailed "how to edit anything" reference
├── README.md                    ← This file
└── package.json
```

---

## ✏️ Editing Content (the 2-minute guide)

Everything you'll want to change lives in **2 config files + 1 image**:

### 1. Your personal info → `src/data/site.ts`

```ts
export const siteConfig = {
  name:           "Md. Asibur Rahman Bappy",
  shortName:      "AR Bappy",
  title:          "Electrical & Electronic Engineering Graduate | VLSI & Semiconductor",
  github:         "https://github.com/ar-bappy-171",
  email:          "asibur.eee.171@gmail.com",
  whatsapp:       "https://wa.me/8801853265996",
  whatsappNumber: "+880 1853265996",
  orcid:          "https://orcid.org/0009-0006-9444-8982",
};
```

### 2. Your projects → `src/data/projects.ts`

```ts
export const projects: Project[] = [
  {
    name: "AR PassVault",
    description: "A secure, browser-based password vault…",
    tech: ["Next.js", "TypeScript"],           // OPTIONAL
    platform: "Vercel",                         // "Vercel" | "Netlify" | "GitHub Pages" | "Other"
    liveUrl: "https://arpassvault.vercel.app/",
    repoUrl: "https://github.com/...",          // OPTIONAL (omit to hide "View Code" button)
  },
  // … add more projects here
];
```

- **Add a project:** copy the block, fill it in, paste inside the `[]`.
- **Remove a project:** delete its block.
- **Edit a description:** change the text between the quotes.
- The file has a full commented example at the top showing every field.

### 3. Your profile photo → replace `public/profile.jpg`

Just overwrite the file (keep the name `profile.jpg`). Or add a new image to
`public/` and update the `src="/profile.jpg"` path in `src/app/page.tsx`.

> 📖 **For everything else** (colors, icons, sizes, hero text, header, footer,
> form, analytics) see **[EDITING-GUIDE.md](./EDITING-GUIDE.md)** — it has a
> table of every editable thing + the exact file to open.

---

## 🎨 Changing the Accent Color

The accent color (currently **sky blue**) is a CSS variable in
`src/app/globals.css`:

```css
:root {                          /* LIGHT MODE */
  --brand: oklch(0.52 0.15 240);   /* sky blue — change the last number (hue) */
}

.dark {                          /* DARK MODE */
  --brand: oklch(0.75 0.14 240);   /* brighter for dark backgrounds */
}
```

**Hue cheatsheet** (change the last number in `oklch()`):

| Hue | Color | Example |
|---|---|---|
| `25` | red | `oklch(0.52 0.15 25)` |
| `60` | amber/gold | `oklch(0.65 0.15 60)` |
| `145` | emerald green | `oklch(0.52 0.15 145)` |
| **`240`** | **sky blue (current)** | `oklch(0.52 0.15 240)` |
| `270` | violet | `oklch(0.52 0.15 270)` |

> **Keep text readable:** in light mode, keep the first number (lightness)
> between `0.50`–`0.62` for AA contrast on white. In dark mode, keep it
> between `0.70`–`0.80`. See `EDITING-GUIDE.md` for full details.

---

## 📨 Contact Form Setup (Formspree)

The contact form is already wired to a Formspree endpoint. To use your own:

1. **Sign up** at [formspree.io](https://formspree.io) (free tier: 50
   submissions/month).
2. **Create a new form** — name it "Portfolio Contact", set your email as
   recipient.
3. **Copy your form ID** from the integration URL:
   `https://formspree.io/f/mzzaqakn` → the ID is `mzzaqakn`.
4. **Paste it** into `src/components/contact-form.tsx` (around line 20):
   ```ts
   const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";
   ```
5. Save. Test the form — submissions land in your email inbox.

> The form sends `name`, `email`, and `message` with the standard field names
> Formspree expects, so no extra Formspree configuration is needed.

---

## 📊 Analytics

### Vercel Analytics (enabled by default)

Already wired via `@vercel/analytics`. It's **zero-config on Vercel** — when
you deploy to Vercel, visitor traffic appears automatically in your Vercel
dashboard under the **Analytics** tab. No tracking ID needed.

To disable: remove `<Analytics />` from `src/app/layout.tsx`.

### Plausible Analytics (optional, privacy-friendly alternative)

A commented-out Plausible script is in `src/app/layout.tsx` inside `<head>`.
To enable:

1. Sign up at [plausible.io](https://plausible.io) (or self-host).
2. Add your site — you'll get a domain like `arbappy.com`.
3. Uncomment the `<Script>` block in `src/app/layout.tsx` and replace
   `YOUR_DOMAIN.com` with your actual domain:
   ```tsx
   <Script
     defer
     data-domain="YOUR_DOMAIN.com"
     src="https://plausible.io/js/script.js"
   />
   ```

---

## 🌐 Deployment

This is a standard Next.js app — deploys in minutes to either platform.

### Option A — Deploy to Vercel (recommended)

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
   git push -u origin main
   ```

2. **Import to Vercel:**
   - Go to [vercel.com/new](https://vercel.com/new)
   - Import your GitHub repo
   - Vercel auto-detects Next.js — **no config needed**
   - Click **Deploy**

3. **That's it.** Vercel gives you a `*.vercel.app` URL (or connect a custom
   domain in Project Settings → Domains).

4. **Analytics:** Open your project → **Analytics** tab → enable. Free for
   limited traffic; upgrade for more.

### Option B — Deploy to Netlify

1. **Push to GitHub** (same as above).

2. **Import to Netlify:**
   - Go to [app.netlify.com/start](https://app.netlify.com/start)
   - Connect your GitHub, pick the repo
   - Build settings (auto-detected, but verify):
     - **Build command:** `npm run build` (or `bun run build`)
     - **Publish directory:** `.next`
   - Click **Deploy site**

3. **Netlify Forms alternative (optional):** If you prefer Netlify Forms over
   Formspree, add `data-netlify="true"` to the `<form>` in
   `src/components/contact-form.tsx` and replace the fetch logic with a normal
   form submission. (The current setup uses Formspree, which works on any
   host including Netlify.)

### Custom domain

Both platforms let you add a custom domain (e.g. `ar-bappy.com`) for free:

- **Vercel:** Project Settings → Domains → Add
- **Netlify:** Site Settings → Domain management → Add custom domain

Follow the platform's DNS instructions (typically add an A record and a CNAME).

---

## 🔧 Configuration Checklist (after first deploy)

- [ ] **Formspree form ID** set in `src/components/contact-form.tsx`
- [ ] **Profile photo** replaced at `public/profile.jpg`
- [ ] **Personal info** updated in `src/data/site.ts`
- [ ] **Projects** added/edited in `src/data/projects.ts`
- [ ] **Analytics** enabled (Vercel: automatic; Plausible: uncomment script)
- [ ] **Browser tab title / meta description** verified in `src/app/layout.tsx`
- [ ] **Custom domain** connected (optional)

---

## 📄 License

Personal portfolio for Md. Asibur Rahman Bappy. Code structure free to
reference; project content (descriptions, photos) is personal.

---

## 👤 About

**Md. Asibur Rahman Bappy (AR Bappy)**

- 🎓 EEE Graduate (2025), Ahsanullah University of Science and Technology (AUST), Dhaka
- 🔬 Focus: VLSI / IC design — SRAM cell design, DRC/LVS verification at 90nm/45nm (Cadence Virtuoso)
- 💻 Programming: C++, Python, MATLAB
- 🔗 [GitHub](https://github.com/ar-bappy-171) · [ORCID](https://orcid.org/0009-0006-9444-8982) · [WhatsApp](https://wa.me/8801853265996) · ✉️ asibur.eee.171@gmail.com

---

## 📚 Additional Documentation

- **[EDITING-GUIDE.md](./EDITING-GUIDE.md)** — exhaustive "how to edit anything" reference
  with file paths, code snippets, a hue cheatsheet, and a quick-index table.
