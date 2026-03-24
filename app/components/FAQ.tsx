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
      answer: "A milestone app where people can buy shares in your progress."
    },
    {
      question: "What is the minimum stake?",
      answer: "100 G$."
    },
    {
      question: "How does GoodDollar fit in?",
      answer: "Claim G$ daily and use it to create or buy shares."
    },
    {
      question: "How do milestone checks work?",
      answer: "Submit evidence. Team verifies."
    },
    {
      question: "Why does my buy shares button disappear?",
      answer: "Miss a milestone and buying pauses until completion."
    },
    {
      question: "Can other users invest in my Delulu?",
      answer: "Yes, using G$."
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
              Quick answers.
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
              className="group relative bg-white/5 border border-white/10 hover:border-(--delulu-yellow)/50 rounded-3xl p-10 overflow-hidden transition-all duration-300 hover:-translate-y-1 max-w-md w-full"
            >
              <div className="relative z-10 flex items-start gap-6">
                <div className="w-16 h-16 bg-(--delulu-yellow) rounded-2xl flex items-center justify-center shrink-0">
                  <MessageCircle className="w-8 h-8 text-black" strokeWidth={2.5} />
                </div>
                <div>
                  <h3 className="text-3xl font-black mb-3">Join Community</h3>
                  <p className="text-lg text-white/60">
                    Chat with delulu dreamers
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