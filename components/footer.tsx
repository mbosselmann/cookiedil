"use client";

import { Button } from "@/components/ui/button";
import {
  Cookie,
  Instagram,
  Twitter,
  Facebook,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

const footerLinks = {
  shop: [
    { name: "All Cookies", href: "#" },
    { name: "Gift Boxes", href: "#" },
    { name: "Subscriptions", href: "#" },
    { name: "Bulk Orders", href: "#" },
  ],
  company: [
    { name: "Our Story", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Press", href: "#" },
    { name: "Partners", href: "#" },
  ],
  support: [
    { name: "FAQ", href: "#" },
    { name: "Shipping", href: "#" },
    { name: "Returns", href: "#" },
    { name: "Contact Us", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer id="contact" className="relative overflow-hidden bg-foreground pt-24">
      {/* Top wave */}
      <div className="absolute -top-px left-0 right-0">
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          className="w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 60L48 55C96 50 192 40 288 35C384 30 480 30 576 32.5C672 35 768 40 864 42.5C960 45 1056 45 1152 42.5C1248 40 1344 35 1392 32.5L1440 30V0H1392C1344 0 1248 0 1152 0C1056 0 960 0 864 0C768 0 672 0 576 0C480 0 384 0 288 0C192 0 96 0 48 0H0V60Z"
            fill="var(--color-cream)"
          />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left - Brand */}
          <div>
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-white bg-[var(--color-coral)]">
                <Cookie className="h-7 w-7 text-white" />
              </div>
              <span className="text-3xl font-black uppercase tracking-tight text-white">
                Cookie<span className="text-[var(--color-coral)]">dil</span>
              </span>
            </div>
            <p className="mb-8 max-w-md text-lg text-white/70">
              Born from chaos and creativity, we bake cookies that break the
              mold. Every bite is an adventure.
            </p>

            {/* Social links */}
            <div className="flex gap-4">
              {[Instagram, Twitter, Facebook].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-white/20 text-white transition-all hover:border-[var(--color-coral)] hover:bg-[var(--color-coral)]"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Right - Links */}
          <div className="grid gap-8 sm:grid-cols-3">
            <div>
              <h3 className="mb-4 text-sm font-black uppercase tracking-wider text-[var(--color-coral)]">
                Shop
              </h3>
              <ul className="space-y-3">
                {footerLinks.shop.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-white/70 transition-colors hover:text-white"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-sm font-black uppercase tracking-wider text-[var(--color-mint)]">
                Company
              </h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-white/70 transition-colors hover:text-white"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-sm font-black uppercase tracking-wider text-[var(--color-sunshine)]">
                Support
              </h3>
              <ul className="space-y-3">
                {footerLinks.support.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-white/70 transition-colors hover:text-white"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Contact info */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-8 rounded-2xl border-2 border-white/20 bg-white/5 p-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-coral)]">
              <MapPin className="h-5 w-5 text-white" />
            </div>
            <span className="text-white/80">123 Cookie Lane, Sweet City</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-mint)]">
              <Phone className="h-5 w-5 text-white" />
            </div>
            <span className="text-white/80">(555) COOKIE-1</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-grape)]">
              <Mail className="h-5 w-5 text-white" />
            </div>
            <span className="text-white/80">hello@cookiedil.com</span>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 border-t border-white/10 py-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-white/50">
              2026 Cookiedil. All rights reserved. Baked with chaos.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-sm text-white/50 hover:text-white">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-white/50 hover:text-white">
                Terms of Service
              </a>
              <a href="#" className="text-sm text-white/50 hover:text-white">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
