"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Features } from "./components/Features";
import { GoodDollarSection } from "./components/GoodDollarSection";
import { Hero } from "./components/Hero";
import { HowItWorks } from "./components/HowItWorks";
import { VoteSection } from "./components/VoteSection";
import { FAQ } from "./components/FAQ";
import { Footer } from "./components/Footer";

export default function Page() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black">
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-white/10">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <span className="delulu-logo text-2xl">Delulu</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
        
            <a href="#how-it-works" className="text-sm text-white/60 hover:text-white transition-colors">
              How it Works
            </a>
            <a
              href="https://app.staydelulu.xyz/leaderboard"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white/60 hover:text-white transition-colors"
            >
              Leaderboard
            </a>
            <a href="#faq" className="text-sm text-white/60 hover:text-white transition-colors">
              FAQ
            </a>
            <a
              href="#vote"
              className="text-sm text-white/60 hover:text-white transition-colors"
            >
              Vote
            </a>
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
              href="#good-dollar"
              className="block text-white/60 hover:text-white transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              G$
            </a>
            <a
              href="#how-it-works"
              className="block text-white/60 hover:text-white transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              How it Works
            </a>
            <a
              href="https://app.staydelulu.xyz/Leaderboard"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-white/60 hover:text-white transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Leaderboard
            </a>
            <a
              href="#faq"
              className="block text-white/60 hover:text-white transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              FAQ
            </a>
            <a
              href="#vote"
              className="block text-white/60 hover:text-white transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Vote
            </a>
          </div>
        )}
      </div>
    </nav>

    <main className="pt-20">
      <Hero />

      <div id="how-it-works">
        <HowItWorks />
      </div>

      <GoodDollarSection />

      <VoteSection />

      <div id="features">
        <Features />
      </div>
      
      <div id="faq">
        <FAQ />
      </div>
    </main>

    <Footer />
  </div>
  );
}