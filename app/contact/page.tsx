import ContactHero from "@/components/contact/ContactHero";
import ContactForm from "@/components/contact/ContactForm";
import Faq from "@/components/contact/Faq";
import Footer from "@/components/shared/Footer";

export const metadata = {
  title: "Contact — TotalKnox",
  description:
    "Get in touch with the TotalKnox team. We welcome your feedback, suggestions, and questions.",
};

export default function Page() {
  return (
    <main>
      <ContactHero />
      <section className="bg-white py-20 md:py-28">
        <div className="w-full px-6 md:px-10">
          <ContactForm />
        </div>
      </section>
      <section className="bg-white pb-24 md:pb-32">
        <div className="w-full px-6 md:px-10">
          <Faq />
        </div>
      </section>
      <Footer />
    </main>
  );
}
