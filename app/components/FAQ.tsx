"use client";

import { useState } from "react";
import { ChevronDown, MessageCircle } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: "What is Delulu?",
      answer: "An optimistic prediction market for personal outcomes. People stake real money on your success. When you achieve your market, stakeholders profit. When you succeed, everyone wins."
    },
    {
      question: "How do you verify markets?",
      answer: "If it sends you an email or has a public link, we can prove it. Flight confirmations, Strava runs, GitHub commits, offer letters—if it happened on the internet, it counts."
    },
    {
      question: "What kinds of markets work best?",
      answer: "Health (run a marathon, 10k steps), Learning (Duolingo streak, AWS cert), Career (GitHub commits, Product Hunt launch), Lifestyle (travel, concerts), Finance (crypto purchases). Anything with a digital footprint."
    },
    {
      question: "How does the resolution process work?",
      answer: "Propose outcome with 10% bond → 48-72h dispute window opens → Anyone can challenge (first come, first served) → The Senate votes if disputed. Loser pays everything: Winner gets +150%, Senate gets +50%, Loser gets -100%."
    },
    {
      question: "Why would I dispute someone's result?",
      answer: "Because catching a liar pays +50% profit on your bond. But spam false disputes and lose 100%. Game theory makes honesty profitable and lying expensive."
    },
    {
      question: "Is my data safe?",
      answer: "We use OAuth for email verification (no passwords stored). You control what's shared. Only create markets with information you're comfortable having on-chain."
    },
    {
      question: "What platforms does Delulu support?",
      answer: "Base (Ethereum L2), Farcaster (decentralized social), and MiniPay (mobile wallet). All platforms connect to the same smart contracts—your markets sync everywhere."
    },
    {
      question: "How much should I stake?",
      answer: "Start small ($20-50) to test. Make it meaningful—enough that losing it would sting. Harder markets deserve bigger stakes. You can increase stakes on future markets."
    },
    {
      question: "How do payouts work?",
      answer: "Automatic via smart contracts. Win your market → get stake back + rewards. People who staked on you get payouts too. If you fail, stake is distributed based on market rules. All fees shown upfront."
    }
  ];

  return (
    <section className="py-32 bg-black text-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-black mb-6">
              FAQ
            </h2>
            <p className="text-xl text-white/60">
              If it sends an email or has a public link, we can prove it.
            </p>
          </div>

          {/* FAQ Items */}
          <div className="space-y-4 mb-16">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={index}
                  className={`bg-white/5 border rounded-2xl overflow-hidden transition-all ${
                    isOpen 
                      ? 'border-(--delulu-yellow)' 
                      : 'border-white/10 hover:border-white/20'
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left group"
                  >
                    <span className="text-lg font-bold pr-4">
                      {faq.question}
                    </span>
                    <div className={`shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
                      isOpen ? 'bg-(--delulu-yellow) rotate-180' : 'bg-white/10 group-hover:bg-white/20'
                    }`}>
                      <ChevronDown className={`w-5 h-5 ${isOpen ? 'text-black' : 'text-white'}`} strokeWidth={2.5} />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6">
                      <p className="text-base text-white/60 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Contact CTA */}
          <div className="flex justify-center">
            <a 
              href="https://t.me/+96pLkvSh0I4wZThk" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative bg-white/5 border border-white/10 hover:border-[var(--delulu-yellow)]/50 rounded-3xl p-10 overflow-hidden transition-all duration-300 hover:-translate-y-1 max-w-md w-full"
            >
              <div className="relative z-10 flex items-start gap-6">
                <div className="w-16 h-16 bg-[var(--delulu-yellow)] rounded-2xl flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-8 h-8 text-black" strokeWidth={2.5} />
                </div>
                <div>
                  <h3 className="text-3xl font-black mb-3">Join Community</h3>
                  <p className="text-lg text-white/60">
                    Chat with other delulu dreamers
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}