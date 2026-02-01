"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Instagram, ChevronLeft, ChevronRight } from "lucide-react";

const galleryImages = [
  {
    id: 1,
    color: "var(--color-coral)",
    title: "Chocolate Stack",
    likes: "2.4K",
  },
  {
    id: 2,
    color: "var(--color-mint)",
    title: "Mint Collection",
    likes: "1.8K",
  },
  {
    id: 3,
    color: "var(--color-sunshine)",
    title: "Citrus Burst",
    likes: "3.1K",
  },
  {
    id: 4,
    color: "var(--color-grape)",
    title: "Purple Dream",
    likes: "2.7K",
  },
  {
    id: 5,
    color: "var(--color-blush)",
    title: "Berry Bliss",
    likes: "1.5K",
  },
  {
    id: 6,
    color: "var(--color-coral)",
    title: "Classic Crunch",
    likes: "4.2K",
  },
];

export function GallerySection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevSlide = () => {
    setActiveIndex(
      (prev) => (prev - 1 + galleryImages.length) % galleryImages.length
    );
  };

  return (
    <section id="gallery" className="relative overflow-hidden bg-foreground py-24">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full border-2 border-white"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${30 + Math.random() * 50}px`,
              height: `${30 + Math.random() * 50}px`,
            }}
          />
        ))}
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className="mb-16 flex flex-col items-center justify-between gap-8 md:flex-row">
          <div>
            <span className="mb-4 inline-block rounded-full border-2 border-[var(--color-coral)] bg-[var(--color-coral)] px-4 py-2 text-sm font-bold uppercase tracking-wider text-white">
              Gallery
            </span>
            <h2 className="text-5xl font-black uppercase tracking-tighter text-white md:text-6xl">
              Cookie
              <br />
              <span className="text-[var(--color-coral)]">Porn</span>
            </h2>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="flex items-center gap-2 rounded-full border-2 border-white bg-transparent px-6 py-3 font-bold text-white transition-all hover:bg-white hover:text-foreground"
            >
              <Instagram className="h-5 w-5" />
              Follow Us
            </a>
          </div>
        </div>

        {/* Bento grid gallery */}
        <div className="grid gap-4 md:grid-cols-3 md:grid-rows-2">
          {/* Large featured image */}
          <div className="group relative md:col-span-2 md:row-span-2">
            <div
              className="flex h-80 items-end rounded-2xl border-2 border-white/20 p-6 md:h-full"
              style={{ backgroundColor: galleryImages[0].color }}
            >
              {/* Cookie placeholder */}
              <div className="absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-white/30 bg-white/10 md:h-64 md:w-64" />
              <div className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-white/20 bg-white/10 md:h-48 md:w-48" />

              <div className="relative z-10 flex w-full items-end justify-between">
                <div>
                  <h3 className="text-2xl font-black text-white">
                    {galleryImages[0].title}
                  </h3>
                  <p className="text-white/70">{galleryImages[0].likes} likes</p>
                </div>
                <Button
                  size="sm"
                  className="rounded-full border-2 border-white bg-white font-bold text-foreground shadow-[2px_2px_0px_0px_rgba(0,0,0,0.3)] transition-all hover:translate-x-0.5 hover:translate-y-0.5 hover:bg-white hover:shadow-none"
                >
                  View
                </Button>
              </div>
            </div>
          </div>

          {/* Smaller images */}
          {galleryImages.slice(1, 5).map((image, index) => (
            <div key={image.id} className="group relative">
              <div
                className="flex h-48 items-end rounded-2xl border-2 border-white/20 p-4"
                style={{ backgroundColor: image.color }}
              >
                {/* Cookie placeholder */}
                <div className="absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white/30 bg-white/10" />

                <div className="relative z-10 w-full">
                  <h3 className="font-bold text-white">{image.title}</h3>
                  <p className="text-sm text-white/70">{image.likes} likes</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Scrolling marquee */}
        <div className="mt-16 overflow-hidden">
          <div className="flex animate-[scroll_20s_linear_infinite] gap-8">
            {[...Array(10)].map((_, i) => (
              <span
                key={i}
                className="whitespace-nowrap text-6xl font-black uppercase tracking-tighter text-white/10 md:text-8xl"
              >
                Fresh Baked Daily
              </span>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
