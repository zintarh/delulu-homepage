import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export function AppPreview() {
  return (
    <section className="py-32 bg-black text-white relative overflow-hidden">
      {/* Gradient accent */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-(--delulu-green)/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-(--delulu-yellow) text-black font-bold mb-6">
              LIVE ON FARCASTER
            </div>
            
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-black mb-6">
              See It In Action
            </h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              A seamless Farcaster Frame experience. No downloads, no hassle.
            </p>
          </div>

          {/* Screenshots Grid */}
          <div className="grid md:grid-cols-2 gap-12 items-start max-w-4xl mx-auto mb-16">
            {/* Screenshot 1 */}
            <div className="relative group">
              <div className="absolute inset-0 bg-(--delulu-yellow)/20 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
              <div className="relative rounded-2xl overflow-hidden border border-white/10 group-hover:border-(--delulu-yellow)/50 transition-all">
                <Image
                  src="/assets/bfe2e67b5ada5b1e4d352b8d9a225201e02ea753.png"
                  alt="Delulu app feed showing personal goal predictions"
                  className="w-full h-auto"
                  width={800}
                  height={600}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="mt-6 text-center">
                <h3 className="text-2xl font-black mb-2">
                  Your Personal Feed
                </h3>
                <p className="text-lg text-white/60">
                  Stake on goals from your community
                </p>
              </div>
            </div>

            {/* Screenshot 2 */}
            <div className="relative group">
              <div className="absolute inset-0 bg-(--delulu-green)/20 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
              <div className="relative rounded-2xl overflow-hidden border border-white/10 group-hover:border-(--delulu-green)/50 transition-all">
                <Image 
                  src="/assets/04ce39b4a7fc07e15e605d2f0e6d8ff2c28d04c0.png"
                  alt="Delulu app board selection showing different goal categories"
                  className="w-full h-auto"
                  width={800}
                  height={600}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="mt-6 text-center">
                <h3 className="text-2xl font-black mb-2">
                  Choose Your Vibe
                </h3>
                <p className="text-lg text-white/60">
                  Personalize your goal boards
                </p>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center">
            <p className="text-xl font-bold mb-2">
              Available now as a Farcaster Frame
            </p>
            <p className="text-lg text-white/60 mb-8">
              No app store. No downloads. Just open and create.
            </p>
            <Button 
              asChild
              size="lg"
              className="bg-(--delulu-yellow) text-black hover:bg-(--delulu-yellow)/90 font-bold px-8 py-6 text-lg rounded-full"
            >
              <a href="https://farcaster.xyz/miniapps/6TpUBtkLM1a3/delulu" target="_blank" rel="noopener noreferrer">
                Launch App <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}