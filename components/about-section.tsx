"use client";

import { Button } from "@/components/ui/button";
import { Heart, Zap, Leaf, Award } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Made with Love",
    description: "Every cookie starts with passion and ends with joy",
    color: "var(--color-coral)",
  },
  {
    icon: Zap,
    title: "Bold Flavors",
    description: "We push boundaries and break the cookie mold",
    color: "var(--color-sunshine)",
  },
  {
    icon: Leaf,
    title: "Fresh Daily",
    description: "Baked fresh every morning, never yesterday's batch",
    color: "var(--color-mint)",
  },
  {
    icon: Award,
    title: "Award Winning",
    description: "Recognized for excellence in artisan baking",
    color: "var(--color-grape)",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="relative overflow-hidden bg-[var(--color-cream)] py-24">
      {/* Decorative elements */}
      <div className="absolute -right-20 top-20 h-64 w-64 rounded-full bg-[var(--color-mint)] opacity-20 blur-3xl" />
      <div className="absolute -left-32 bottom-20 h-80 w-80 rounded-full bg-[var(--color-grape)] opacity-20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left content */}
          <div>
            <span className="mb-4 inline-block rounded-full border-2 border-foreground bg-[var(--color-sunshine)] px-4 py-2 text-sm font-bold uppercase tracking-wider shadow-[3px_3px_0px_0px_var(--color-foreground)]">
              Our Story
            </span>
            <h2 className="mb-6 text-5xl font-black uppercase leading-none tracking-tighter md:text-6xl">
              Born from
              <br />
              <span className="relative inline-block text-[var(--color-coral)]">
                <span className="absolute -left-1 -top-1 text-[var(--color-mint)]">
                  Chaos
                </span>
                <span className="relative">Chaos</span>
              </span>
              <br />& Creativity
            </h2>
            <p className="mb-6 text-lg leading-relaxed text-foreground/80">
              What started as a midnight baking experiment in 2019 has grown
              into a full-blown cookie revolution. We believe cookies should
              be an experience, not just a snack.
            </p>
            <p className="mb-8 text-lg leading-relaxed text-foreground/80">
              Our founder, a former graphic designer turned pastry rebel,
              combined art school aesthetics with grandmas secret recipes to
              create something truly unique.
            </p>
            <Button
              size="lg"
              className="rounded-full border-2 border-foreground bg-foreground px-8 py-6 text-lg font-bold text-white shadow-[4px_4px_0px_0px_var(--color-coral)] transition-all hover:translate-x-1 hover:translate-y-1 hover:bg-foreground hover:shadow-none"
            >
              Read Our Full Story
            </Button>
          </div>

          {/* Right visual - overlapping cards */}
          <div className="relative h-[500px]">
            {/* Background shapes */}
            <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rotate-6 rounded-3xl border-2 border-foreground bg-[var(--color-blush)]" />
            <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 -rotate-3 rounded-3xl border-2 border-foreground bg-[var(--color-mint)]" />
            
            {/* Main card */}
            <div className="absolute left-1/2 top-1/2 flex h-80 w-80 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-3xl border-2 border-foreground bg-white p-8 shadow-[8px_8px_0px_0px_var(--color-foreground)]">
              <div className="mb-4 text-8xl font-black text-[var(--color-coral)]">
                5+
              </div>
              <div className="text-center text-xl font-bold uppercase tracking-wider text-foreground">
                Years of
                <br />
                Sweet Chaos
              </div>
            </div>

            {/* Floating badges */}
            <div className="absolute left-0 top-10 rounded-xl border-2 border-foreground bg-[var(--color-sunshine)] px-4 py-3 shadow-[3px_3px_0px_0px_var(--color-foreground)]">
              <div className="text-2xl font-black text-foreground">100%</div>
              <div className="text-xs font-bold uppercase text-foreground/70">Handmade</div>
            </div>
            <div className="absolute bottom-10 right-0 rounded-xl border-2 border-foreground bg-[var(--color-grape)] px-4 py-3 shadow-[3px_3px_0px_0px_var(--color-foreground)]">
              <div className="text-2xl font-black text-white">50K+</div>
              <div className="text-xs font-bold uppercase text-white/70">Happy Customers</div>
            </div>
          </div>
        </div>

        {/* Values grid */}
        <div className="mt-24 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => (
            <div
              key={value.title}
              className="group rounded-2xl border-2 border-foreground bg-white p-6 shadow-[4px_4px_0px_0px_var(--color-foreground)] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_var(--color-foreground)]"
            >
              <div
                className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl border-2 border-foreground"
                style={{ backgroundColor: value.color }}
              >
                <value.icon className="h-7 w-7 text-white" />
              </div>
              <h3 className="mb-2 text-xl font-black uppercase tracking-tight text-foreground">
                {value.title}
              </h3>
              <p className="text-sm text-foreground/70">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
