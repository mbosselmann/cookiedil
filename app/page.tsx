import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { FlavorsSection } from "@/components/flavors-section";
import { AboutSection } from "@/components/about-section";
import { GallerySection } from "@/components/gallery-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { CTASection } from "@/components/cta-section";
import { Footer } from "@/components/footer";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <FlavorsSection />
      <AboutSection />
      <GallerySection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </main>
  );
}
