import { Rocket, Users, FileCheck, Trophy } from "lucide-react";

export function HowItWorks() {

  const steps = [
  {
    icon: Rocket,
    title: "Create Your Delulu",
    description: "Set milestones and stake at least 100 G$.",
  },
  {
    icon: Users,
    title: "Open Community Shares",
    description: "Users buy shares in your progress using G$.",
  },
  {
    icon: FileCheck,
    title: "Submit Milestone Evidence",
    description: "Submit proof when a milestone is done. Team verifies.",
  },
  {
    icon: Trophy,
    title: "Keep Buy Shares Active",
    description: "Miss a milestone and buying pauses. Complete it to reactivate.",
  },
];

  return (
    <section className="py-32 bg-(--delulu-charcoal) text-white overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-black mb-6">
              How It Works
            </h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">Simple, milestone-based accountability.</p>
          </div>

          {/* Step Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {steps.map((step, index) => {
              const Icon = step.icon;
              
              return (
                <div 
                  key={index} 
                  className="relative bg-white/5 border border-white/10 hover:border-(--delulu-yellow)/50 rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1"
                >
                  {/* Number */}
                  <div className="absolute top-6 right-6 text-6xl font-black text-white/5">
                    {index + 1}
                  </div>
                  
                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-(--delulu-yellow)">
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

        </div>
      </div>
    </section>
  );
}