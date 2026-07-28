import AboutHero from "@/components/about/AboutHero";
import WeCreate from "@/components/about/WeCreate";
import OurVision from "@/components/about/OurVision";
import Origin from "@/components/about/Origin";
import PillarsTabs from "@/components/about/PillarsTabs";
import Founder from "@/components/about/Founder";
import CtaSplit from "@/components/about/CtaSplit";
import ExploreCollections from "@/components/about/ExploreCollections";
import Footer from "@/components/shared/Footer";

export const metadata = {
  title: "About — TotalKnox",
  description:
    "TotalKnox is built on protection, performance, and reliability. We create practical and functional apparel for fighters.",
};

export default function Page() {
  return (
    <main>
      <AboutHero />
      <WeCreate />
      <OurVision />
      <Origin />
      <PillarsTabs />
      <Founder />
      <CtaSplit />
      <ExploreCollections />
      <Footer />
    </main>
  );
}
