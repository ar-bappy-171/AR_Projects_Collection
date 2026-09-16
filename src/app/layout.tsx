import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";
import { siteConfig } from "@/data/site";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ar-bappy-171.github.io"),
  title: {
    default: `${siteConfig.name} — ${siteConfig.title}`,
    template: `%s · ${siteConfig.shortName}`,
  },
  description: siteConfig.summary,
  keywords: [
    "Md. Asibur Rahman Bappy",
    "AR Bappy",
    "VLSI",
    "Semiconductor",
    "IC Design",
    "Cadence Virtuoso",
    "SRAM",
    "DRC LVS",
    "Electrical Engineering",
    "AUST",
    "C++",
    "Python",
    "MATLAB",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ar-bappy-171.github.io/AsiburPortfolio/",
    siteName: `${siteConfig.shortName} — Portfolio`,
    title: `${siteConfig.name} — ${siteConfig.title}`,
    description: siteConfig.summary,
    images: [
      {
        url: "/logo.svg",
        width: 512,
        height: 512,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — ${siteConfig.title}`,
    description: siteConfig.summary,
    images: ["/logo.svg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/*
         * Plausible Analytics — privacy-friendly, cookie-free web analytics.
         *
         * TO ENABLE:
         *  1. Create a site at https://plausible.io (or self-host Plausible).
         *  2. Replace "your-domain.com" below with the exact domain you
         *     registered in Plausible.
         *  3. Uncomment the <Script> tag below and add
         *     `import Script from "next/script";` at the top of this file.
         *
         * Until enabled, this is intentionally inert so no third-party
         * code is loaded.
         *
         * <Script
         *   defer
         *   data-domain="your-domain.com"
         *   src="https://plausible.io/js/script.js"
         *   strategy="afterInteractive"
         * />
         */}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
        {/*
         * Vercel Analytics — zero-config on Vercel, no-op in dev / non-Vercel
         * environments. Safe to leave mounted.
         */}
        <Analytics />
      </body>
    </html>
  );
}
