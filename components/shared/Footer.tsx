import Image from "next/image";

const policies = [
  ["Shipping", "Privacy Policy"],
  ["Cancellation & Returns", "Terms & Conditions"],
  ["Payments", "Warranty"],
];
const features = [
  ["Track Orders", "Home"],
  ["Blogs", "Our Story"],
  ["", "Warranty"],
];

export default function Footer() {
  return (
    <footer className="bg-crimson text-white">
      <div className="w-full px-6 md:px-10 relative grid grid-cols-1 gap-10 py-12 md:grid-cols-3">
        <div>
          <h4 className="font-display font-semibold text-lg uppercase tracking-[1] text-black">
            Policies
          </h4>
          <div className="mt-5 grid grid-cols-2 gap-x-2 gap-y-2 text-sm tracking-tight">
            {policies.flat().map((p, i) => (
              <a
                key={i}
                href="#"
                className={`hover:opacity-80 ${
                  !p ? "pointer-events-none opacity-0" : ""
                }`}
              >
                {p}
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center justify-center text-center pt-8 md:pt-12">
          <Image
            src="/shared/footerlogo.webp"
            alt="TotalKnox fist"
            width={400}
            height={400}
            className="object-cover "
          />
        </div>

        <div className="md:text-right">
          <h4 className="font-display font-semibold text-lg uppercase tracking-[1] text-black">
            Features
          </h4>
          <div className="mt-5 grid grid-cols-2 gap-x-2 gap-y-2 text-sm tracking-tight md:justify-items-end">
            {features.flat().map((p, i) => (
              <a
                key={i}
                href="#"
                className={`hover:opacity-80 ${
                  !p ? "pointer-events-none opacity-0" : ""
                }`}
              >
                {p}
              </a>
            ))}
          </div>
        </div>

        <div className="col-span-1 md:col-span-3 flex flex-col items-center justify-between gap-3 text-xs tracking-none text-black md:flex-row">
          <span>© 2026 Totalknox. All Rights Reserved.</span>
          <span>Designed &amp; Developed by TIC Global Services</span>
        </div>
      </div>
    </footer>
  );
}
