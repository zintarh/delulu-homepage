import { X } from "lucide-react";
import { Button } from "./ui/button";

interface PlatformModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function PlatformModal({ isOpen, onClose }: PlatformModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-12 h-12 rounded-full bg-(--delulu-light-gray) hover:bg-(--delulu-charcoal) hover:text-white flex items-center justify-center transition-all z-10"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Content */}
        <div className="p-12 md:p-16">
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-6xl font-black mb-6 text-(--delulu-charcoal)">Choose Your Platform</h2>
            <p className="text-2xl text-muted-foreground">
              Access Delulu wherever you are
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Base */}
            <a
              href="https://delulu.base.app"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-(--delulu-light-gray) hover:bg-(--delulu-yellow) rounded-2xl p-8 text-center transition-all hover:scale-105"
            >
              <div className="mb-6 flex justify-center">
                <div className="w-24 h-24 bg-white rounded-2xl flex items-center justify-center">
                  {/* Base Logo - Blue Circle */}
                  <svg width="64" height="64" viewBox="0 0 111 111" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M54.921 110.034C85.359 110.034 110.034 85.402 110.034 55.017C110.034 24.6319 85.359 0 54.921 0C26.0432 0 2.35281 22.1714 0 50.3923H72.8467V59.6416H3.9565e-07C2.35281 87.8625 26.0432 110.034 54.921 110.034Z" fill="#0052FF"/>
                  </svg>
                </div>
              </div>
              <h3 className="text-3xl font-black mb-3">Base</h3>
              <p className="text-lg leading-relaxed mb-6">
                Fast, low-cost transactions on Ethereum L2
              </p>
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-(--delulu-charcoal) text-white rounded-full font-bold group-hover:bg-white group-hover:text-(--delulu-charcoal) transition-all">
                Launch →
              </div>
            </a>

            {/* Farcaster */}
            <a
              href="https://warpcast.com/~/delulu"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-(--delulu-light-gray) hover:bg-(--delulu-green) rounded-2xl p-8 text-center transition-all hover:scale-105"
            >
              <div className="mb-6 flex justify-center">
                <div className="w-24 h-24 bg-white rounded-2xl flex items-center justify-center">
                  {/* Farcaster Logo - Purple */}
                  <svg width="64" height="64" viewBox="0 0 1000 1000" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M257.778 155.556H742.222V844.444H671.111V528.889H670.414C662.554 441.677 589.258 373.333 500 373.333C410.742 373.333 337.446 441.677 329.586 528.889H328.889V844.444H257.778V155.556Z" fill="#855DCD"/>
                    <path d="M128.889 253.333L157.778 351.111H182.222V844.444H128.889V253.333Z" fill="#855DCD"/>
                    <path d="M871.111 253.333L842.222 351.111H817.778V844.444H871.111V253.333Z" fill="#855DCD"/>
                  </svg>
                </div>
              </div>
              <h3 className="text-3xl font-black mb-3 group-hover:text-white">Farcaster</h3>
              <p className="text-lg leading-relaxed mb-6 group-hover:text-white/90">
                Native integration with decentralized social
              </p>
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-(--delulu-charcoal) text-white rounded-full font-bold group-hover:bg-white group-hover:text-(--delulu-charcoal) transition-all">
                Launch →
              </div>
            </a>

            {/* MiniPay */}
            <a
              href="https://minipay.delulu.app"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-(--delulu-light-gray) hover:bg-(--delulu-charcoal) rounded-2xl p-8 text-center transition-all hover:scale-105"
            >
              <div className="mb-6 flex justify-center">
                <div className="w-24 h-24 bg-white rounded-2xl flex items-center justify-center">
                  {/* MiniPay Logo - Green/Celo colors */}
                  <svg width="64" height="64" viewBox="0 0 950 950" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M475 950C737.335 950 950 737.335 950 475C950 212.665 737.335 0 475 0C212.665 0 0 212.665 0 475C0 737.335 212.665 950 475 950ZM543.182 475C543.182 512.659 512.659 543.182 475 543.182C437.341 543.182 406.818 512.659 406.818 475C406.818 437.341 437.341 406.818 475 406.818C512.659 406.818 543.182 437.341 543.182 475ZM475 881.818C699.005 881.818 881.818 699.005 881.818 475C881.818 250.995 699.005 68.1818 475 68.1818C250.995 68.1818 68.1818 250.995 68.1818 475C68.1818 699.005 250.995 881.818 475 881.818Z" fill="#FBCC5C"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M475 813.636C661.337 813.636 813.636 661.337 813.636 475C813.636 288.663 661.337 136.364 475 136.364C288.663 136.364 136.364 288.663 136.364 475C136.364 661.337 288.663 813.636 475 813.636ZM475 745.455C623.669 745.455 745.455 623.669 745.455 475C745.455 326.331 623.669 204.545 475 204.545C326.331 204.545 204.545 326.331 204.545 475C204.545 623.669 326.331 745.455 475 745.455Z" fill="#35D07F"/>
                  </svg>
                </div>
              </div>
              <h3 className="text-3xl font-black mb-3 group-hover:text-white">MiniPay</h3>
              <p className="text-lg leading-relaxed mb-6 group-hover:text-white/90">
                Mobile-first blockchain experience
              </p>
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-(--delulu-yellow) text-(--delulu-charcoal) rounded-full font-bold group-hover:bg-white transition-all">
                Launch →
              </div>
            </a>
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-muted-foreground">
              All platforms sync seamlessly. Start anywhere, continue everywhere.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}