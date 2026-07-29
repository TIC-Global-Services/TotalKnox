import Image from "next/image";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";

export const metadata = {
  title: "Equipments — TotalKnox",
  description: "Precision-engineered combat gear for every level of training and competition.",
};

export default function Page() {
  return (
    <main>
      <section className="relative h-[60svh] min-h-[480px] w-full overflow-hidden text-white">
        <Image
          src="/home/hero-home.webp"
          alt="Combat gear"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/40" />
        <Header tone="light" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="font-display text-6xl uppercase leading-[0.95] tracking-tightest md:text-8xl lg:text-[120px]">
            Equipments
          </h1>
        </div>
      </section>
      <Footer />
    </main>
  );
}
