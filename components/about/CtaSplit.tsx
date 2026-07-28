import Image from "next/image";

function Panel({
  eyebrow,
  heading,
  cta,
  image,
  alt,
}: {
  eyebrow: string;
  heading: string;
  cta: string;
  image: string;
  alt: string;
}) {
  return (
    <a
      href="#"
      className="group relative flex aspect-[4/5] w-full items-center justify-center overflow-hidden text-white md:aspect-auto md:min-h-[600px]"
    >
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={image}
          alt={alt}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover transition duration-700 group-hover:scale-105"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/70" />
      <div className="relative z-10 flex h-full flex-col items-center px-6 text-center py-10">
        <span className="inline-flex items-center gap-2 text-xl uppercase tracking-tight text-white"><span className="inline-block h-2.5 w-2.5 bg-white" />{eyebrow}</span>
        <h3 className="mt-auto mb-auto font-display text-[2.5rem] uppercase tracking-tight">
          {heading}
        </h3>
        <span className="inline-flex items-center justify-center rounded-2xl px-7 py-3.5 text-base font-semibold uppercase tracking-tight transition border border-white/40 bg-white/60 text-black hover:bg-white hover:text-black">{cta}</span>
      </div>
    </a>
  );
}

export default function CtaSplit() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2">
      <Panel
        eyebrow="Our Collection"
        heading="Get Inspired"
        cta="Discover"
        image="/shared/boxing.webp"
        alt="Fighter throwing a punch"
      />
      <Panel
        eyebrow="We'd Love to Hear It From You"
        heading="Contact"
        cta="Contact Us"
        image="/contact/hero.webp"
        alt="Training scene"
      />
    </section>
  );
}
