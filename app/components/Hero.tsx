import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export function Hero() {
  const goalImages = [
    { src: "/assets/397de996e9fb54e79a2d960c8a2cdd56a175be30.png", alt: "Career Goals", label: "Career" },
    { src: "/assets/d654c943491112ad64d3a583ba85882dcef056bc.png", alt: "Dream Home", label: "House" },
    { src: "/assets/2523f0521287a8e883235b54dce729de9b8c163f.png", alt: "Relationships", label: "Love" },
    { src: "/assets/12b7c69a8e954cc24181e237a2ae5f30c7d750ac.png", alt: "Education", label: "Education" },
    { src: "/assets/2c3584365f0e65beb1ace6ca92161e6d846dede7.png", alt: "New Job", label: "Job" },
    { src: "/assets/5ea8f18a076c64ec8b6805d4bc54f31d8220b8a7.png", alt: "Travel", label: "Travel" }
  ];

  return (
    <section className="relative min-h-screen flex items-center bg-black text-white overflow-hidden">
      {/* Dramatic gradient */}
      <div className="absolute inset-0 bg-linear-to-br from-[bg-(--delulu-yellow)]/10 via-black to-[bg-(--delulu-green)]/10" />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />

      <div className="container mx-auto px-6 lg:px-8 relative z-10 py-20">
        <div className="max-w-7xl mx-auto">
          {/* Main Content */}
          <div className="text-center mb-20">
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black mb-8 leading-none">
              Stake on
              <br />
              <span className="bg-gradient-to-r from-[var(--delulu-yellow)] to-[var(--delulu-green)] bg-clip-text text-transparent">
                Yourself
              </span>
            </h1>

            <p className="text-xl sm:text-2xl text-white/60 max-w-2xl mx-auto mb-12 leading-relaxed">
              Turn your goals into prediction markets. Stake real money, prove your wins, and share the rewards with your supporters.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
              <Button 
                asChild
                size="lg"
                className="bg-(--delulu-yellow) text-black hover:bg-(--delulu-yellow)/90 font-bold px-8 py-6 text-lg rounded-full"
              >
                <a href="https://farcaster.xyz/miniapps/6TpUBtkLM1a3/delulu" target="_blank" rel="noopener noreferrer">
                  Launch App <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </Button>
              <Button 
                asChild
                size="lg"
                className="bg-white/10 text-white hover:bg-white/20 border border-white/20 font-medium px-8 py-6 text-lg rounded-full"
              >
                <a href="#how-it-works">Learn How</a>
              </Button>
            </div>
          </div>

          {/* Image Gallery */}
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
              {goalImages.map((image, index) => (
                <div
                  key={index}
                  className="group relative aspect-square rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:border-[var(--delulu-yellow)]/50 transition-all duration-300"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                    sizes="(max-width: 768px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4">
                      <span className="text-white font-bold text-lg">
                        {image.label}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}