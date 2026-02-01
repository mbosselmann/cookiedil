"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";

const flavors = [
  {
    name: "Chaos Chocolate",
    description: "Triple chocolate madness with sea salt crystals",
    price: "$4.50",
    color: "var(--color-coral)",
    bgColor: "bg-[var(--color-coral)]",
    rating: 4.9,
    tag: "Bestseller",
  },
  {
    name: "Mint Mayhem",
    description: "Fresh mint swirls in a dark chocolate base",
    price: "$4.25",
    color: "var(--color-mint)",
    bgColor: "bg-[var(--color-mint)]",
    rating: 4.8,
    tag: "New",
  },
  {
    name: "Sunshine Surprise",
    description: "Lemon zest and white chocolate dream",
    price: "$4.00",
    color: "var(--color-sunshine)",
    bgColor: "bg-[var(--color-sunshine)]",
    rating: 4.7,
    tag: "Popular",
  },
  {
    name: "Grape Escape",
    description: "Lavender infused with vanilla bean",
    price: "$4.75",
    color: "var(--color-grape)",
    bgColor: "bg-[var(--color-grape)]",
    rating: 4.9,
    tag: "Limited",
  },
  {
    name: "Blush Rush",
    description: "Strawberry and cream cheese explosion",
    price: "$4.50",
    color: "var(--color-blush)",
    bgColor: "bg-[var(--color-blush)]",
    rating: 4.8,
    tag: "Fan Favorite",
  },
  {
    name: "Classic Crunch",
    description: "Original recipe with extra chocolate chips",
    price: "$3.75",
    color: "var(--color-coral)",
    bgColor: "bg-[var(--color-coral)]",
    rating: 5.0,
    tag: "Original",
  },
];

export function FlavorsSection() {
  return (
    <section
      id="flavors"
      className="relative overflow-hidden bg-[var(--color-coral)] py-24"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute left-[10%] top-[20%] h-32 w-32 rounded-full border-4 border-white" />
        <div className="absolute right-[15%] top-[40%] h-24 w-24 rounded-full border-4 border-white" />
        <div className="absolute bottom-[30%] left-[30%] h-20 w-20 rounded-full border-4 border-white" />
        <div className="absolute bottom-[20%] right-[25%] h-28 w-28 rounded-full border-4 border-white" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block rounded-full border-2 border-white bg-white/20 px-4 py-2 text-sm font-bold uppercase tracking-wider text-white">
            Our Flavors
          </span>
          <h2 className="mb-4 text-5xl font-black uppercase tracking-tighter text-white md:text-7xl">
            Pick Your
            <br />
            <span className="relative inline-block">
              <span className="absolute -left-2 -top-2 text-foreground/30">
                Poison
              </span>
              <span className="relative">Poison</span>
            </span>
          </h2>
          <p className="mx-auto max-w-xl text-lg font-medium text-white/80">
            Each cookie is handcrafted with wild ingredients and wilder
            imaginations. No boring bites here.
          </p>
        </div>

        {/* Flavors grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {flavors.map((flavor, index) => (
            <div
              key={flavor.name}
              className="group relative rounded-2xl border-2 border-foreground bg-white p-6 shadow-[6px_6px_0px_0px_var(--color-foreground)] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_var(--color-foreground)]"
            >
              {/* Tag */}
              <span
                className="absolute -right-2 -top-3 rotate-3 rounded-full border-2 border-foreground px-3 py-1 text-xs font-bold uppercase text-white"
                style={{ backgroundColor: flavor.color }}
              >
                {flavor.tag}
              </span>

              {/* Cookie visual */}
              <div
                className="mb-4 flex h-24 w-24 items-center justify-center rounded-full border-2 border-foreground"
                style={{ backgroundColor: flavor.color }}
              >
                <div className="h-16 w-16 rounded-full border-2 border-foreground/30 bg-white/20" />
              </div>

              {/* Content */}
              <h3 className="mb-2 text-2xl font-black uppercase tracking-tight text-foreground">
                {flavor.name}
              </h3>
              <p className="mb-4 text-sm text-foreground/70">
                {flavor.description}
              </p>

              {/* Rating */}
              <div className="mb-4 flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4"
                    fill={i < Math.floor(flavor.rating) ? flavor.color : "none"}
                    stroke={flavor.color}
                  />
                ))}
                <span className="ml-2 text-sm font-bold">{flavor.rating}</span>
              </div>

              {/* Price and CTA */}
              <div className="flex items-center justify-between">
                <span className="text-2xl font-black" style={{ color: flavor.color }}>
                  {flavor.price}
                </span>
                <Button
                  size="sm"
                  className="rounded-full border-2 border-foreground font-bold text-white shadow-[2px_2px_0px_0px_var(--color-foreground)] transition-all hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none"
                  style={{ backgroundColor: flavor.color }}
                >
                  Add to Cart
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* View all button */}
        <div className="mt-12 text-center">
          <Button
            size="lg"
            className="group rounded-full border-2 border-white bg-white px-8 py-6 text-lg font-bold text-foreground shadow-[4px_4px_0px_0px_var(--color-foreground)] transition-all hover:translate-x-1 hover:translate-y-1 hover:bg-white hover:shadow-none"
          >
            View All 24 Flavors
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
}
