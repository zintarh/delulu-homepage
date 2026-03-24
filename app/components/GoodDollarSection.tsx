import { Coins, Wallet } from "lucide-react";

export function GoodDollarSection() {
  return (
    <section id="good-dollar" className="py-28 bg-black text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-b from-black via-(--delulu-charcoal) to-black" />

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-5">G$ on Delulu</h2>
            <p className="text-lg sm:text-xl text-white/65 max-w-3xl mx-auto">
              Claim daily G$. Create Delulus. Buy shares.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-7">
              <div className="w-12 h-12 rounded-xl bg-(--delulu-yellow) text-black flex items-center justify-center mb-5">
                <Wallet className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-black mb-3">Daily G$ Claim</h3>
              <p className="text-white/65 leading-relaxed">
                Claim free daily Good dollar token on mainnet.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-7">
              <div className="w-12 h-12 rounded-xl bg-(--delulu-yellow) text-black flex items-center justify-center mb-5">
                <Coins className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-black mb-3">Use G$ With Purpose</h3>
              <p className="text-white/65 leading-relaxed">
                Use G$ to create your Delulu or buy shares.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
