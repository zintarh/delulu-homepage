import { Target, TrendingUp, Shield, Zap } from "lucide-react";

export function Features() {
const features = [
  {
    icon: Target,
    title: "Turn Supporters into Investors",
    description: "Don't just set goals in private. Let friends and followers buy stock in your potential. When you achieve your goal, your believers profit too.",
  },
  {
    icon: Zap,
    title: "Proof of Life Verification",
    description: "Your digital shadow is the oracle. We use vLayer to verify your Strava runs, Duolingo, flight emails, or GitHub commits instantly—if it's online, we can prove it.",
  },
  {
    icon: Shield,
    title: "Optimistic Resolution",
    description: "Trust, but verify. Markets resolve automatically via your proof. The 'Senate' only steps in if someone stakes a bond to dispute the result.",
  },
  {
    icon: TrendingUp,
    title: "Native to Farcaster",
    description: "Socialize your success. Launch markets, place stakes, and verify wins directly from your feed using Farcaster Frames and Mini-Apps.",
  },
];
  
  return (
    <section className="py-32 bg-black text-white relative overflow-hidden">
      {/* Subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[var(--delulu-charcoal)] to-black" />
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-black mb-6">
              Why Delulu?
            </h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Turn your ambitions into accountability
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-white/5 border border-white/10 hover:border-[var(--delulu-yellow)]/50 rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="mb-6 inline-flex items-center justify-center w-14 h-14 bg-[var(--delulu-yellow)] rounded-2xl">
                    <Icon className="w-7 h-7 text-black" />
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-black mb-4">
                    {feature.title}
                  </h3>
                  
                  <p className="text-lg text-white/60 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}