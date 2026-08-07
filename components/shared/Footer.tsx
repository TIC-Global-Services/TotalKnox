import Image from "next/image";

const policies = ["Shipping", "Cancellation & Returns", "Payments"];
const features = ["Home", "Our Story", "Warranty"];
const morePolicies = ["Privacy Policy", "Terms & Conditions", "Warranty"];
const moreFeatures = ["Track Orders", "Blogs"];

export default function Footer() {
  return (
    <footer className="bg-crimson text-white">
      <div className="w-full px-6 md:px-10 py-12 md:py-16">
        <div className="grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-3 md:gap-x-10">
          <div>
            <h4 className="font-display font-bold text-lg uppercase tracking-tight text-black">
              Policies
            </h4>
            <ul className="mt-4 space-y-1 text-sm tracking-tight">
              {policies.map((p) => (
                <li key={p}>
                  <a href="#" className="hover:opacity-80">
                    {p}
                  </a>
                </li>
              ))}
            </ul>
            <ul className="mt-6 space-y-1 text-sm tracking-tight">
              {morePolicies.map((p) => (
                <li key={p}>
                  <a href="#" className="hover:opacity-80">
                    {p}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden md:flex flex-col items-center justify-center text-center">
            <Image
              src="/shared/footerlogo.webp"
              alt="TotalKnox fist"
              width={220}
              height={220}
              className="object-cover"
            />
          </div>

          <div className="text-right">
            <h4 className="font-display font-bold text-lg uppercase tracking-tight text-black">
              Features
            </h4>
            <ul className="mt-4 space-y-1 text-sm tracking-tight">
              {features.map((p) => (
                <li key={p}>
                  <a href="#" className="hover:opacity-80">
                    {p}
                  </a>
                </li>
              ))}
            </ul>
            <ul className="mt-6 space-y-1 text-sm tracking-tight">
              {moreFeatures.map((p) => (
                <li key={p}>
                  <a href="#" className="hover:opacity-80">
                    {p}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 flex flex-col items-center text-center md:hidden">
            <Image
              src="/shared/footerlogo.webp"
              alt="TotalKnox fist"
              width={200}
              height={200}
              className="object-cover"
            />
          </div>
        </div>
        
        <div className="mt-8 flex flex-col items-center gap-1 text-center text-xs text-black">
          <span>Designed &amp; Developed by TIC Global Services</span>
          <span>© 2026 Totalknox. All Rights Reserved.</span>
        </div>
      </div>
    </footer>
  );
}
