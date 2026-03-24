import { CheckCircle2 } from "lucide-react";

export function Features() {
  const pillars = [
    "Milestones keep goals accountable.",
    "Verified progress builds trust.",
    "Community shares create momentum.",
  ];

  return (
    <section className="py-28 bg-black text-white relative overflow-hidden">
      {/* Subtle gradient */}
      <div className="absolute inset-0 bg-linear-to-b from-black via-(--delulu-charcoal) to-black" />

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6">
              Why Delulu?
            </h2>
            <p className="text-lg sm:text-xl text-white/65 max-w-3xl mx-auto">Less talk. More follow-through.</p>
          </div>

          <div className="grid lg:grid-cols-5 gap-8 items-stretch">
            <div className="lg:col-span-3 rounded-3xl border border-white/10 bg-white/5 p-8 sm:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-(--delulu-yellow) mb-4">
                The Core Advantage
              </p>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight mb-6">
                Built for consistent progress.
              </h3>
              <p className="text-white/65 text-lg leading-relaxed mb-8">
                Complete milestones to keep buying active.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="rounded-2xl border border-white/10 bg-black/40 p-5">
                  <p className="text-white/60 text-sm mb-1">Stake Requirement</p>
                  <p className="text-2xl font-black">100 G$ Minimum</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/40 p-5">
                  <p className="text-white/60 text-sm mb-1">Share Control</p>
                  <p className="text-2xl font-black">Active Only on Progress</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 rounded-3xl border border-white/10 bg-white/5 p-8 sm:p-10">
              <h4 className="text-2xl font-black mb-6">What You Get</h4>
              <div className="space-y-5">
                {pillars.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-(--delulu-green) mt-1 shrink-0" />
                    <p className="text-white/70 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}