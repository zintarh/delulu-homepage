import { TrendingUp, Users, Zap } from "lucide-react";

export function WhatIsDelulu() {
  return (
    <section className="py-24 sm:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 sm:mb-20">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 sm:mb-8 text-(--delulu-charcoal)">
              What is Delulu?
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl leading-relaxed max-w-3xl mx-auto text-muted-foreground">
              A prediction market for self-improvement. Stake real money on achieving your personal outcomes.
            </p>
          </div>

          {/* Three Dramatic Cards - Staggered & Tilted */}
          <div className="relative flex flex-col md:flex-row gap-8 md:gap-0 items-center justify-center mb-20">
            
            {/* Card 1 - Social Capital - Left, slightly rotated */}
            <div className="group relative bg-(--delulu-charcoal) rounded-3xl p-8 sm:p-12 overflow-hidden hover:scale-105 transition-all duration-300 w-full md:w-80 md:rotate-[-4deg] md:hover:rotate-[-2deg] md:z-10 md:-mr-8 hover:z-30">
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-5" style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                backgroundSize: '32px 32px'
              }} />
              
              <div className="relative z-10">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-(--delulu-yellow) rounded-3xl flex items-center justify-center mb-6 sm:mb-8 group-hover:scale-110 group-hover:rotate-12 transition-transform">
                  <TrendingUp className="w-8 h-8 sm:w-10 sm:h-10 text-(--delulu-charcoal)" strokeWidth={2.5} />
                </div>
                
                <h3 className="text-3xl sm:text-4xl font-black mb-4 sm:mb-6 text-white">
                  <span className="text-4xl sm:text-5xl">Invest</span><br />
                  <span className="italic text-(--delulu-yellow)">in People</span>
                </h3>
                
                <p className="text-base sm:text-lg text-white/70 leading-relaxed">
                  Stake on someone early. Get on-chain proof you believed in them before everyone else.
                </p>
              </div>
            </div>

            {/* Card 2 - Accountability - Center, elevated */}
            <div className="group relative bg-white border-4 border-(--delulu-charcoal) rounded-3xl p-8 sm:p-12 overflow-hidden hover:scale-105 transition-all duration-300 w-full md:w-80 md:z-20 hover:z-30 md:translate-y-[-20px]">
              <div className="relative z-10">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-(--delulu-green) rounded-3xl flex items-center justify-center mb-6 sm:mb-8 group-hover:scale-110 group-hover:rotate-[-12deg] transition-transform">
                  <Users className="w-8 h-8 sm:w-10 sm:h-10 text-white" strokeWidth={2.5} />
                </div>
                
                <h3 className="text-3xl sm:text-4xl font-black mb-4 sm:mb-6">
                  <span className="text-4xl sm:text-5xl">Supporters</span><br />
                  <span className="italic text-(--delulu-green)">Become Helpers</span>
                </h3>
                
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  When money's on the line, they're incentivized to help you win.
                </p>
              </div>
            </div>

            {/* Card 3 - Multiplayer - Right, slightly rotated */}
            <div className="group relative bg-linear-to-br from-[var(--delulu-yellow)] to-[var(--delulu-green)] rounded-3xl p-8 sm:p-12 overflow-hidden hover:scale-105 transition-all duration-300 w-full md:w-80 md:rotate-[4deg] md:hover:rotate-[2deg] md:z-10 md:-ml-8 hover:z-30">
              <div className="relative z-10">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-3xl flex items-center justify-center mb-6 sm:mb-8 group-hover:scale-110 group-hover:rotate-12 transition-transform">
                  <Zap className="w-8 h-8 sm:w-10 sm:h-10 text-(--delulu-charcoal)" strokeWidth={2.5} />
                </div>
                
                <h3 className="text-3xl sm:text-4xl font-black mb-4 sm:mb-6 text-(--delulu-charcoal)">
                  <span className="text-4xl sm:text-5xl">Life</span><br />
                  <span className="italic">Goes Multiplayer</span>
                </h3>
                
                <p className="text-base sm:text-lg text-(--delulu-charcoal)/80 leading-relaxed">
                  Stakeholders in your journey. When you win, they win too.
                </p>
              </div>
            </div>

          </div>

          {/* Bottom Quote - Tilted */}
          <div className="mt-20 sm:mt-32 text-center">
            <div className="inline-block bg-[var(--delulu-charcoal)] rounded-3xl px-8 sm:px-12 md:px-16 py-8 sm:py-10 md:py-12 border-4 border-[var(--delulu-charcoal)] shadow-2xl hover:shadow-[var(--delulu-yellow)]/20 transition-all hover:rotate-[-1deg] rotate-[1deg]">
              <p className="text-2xl sm:text-3xl md:text-4xl font-black text-white leading-tight">
                <span className="text-3xl sm:text-4xl md:text-5xl italic text-[var(--delulu-yellow)]">REAL STAKE,</span><br />
                not just words.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}