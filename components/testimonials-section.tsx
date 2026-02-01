"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah M.",
    role: "Cookie Enthusiast",
    quote:
      "These arent just cookies. Theyre little discs of pure joy that make every bad day instantly better.",
    color: "var(--color-coral)",
    avatar: "S",
  },
  {
    name: "Mike D.",
    role: "Repeat Customer",
    quote:
      "I ordered once for a party. Now Im ordering weekly for myself. No regrets, just crumbs.",
    color: "var(--color-mint)",
    avatar: "M",
  },
  {
    name: "Jessica L.",
    role: "Food Blogger",
    quote:
      "The Chaos Chocolate literally changed my understanding of what a cookie can be. Mind-blowing!",
    color: "var(--color-grape)",
    avatar: "J",
  },
  {
    name: "Tom R.",
    role: "Self-Proclaimed Cookie Expert",
    quote:
      "Ive eaten cookies from 47 countries. These are top 3. Maybe top 1. Okay, definitely top 1.",
    color: "var(--color-sunshine)",
    avatar: "T",
  },
];

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="relative overflow-hidden bg-[var(--color-mint)] py-24">
      {/* Decorative shapes */}
      <div className="absolute -left-20 top-20 h-64 w-64 rounded-full border-4 border-white/20" />
      <div className="absolute -right-32 bottom-20 h-80 w-80 rounded-full border-4 border-white/20" />
      <div className="absolute left-1/3 top-1/2 h-40 w-40 rounded-full border-4 border-white/10" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block rounded-full border-2 border-foreground bg-white px-4 py-2 text-sm font-bold uppercase tracking-wider shadow-[3px_3px_0px_0px_var(--color-foreground)]">
            Testimonials
          </span>
          <h2 className="text-5xl font-black uppercase tracking-tighter text-foreground md:text-6xl">
            What Cookie
            <br />
            <span className="relative inline-block">
              <span className="absolute -left-1 -top-1 text-white">Lovers</span>
              <span className="relative">Lovers</span>
            </span>{" "}
            Say
          </h2>
        </div>

        {/* Testimonials carousel */}
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="mx-auto max-w-3xl">
                    <div className="rounded-3xl border-2 border-foreground bg-white p-8 shadow-[8px_8px_0px_0px_var(--color-foreground)] md:p-12">
                      {/* Quote icon */}
                      <div
                        className="mb-6 flex h-16 w-16 items-center justify-center rounded-full border-2 border-foreground"
                        style={{ backgroundColor: testimonial.color }}
                      >
                        <Quote className="h-8 w-8 text-white" />
                      </div>

                      {/* Quote text */}
                      <p className="mb-8 text-2xl font-bold leading-relaxed text-foreground md:text-3xl">
                        {testimonial.quote}
                      </p>

                      {/* Author */}
                      <div className="flex items-center gap-4">
                        <div
                          className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-foreground text-xl font-black text-white"
                          style={{ backgroundColor: testimonial.color }}
                        >
                          {testimonial.avatar}
                        </div>
                        <div>
                          <div className="text-lg font-black uppercase tracking-tight text-foreground">
                            {testimonial.name}
                          </div>
                          <div className="text-sm font-medium text-foreground/60">
                            {testimonial.role}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="rounded-full border-2 border-foreground bg-white shadow-[3px_3px_0px_0px_var(--color-foreground)] transition-all hover:translate-x-0.5 hover:translate-y-0.5 hover:bg-white hover:shadow-none"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`h-3 w-3 rounded-full border-2 border-foreground transition-all ${
                    index === activeIndex
                      ? "w-8 bg-foreground"
                      : "bg-white"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full border-2 border-foreground bg-white shadow-[3px_3px_0px_0px_var(--color-foreground)] transition-all hover:translate-x-0.5 hover:translate-y-0.5 hover:bg-white hover:shadow-none"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
