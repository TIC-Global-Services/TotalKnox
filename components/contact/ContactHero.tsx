import Image from "next/image";
import Header from "@/components/shared/Header";

export default function ContactHero() {
  return (
    <section className="relative h-[100svh] min-h-[680px] w-full overflow-hidden text-white ">
      <Image
        src="/contact/hero.webp"
        alt="Fighters sparring"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[center_30%]"
      />
      <div className="absolute inset-0 bg-black/40" />

      <Header tone="light" />

      <div className="mx-auto w-full max-w-[1400px] px-6 md:px-10 relative z-10 flex h-full items-center justify-center">
        <h1 className="font-display text-4xl uppercase leading-[0.95] tracking-tightest text-white md:text-6xl ">
          Contact Us
        </h1>
      </div>
    </section>
  );
}
