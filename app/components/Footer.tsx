import { Github, Twitter, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black text-white py-20 border-t border-white/10">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl font-black">delulu</span>
              </div>
              <p className="text-lg text-white/60 leading-relaxed max-w-md">
                Optimistic prediction markets for personal outcomes. 
                Stake on yourself and achieve greatness.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Product</h4>
              <ul className="space-y-3 text-white/60">
                <li><a href="#how-it-works" className="hover:text-[var(--delulu-yellow)] transition-colors">How it Works</a></li>
                <li><a href="#platforms" className="hover:text-[var(--delulu-yellow)] transition-colors">Platforms</a></li>
                <li><a href="#faq" className="hover:text-[var(--delulu-yellow)] transition-colors">FAQ</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Community</h4>
              <ul className="space-y-3 text-white/60">
                <li><a href="https://warpcast.com/~/delulu" className="hover:text-[var(--delulu-yellow)] transition-colors">Farcaster</a></li>
                <li><a href="https://t.me/+96pLkvSh0I4wZThk" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--delulu-yellow)] transition-colors">Telegram</a></li>
                <li><a href="#" className="hover:text-[var(--delulu-yellow)] transition-colors">Twitter</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-white/60">
              © {new Date().getFullYear()} Delulu. All rights reserved.
            </p>

            <div className="flex gap-6">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[var(--delulu-yellow)] hover:border-[var(--delulu-yellow)] hover:text-black transition-all">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://warpcast.com/~/delulu" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[var(--delulu-yellow)] hover:border-[var(--delulu-yellow)] hover:text-black transition-all">
                <MessageCircle className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[var(--delulu-yellow)] hover:border-[var(--delulu-yellow)] hover:text-black transition-all">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-12 pt-8 border-t border-white/10">
            <p className="text-sm text-white/40 text-center leading-relaxed max-w-4xl mx-auto">
              <strong className="text-white/60">Disclaimer:</strong> Delulu involves financial risks. Only stake amounts you can afford to lose. 
              This platform is not meant for collecting personally identifiable information (PII) or securing highly sensitive data. 
              Always conduct your own research and consider your risk tolerance before participating.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}