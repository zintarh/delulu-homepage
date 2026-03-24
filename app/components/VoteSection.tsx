import { Button } from "./ui/button";
import { Vote } from "lucide-react";

export function VoteSection() {
  const FLOWSTATE_VOTE_URL =
    "https://flowstate.network/flow-councils/42220/0xfabef1abae4998146e8a8422813eb787caa26ec2";

  return (
    <section id="vote" className="py-24 bg-black text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-b from-black via-(--delulu-charcoal) to-black" />

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center rounded-3xl border border-white/10 bg-white/5 p-10 sm:p-14">
          <div className="w-14 h-14 mx-auto rounded-2xl bg-(--delulu-yellow) text-black flex items-center justify-center mb-6">
            <Vote className="w-7 h-7" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-black mb-4">Vote for Delulu</h2>
          <p className="text-lg text-white/65 mb-8">
            Support Delulu on Flowstate. Voting takes less than a minute.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-(--delulu-yellow) text-black hover:bg-(--delulu-yellow)/90 font-bold rounded-full px-8"
          >
            <a href={FLOWSTATE_VOTE_URL} target="_blank" rel="noopener noreferrer">
              Vote on Flowstate
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
