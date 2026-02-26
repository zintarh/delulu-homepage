"use client";

import { useState } from "react";
import { PlatformModal } from "./components/PlatformModal";
import { Button } from "./components/ui/button";
import { Menu, X } from "lucide-react";
import { AppPreview } from "./components/AppPreview";
import { Features } from "./components/Features";
import { Hero } from "./components/Hero";
import { HowItWorks } from "./components/HowItWorks";
import { FAQ } from "./components/FAQ";
import { Footer } from "./components/Footer";

export default function Page() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [platformModalOpen, setPlatformModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black">
    {/* Navigation - Bold & Clean */}
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-white/10">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-2xl font-black text-white">delulu</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm text-white/60 hover:text-white transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="text-sm text-white/60 hover:text-white transition-colors">
              How it Works
            </a>
            <a href="#faq" className="text-sm text-white/60 hover:text-white transition-colors">
              FAQ
            </a>
            <Button 
              asChild
              className="bg-[var(--delulu-yellow)] text-black hover:bg-[var(--delulu-yellow)]/90 font-bold px-6 rounded-full h-11"
            >
              <a href="https://app.staydelulu.xyz/" target="_blank" rel="noopener noreferrer">
                Launch App
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden w-10 h-10 flex items-center justify-center text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-6 space-y-4 border-t border-white/10 pt-6">
            <a
              href="#features"
              className="block text-white/60 hover:text-white transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="block text-white/60 hover:text-white transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              How it Works
            </a>
            <a
              href="#faq"
              className="block text-white/60 hover:text-white transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              FAQ
            </a>
            <Button 
              asChild
              className="w-full bg-[var(--delulu-yellow)] text-black hover:bg-[var(--delulu-yellow)]/90 font-bold rounded-full"
            >
              <a href="https://app.staydelulu.xyz/" target="_blank" rel="noopener noreferrer" onClick={() => setMobileMenuOpen(false)}>
                Launch App
              </a>
            </Button>
          </div>
        )}
      </div>
    </nav>

    {/* Main Content */}
    <main className="pt-20">
      <Hero />
      
      <div id="features">
        <Features />
        <AppPreview />
      </div>
      
      <div id="how-it-works">
        <HowItWorks />
      </div>
      
      <div id="faq">
        <FAQ />
      </div>
    </main>

    <Footer />
  </div>
  );
}