import { AboutArea } from "@/components/aboutArea";
import { ContactForm } from "@/components/contactForm";
import FAQSection from "@/components/faq";
import { Footer } from "@/components/footer";
import Header from "@/components/header";
import { Hero } from "@/components/hero";
import LegalServicesCards from "@/components/legalServicesCards";
import Preloader from "@/components/preloader";
import Testimonial from "@/components/testmonial";
import { Card } from "@/components/ui/card";
import { Award, Briefcase, Shield, Users } from "lucide-react";
import Benefits from "@/components/benefits";
import { Statistic } from "@/components/statistic";

export default function Home() {
  return (
    <>
      {/* <Preloader /> */}
      <Header />
      <Hero />
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
