import { TextReveal } from "@/components/ui/text-reveal";

export default function Origin() {
  return (
    <section className="bg-white min-h-screen flex items-center">
      <div className="w-full px-6 md:px-10 text-center">
        <div className="mb-20 flex justify-center">
          <span className="font-display inline-flex items-center gap-2 text-xl uppercase tracking-tight text-black"><span className="inline-block h-2.5 w-2.5 bg-black" />Origin</span>
        </div>
        <TextReveal
          text="TotalKnox is built on protection, performance, and reliability, gear designed to hold up across every level of activity and environment."
          className="font-display text-2xl uppercase leading-tight tracking-tight md:text-6xl mx-auto max-w-5xl text-black/10"
        />
      </div>
    </section>
  );
}
