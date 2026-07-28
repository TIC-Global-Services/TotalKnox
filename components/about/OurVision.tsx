import Image from "next/image";

export default function OurVision() {
  return (
    <section className="bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
        <div className="relative aspect-[4/5] w-full overflow-hidden bg-black md:aspect-auto md:min-h-screen">
          <Image
            src="/shared/style_and_functionality2.webp"
            alt="Female boxer training with punching bags"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover object-left"
          />
        </div>

        <div className="relative flex flex-col justify-between px-6 py-16 text-ink md:px-16 md:py-24">
          <div className="flex justify-center">
            <span className="font-display inline-flex items-center gap-2 text-xl uppercase tracking-tight text-black">
              <span className="inline-block h-2.5 w-2.5 bg-black" />
              Our Vision
            </span>
          </div>

          <h2 className="text-center font-display text-5xl uppercase leading-[1] tracking-tight md:text-[3.375rem]">
            Style{" "}
            <span className="inline-block bg-black px-3 align-baseline text-bone">And</span>
            <br />
            Functionality
          </h2>

          <p className="max-w-xl text-left text-xl uppercase leading-tight tracking-tight text-black">
            We design gear built for peak performance with a clean, modern
            edge. The brand was created to bridge the gap between performance
            wear and everyday use, delivering versatile pieces ready for any
            environment.
          </p>
        </div>
      </div>
    </section>
  );
}
