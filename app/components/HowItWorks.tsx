import { Rocket, Users, Fingerprint, Trophy } from "lucide-react";

export function HowItWorks() {

  const steps = [
  {
    icon: Rocket,
    title: "Launch Your Market",
    description: "Don't just set a goal. IPO your life. Create a prediction market for your next milestone and set the terms.",
  },
  {
    icon: Users,
    title: "Attract Investors",
    description: "Share with your community. Friends stake 'Believe' to invest in your potential; doubters stake 'No' to profit if you fail. The pot grows.",
  },
  {
    icon: Fingerprint,
    title: "Connect Your Shadow",
    description: "No manual screenshots. Connect your Gmail, Strava, or GitHub. vLayer generates a cryptographic proof of your achievement instantly.",
  },
  {
    icon: Trophy,
    title: "Optimistic Payout",
    description: "Trust, but verify. If no one disputes your proof within 24 hours, the market resolves. You and your Believers split the doubters' money.",
  },
];

  return (
    <section className="py-32 bg-[var(--delulu-charcoal)] text-white overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-black mb-6">
              How It Works
            </h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Four steps to turn markets into commitments
            </p>
          </div>

          {/* Step Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {steps.map((step, index) => {
              const Icon = step.icon;
              
              return (
                <div 
                  key={index} 
                  className="relative bg-white/5 border border-white/10 hover:border-[var(--delulu-yellow)]/50 rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1"
                >
                  {/* Number */}
                  <div className="absolute top-6 right-6 text-6xl font-black text-white/5">
                    {index + 1}
                  </div>
                  
                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-[var(--delulu-yellow)]">
                      <Icon className="w-7 h-7 text-black" strokeWidth={2.5} />
                    </div>
                    
                    <h3 className="text-2xl sm:text-3xl font-black mb-4">
                      {step.title}
                    </h3>
                    
                    <p className="text-lg text-white/60 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Resolution Process */}
          <div className="relative bg-white/5 border border-white/10 rounded-3xl p-12 overflow-hidden">
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[var(--delulu-yellow)]/5 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <div className="text-center mb-12">
                <h3 className="text-4xl sm:text-5xl font-black mb-4">
                  Optimistic Resolution
                </h3>
                <p className="text-2xl text-white/60 italic font-bold">
                  Trust, but verify.
                </p>
              </div>

              {/* Resolution Steps */}
              <div className="max-w-2xl mx-auto space-y-6">
                
                {/* Step 1 */}
                <div className="bg-black/30 rounded-2xl p-6 border border-white/10">
                  <div className="flex items-center gap-3 mb-3">
                    <h4 className="text-2xl font-black">The ZK Proof</h4>
                    <div className="inline-block px-3 py-1 bg-black text-white rounded-full text-xs font-black">
                      POWERED BY VLAYER
                    </div>
                  </div>
                  <p className="text-base text-white/60 leading-relaxed">
                    You don't just "submit a link." vLayer generates a Zero-Knowledge Proof (ZK-SNARK) of your digital activity. This mathematically guarantees your Strava run or email is authentic.
                  </p>
                </div>

                {/* Arrow */}
                <div className="flex justify-center">
                  <div className="w-0.5 h-8 bg-white/20 rounded-full" />
                </div>

                {/* Step 2 */}
                <div className="bg-black/30 rounded-2xl p-6 border border-white/10">
                  <div className="flex items-center gap-3 mb-3">
                    <h4 className="text-2xl font-black">The Window</h4>
                    <div className="inline-block px-3 py-1 bg-white/10 border border-white/20 rounded-full text-xs font-black">
                      24-HOUR TIMER
                    </div>
                  </div>
                  <p className="text-base text-white/60 leading-relaxed">
                    Your ZK Proof is posted on-chain and a "Challenge Timer" starts. The window allows the community to verify the context.
                  </p>
                </div>

                {/* Arrow */}
                <div className="flex justify-center">
                  <div className="w-0.5 h-8 bg-white/20 rounded-full" />
                </div>

                {/* Step 3 */}
                <div className="bg-black/30 rounded-2xl p-6 border border-white/10">
                  <div className="flex items-center gap-3 mb-3">
                    <h4 className="text-2xl font-black">The Payout</h4>
                    <div className="inline-block px-3 py-1 bg-[var(--delulu-green)] rounded-full text-xs font-black text-black">
                      AUTO-RESOLVE
                    </div>
                  </div>
                  <p className="text-base text-white/60 leading-relaxed">
                    If no one disputes before the timer runs out, the Smart Contract executes automatically. You and your Believers split the pot instantly.
                  </p>
                </div>

              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}