"use client";

import * as React from "react";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

// ============================================================================
// Formspree endpoint
// ----------------------------------------------------------------------------
// Your Formspree form endpoint. Messages submitted through this form are sent
// to the email address linked to your Formspree account.
// To change the recipient/form, replace the form ID (the "mzzaqakn" part)
// with a new one from https://formspree.io.
// ============================================================================
const FORMSPREE_ENDPOINT = "https://formspree.io/f/mzzaqakn";

type Status = "idle" | "loading" | "success" | "error";

interface FormState {
  name: string;
  email: string;
  message: string;
}

const initialState: FormState = { name: "", email: "", message: "" };

export function ContactForm({ className }: { className?: string }) {
  const [form, setForm] = React.useState<FormState>(initialState);
  const [status, setStatus] = React.useState<Status>("idle");
  const [errorMsg, setErrorMsg] = React.useState<string>("");

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
    // Reset error state when the user starts editing again.
    if (status === "error") {
      setStatus("idle");
      setErrorMsg("");
    }
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("success");
        setForm(initialState);
        return;
      }

      // Try to extract a meaningful error message from the Formspree response.
      let message = "Something went wrong. Please try again.";
      try {
        const data = (await res.json()) as { errors?: { message?: string }[] };
        if (data?.errors?.length && data.errors[0].message) {
          message = data.errors[0].message;
        }
      } catch {
        /* ignore JSON parse errors — fall back to the generic message */
      }
      setStatus("error");
      setErrorMsg(message);
    } catch {
      setStatus("error");
      setErrorMsg(
        "Network error — please check your connection and try again."
      );
    }
  }

  if (status === "success") {
    return (
      <div
        className={cn(
          "flex flex-col items-center justify-center gap-3 rounded-xl border border-brand/30 bg-brand-muted/40 p-8 text-center",
          className
        )}
        role="status"
        aria-live="polite"
      >
        <CheckCircle2 className="text-brand size-10" aria-hidden />
        <div>
          <p className="text-lg font-semibold">Message sent — thank you!</p>
          <p className="text-muted-foreground mt-1 text-sm">
            I&apos;ll get back to you as soon as possible.
          </p>
        </div>
        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={() => setStatus("idle")}
          className="mt-2"
        >
          Send another message
        </Button>
      </div>
    );
  }

  const disabled = status === "loading";

  return (
    <form
      onSubmit={handleSubmit}
      className={cn("flex flex-col gap-4", className)}
      noValidate
    >
      <div className="flex flex-col gap-2">
        <Label htmlFor="contact-name">Name</Label>
        <Input
          id="contact-name"
          name="name"
          autoComplete="name"
          placeholder="Your name"
          required
          value={form.name}
          onChange={(e) => update("name", e.target.value)}
          disabled={disabled}
        />
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="contact-email">Email</Label>
        <Input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="you@example.com"
          required
          value={form.email}
          onChange={(e) => update("email", e.target.value)}
          disabled={disabled}
        />
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="contact-message">Message</Label>
        <Textarea
          id="contact-message"
          name="message"
          placeholder="Tell me about your project, opportunity, or question…"
          required
          minLength={10}
          rows={5}
          value={form.message}
          onChange={(e) => update("message", e.target.value)}
          disabled={disabled}
        />
      </div>

      {status === "error" && (
        <div
          className="flex items-start gap-2 rounded-md border border-destructive/40 bg-destructive/10 p-3 text-sm text-destructive"
          role="alert"
          aria-live="assertive"
        >
          <AlertCircle className="mt-0.5 size-4 shrink-0" aria-hidden />
          <span>{errorMsg}</span>
        </div>
      )}

      <Button
        type="submit"
        size="lg"
        disabled={disabled}
        className="bg-brand text-brand-foreground hover:bg-brand/90 w-full sm:w-auto"
      >
        {disabled ? (
          <>
            <Loader2 className="size-4 animate-spin" aria-hidden />
            Sending…
          </>
        ) : (
          <>
            <Send className="size-4" aria-hidden />
            Send Message
          </>
        )}
      </Button>
    </form>
  );
}
