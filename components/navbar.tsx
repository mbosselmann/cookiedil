"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ShoppingBag, Cookie } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 bg-[var(--color-cream)]/90 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <a href="#" className="group flex items-center gap-2">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-foreground bg-[var(--color-coral)] shadow-[3px_3px_0px_0px_var(--color-foreground)] transition-all group-hover:translate-x-0.5 group-hover:translate-y-0.5 group-hover:shadow-none">
              <Cookie className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-black uppercase tracking-tight">
              Cookie<span className="text-[var(--color-coral)]">dil</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            <a
              href="#flavors"
              className="relative font-bold uppercase tracking-wider transition-colors hover:text-[var(--color-coral)]"
            >
              Flavors
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-[var(--color-coral)] transition-all hover:w-full" />
            </a>
            <a
              href="#about"
              className="font-bold uppercase tracking-wider transition-colors hover:text-[var(--color-coral)]"
            >
              Our Story
            </a>
            <a
              href="#gallery"
              className="font-bold uppercase tracking-wider transition-colors hover:text-[var(--color-coral)]"
            >
              Gallery
            </a>
            <a
              href="#contact"
              className="font-bold uppercase tracking-wider transition-colors hover:text-[var(--color-coral)]"
            >
              Contact
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="hidden items-center gap-4 md:flex">
            <Button
              variant="ghost"
              size="icon"
              className="relative rounded-full border-2 border-foreground bg-white shadow-[2px_2px_0px_0px_var(--color-foreground)] transition-all hover:translate-x-0.5 hover:translate-y-0.5 hover:bg-white hover:shadow-none"
            >
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-[var(--color-coral)] text-xs font-bold text-white">
                3
              </span>
            </Button>
            <Button className="rounded-full border-2 border-foreground bg-foreground px-6 font-bold text-white shadow-[3px_3px_0px_0px_var(--color-coral)] transition-all hover:translate-x-0.5 hover:translate-y-0.5 hover:bg-foreground hover:shadow-none">
              Order Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full border-2 border-foreground bg-white shadow-[2px_2px_0px_0px_var(--color-foreground)] md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t-2 border-foreground bg-[var(--color-cream)] md:hidden">
          <div className="flex flex-col gap-4 p-6">
            <a
              href="#flavors"
              className="rounded-xl border-2 border-foreground bg-white p-4 text-center font-bold uppercase tracking-wider shadow-[3px_3px_0px_0px_var(--color-foreground)]"
            >
              Flavors
            </a>
            <a
              href="#about"
              className="rounded-xl border-2 border-foreground bg-white p-4 text-center font-bold uppercase tracking-wider shadow-[3px_3px_0px_0px_var(--color-foreground)]"
            >
              Our Story
            </a>
            <a
              href="#gallery"
              className="rounded-xl border-2 border-foreground bg-white p-4 text-center font-bold uppercase tracking-wider shadow-[3px_3px_0px_0px_var(--color-foreground)]"
            >
              Gallery
            </a>
            <a
              href="#contact"
              className="rounded-xl border-2 border-foreground bg-white p-4 text-center font-bold uppercase tracking-wider shadow-[3px_3px_0px_0px_var(--color-foreground)]"
            >
              Contact
            </a>
            <Button className="mt-2 rounded-xl border-2 border-foreground bg-[var(--color-coral)] py-4 font-bold text-white shadow-[3px_3px_0px_0px_var(--color-foreground)]">
              Order Now
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
