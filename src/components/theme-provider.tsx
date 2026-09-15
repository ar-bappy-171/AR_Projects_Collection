"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

/**
 * Wraps the app with next-themes so the `class` strategy toggles a `.dark`
 * class on <html>. Defaults to the user's system preference and persists
 * the choice in localStorage under the key "theme".
 */
export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
