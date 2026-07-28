import Image from "next/image";

const items = [
  {
    label: "Apex Pro",
    sub: "Fight Gloves",
    image: "/home/signature_selections/apex_pro.webp",
  },
  {
    label: "Core",
    sub: "Hand Wraps",
    image: "/shared/we_create2.webp",
  },
  {
    label: "Phantom",
    sub: "Focus Mitts",
    image: "/home/signature_selections/phantom_focus.webp",
  },
];

export default function SignatureSelections() {
  return (
    <section className="bg-bone py-16 md:py-24">
      <div className="mx-auto w-full max-w-[1400px] px-6 md:px-10">
        <div className="text-center">
          <h2 className="font-display font-semibold uppercase leading-tight tracking-tight text-2xl md:text-5xl">
            <span>SIGNATURE </span>
            <span className="text-crimson">SELECTIONS</span>
          </h2>
          <p className="mx-auto mt-4 max-w-md text-lg text-black">
            Gear trusted in training and competition.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
          {items.map((it) => (
            <a
              key={it.label}
              href="#"
              className="group relative flex aspect-[4/2.5] overflow-hidden rounded-2xl bg-black"
            >
              <Image
                src={it.image}
                alt={it.label}
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <p className="text-xl font-medium uppercase tracking-wide">
                  {it.label}
                </p>
                <p className="font-medium text-xl uppercase tracking-wide">
                  {it.sub}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
