"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Mail, Gift } from "lucide-react";

export function CTASection() {
  return (
    <section className="relative overflow-hidden bg-[var(--color-cream)] py-24">
      {/* Background shapes */}
      <div className="absolute -left-20 top-20 h-64 w-64 rounded-full bg-[var(--color-sunshine)] opacity-30 blur-3xl" />
      <div className="absolute -right-20 bottom-20 h-80 w-80 rounded-full bg-[var(--color-blush)] opacity-30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="rounded-3xl border-2 border-foreground bg-[var(--color-grape)] p-8 shadow-[8px_8px_0px_0px_var(--color-foreground)] md:p-16">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Left content */}
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border-2 border-white bg-white/20 px-4 py-2">
                <Gift className="h-5 w-5 text-white" />
                <span className="text-sm font-bold uppercase tracking-wider text-white">
                  Special Offer
                </span>
              </div>
              <h2 className="mb-6 text-4xl font-black uppercase leading-tight tracking-tighter text-white md:text-5xl">
                Get 20% Off
                <br />
                <span className="relative inline-block">
                  <span className="absolute -left-1 -top-1 text-[var(--color-sunshine)]">
                    Your First
                  </span>
                  <span className="relative">Your First</span>
                </span>
                <br />
                Order
              </h2>
              <p className="text-lg text-white/80">
                Join our newsletter and get exclusive access to new flavors,
                secret recipes, and cookie-related chaos delivered straight to
                your inbox.
              </p>
            </div>

            {/* Right form */}
            <div>
              <div className="rounded-2xl border-2 border-foreground bg-white p-8 shadow-[6px_6px_0px_0px_var(--color-foreground)]">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-foreground bg-[var(--color-coral)]">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-black uppercase tracking-tight text-foreground">
                      Newsletter
                    </div>
                    <div className="text-sm text-foreground/60">
                      Weekly cookie updates
                    </div>
                  </div>
                </div>

                <form className="space-y-4">
                  <Input
                    type="text"
                    placeholder="Your name"
                    className="rounded-xl border-2 border-foreground bg-[var(--color-cream)] px-4 py-3 font-medium placeholder:text-foreground/40 focus:ring-2 focus:ring-[var(--color-coral)]"
                  />
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    className="rounded-xl border-2 border-foreground bg-[var(--color-cream)] px-4 py-3 font-medium placeholder:text-foreground/40 focus:ring-2 focus:ring-[var(--color-coral)]"
                  />
                  <Button
                    type="submit"
                    className="group w-full rounded-xl border-2 border-foreground bg-[var(--color-coral)] py-6 text-lg font-bold text-white shadow-[4px_4px_0px_0px_var(--color-foreground)] transition-all hover:translate-x-1 hover:translate-y-1 hover:bg-[var(--color-coral)] hover:shadow-none"
                  >
                    Get My Discount
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </form>

                <p className="mt-4 text-center text-xs text-foreground/50">
                  No spam, just sweet updates. Unsubscribe anytime.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
