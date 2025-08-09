import { AboutArea } from "@/components/aboutArea";
import { ContactForm } from "@/components/contactForm";
import FAQSection from "@/components/faq";
import { Footer } from "@/components/footer";
import Header from "@/components/header";
import { Hero } from "@/components/hero";
import LegalServicesCards from "@/components/legalServicesCards";
import Preloader from "@/components/preloader";
import Testimonial from "@/components/testmonial";
import Benefits from "@/components/benefits";
import { Statistic } from "@/components/statistic";
import { ContactFloat } from "@/components/contactFloat";

export default function Home() {
  return (
    <>
      <Preloader />
      <Header />
      <Hero />
      <ContactFloat />
      <Statistic />
      <AboutArea />
      <LegalServicesCards />
      <Benefits />
      <Testimonial />
      <FAQSection />
      <ContactForm />
      <Footer />
    </>
  );
}
