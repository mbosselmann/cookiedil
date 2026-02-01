"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[var(--color-cream)]">
      {/* Overlapping decorative shapes */}
      <div className="absolute -left-20 -top-20 h-96 w-96 rounded-full bg-[var(--color-coral)] opacity-60 blur-3xl" />
      <div className="absolute -right-32 top-40 h-80 w-80 rounded-full bg-[var(--color-mint)] opacity-50 blur-2xl" />
      <div className="absolute bottom-20 left-1/4 h-64 w-64 rounded-full bg-[var(--color-sunshine)] opacity-40 blur-2xl" />
      <div className="absolute -bottom-20 right-1/4 h-72 w-72 rounded-full bg-[var(--color-grape)] opacity-30 blur-3xl" />

      {/* Floating cookie shapes */}
      <div className="absolute left-[10%] top-[20%] h-16 w-16 rotate-12 rounded-full border-4 border-[var(--color-coral)] bg-[var(--color-sunshine)] shadow-lg" />
      <div className="absolute right-[15%] top-[30%] h-12 w-12 -rotate-12 rounded-full border-4 border-[var(--color-grape)] bg-[var(--color-blush)] shadow-lg" />
      <div className="absolute bottom-[25%] left-[20%] h-10 w-10 rotate-45 rounded-lg border-4 border-[var(--color-mint)] bg-white shadow-lg" />
      <div className="absolute bottom-[35%] right-[25%] h-14 w-14 rounded-full border-4 border-[var(--color-sunshine)] bg-[var(--color-coral)] shadow-lg" />

      {/* Main content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <div className="mb-6 flex items-center gap-2 rounded-full border-2 border-foreground bg-white px-4 py-2 shadow-[4px_4px_0px_0px_var(--color-foreground)]">
          <Sparkles className="h-4 w-4 text-[var(--color-coral)]" />
          <span className="text-sm font-bold uppercase tracking-wider">
            Fresh Batch Alert
          </span>
        </div>

        <h1 className="relative mb-8 text-balance">
          <span className="block text-7xl font-black uppercase leading-none tracking-tighter md:text-9xl">
            <span className="relative inline-block">
              <span className="absolute -left-2 -top-2 text-[var(--color-mint)]">
                Cookie
              </span>
              <span className="relative text-foreground">Cookie</span>
            </span>
          </span>
          <span className="mt-2 block text-5xl font-black uppercase leading-none tracking-tighter text-[var(--color-coral)] md:text-7xl">
            Dil
          </span>
        </h1>

        <p className="mb-10 max-w-xl text-pretty text-lg font-medium text-foreground/80 md:text-xl">
          Where chaos meets flavor. Handcrafted cookies that are{" "}
          <span className="inline-block -rotate-2 rounded bg-[var(--color-sunshine)] px-2 py-1 font-bold text-foreground">
            bold
          </span>
          ,{" "}
          <span className="inline-block rotate-1 rounded bg-[var(--color-blush)] px-2 py-1 font-bold text-foreground">
            playful
          </span>
          , and absolutely{" "}
          <span className="inline-block -rotate-1 rounded bg-[var(--color-mint)] px-2 py-1 font-bold text-foreground">
            unforgettable
          </span>
          .
        </p>

        <div className="flex flex-col gap-4 sm:flex-row">
          <Button
            size="lg"
            className="group rounded-full border-2 border-foreground bg-[var(--color-coral)] px-8 py-6 text-lg font-bold text-white shadow-[4px_4px_0px_0px_var(--color-foreground)] transition-all hover:translate-x-1 hover:translate-y-1 hover:bg-[var(--color-coral)] hover:shadow-none"
          >
            Order Now
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="rounded-full border-2 border-foreground bg-white px-8 py-6 text-lg font-bold shadow-[4px_4px_0px_0px_var(--color-foreground)] transition-all hover:translate-x-1 hover:translate-y-1 hover:bg-white hover:shadow-none"
          >
            Explore Flavors
          </Button>
        </div>

        {/* Stats bar */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-8 rounded-2xl border-2 border-foreground bg-white p-6 shadow-[6px_6px_0px_0px_var(--color-foreground)] md:gap-16">
          <div className="text-center">
            <div className="text-3xl font-black text-[var(--color-coral)] md:text-4xl">
              50K+
            </div>
            <div className="text-sm font-bold uppercase tracking-wider text-foreground/60">
              Cookies Sold
            </div>
          </div>
          <div className="h-12 w-px bg-foreground/20" />
          <div className="text-center">
            <div className="text-3xl font-black text-[var(--color-mint)] md:text-4xl">
              24
            </div>
            <div className="text-sm font-bold uppercase tracking-wider text-foreground/60">
              Wild Flavors
            </div>
          </div>
          <div className="h-12 w-px bg-foreground/20" />
          <div className="text-center">
            <div className="text-3xl font-black text-[var(--color-grape)] md:text-4xl">
              4.9
            </div>
            <div className="text-sm font-bold uppercase tracking-wider text-foreground/60">
              Avg Rating
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave pattern */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          className="w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 120L48 110C96 100 192 80 288 70C384 60 480 60 576 65C672 70 768 80 864 85C960 90 1056 90 1152 85C1248 80 1344 70 1392 65L1440 60V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0Z"
            fill="var(--color-coral)"
          />
        </svg>
      </div>
    </section>
  );
}
