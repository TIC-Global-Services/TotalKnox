import Hero from "@/components/home/Hero";
import Collection from "@/components/home/Collection";
import SignatureSelections from "@/components/home/SignatureSelections";
import CraftedForTheFight from "@/components/home/CraftedForTheFight";
import CoreEssentials from "@/components/home/CoreEssentials";
import FromTheFightFloor from "@/components/home/FromTheFightFloor";
import Footer from "@/components/shared/Footer";

export default function Page() {
  return (
    <main>
      <Hero />
      <Collection />
      <SignatureSelections />
      <CraftedForTheFight />
      <CoreEssentials />
      <FromTheFightFloor />
      <Footer />
    </main>
  );
}
