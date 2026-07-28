import Image from "next/image";
import Header from "@/components/shared/Header";

export default function AboutHero() {
  return (
    <section className="relative h-[100svh] min-h-[680px] w-full overflow-hidden text-white">
      <Image
        src="/about/hero.webp"
        alt="Fighter in action"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[10%_5%]"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40" />

      <Header tone="light" />

      <div className="w-full px-6 md:px-10 relative z-10 flex h-full flex-col">
        <div className="mt-auto pb-14 md:pb-32 grid grid-cols-1 md:grid-cols-1 items-end gap-y-6 md:gap-x-10">
          <h2 className="font-display text-[4.375rem] uppercase tracking-tight text-white">
            We create
          </h2>
          <h2 className="font-display text-[4.375rem] uppercase leading-tight tracking-tight text-white md:text-right">
            Practical and
            <br />
            Functional Apparel.
          </h2>
        </div>
      </div>
    </section>
  );
}
