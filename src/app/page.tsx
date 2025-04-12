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

export default function Home() {
  return (
    <>
      {/* <Preloader /> */}
      <Header />
      <Hero />
      <div className="gap-6 container-x bg-palette-white pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center items-center gap-6">
          <Card className="p-6 bg-transparent border-none relative">
            <div className="flex items-center gap-2">
              <Users className="w-8 h-8 text-primary" strokeWidth={1} />
              <h3 className="font-bold text-xl">+1000</h3>
            </div>
            <p className="text-gray-600">Clientes Atendidos</p>
            <div className="w-0.5 h-full bg-palette-secondary absolute top-0 left-0" />
          </Card>
          <Card className="p-6 bg-transparent border-none relative">
            <div className="flex items-center gap-2">
              <Briefcase className="w-8 h-8 text-primary" strokeWidth={1} />
              <h3 className="font-bold text-xl">15+</h3>
            </div>
            <p className="text-gray-600">Anos de Experiência</p>
            <div className="w-0.5 h-full bg-palette-secondary absolute top-0 left-0" />
          </Card>
          <Card className="p-6 bg-transparent border-none relative">
            <div className="flex items-center gap-2">
              <Shield className="w-8 h-8 text-primary" strokeWidth={1} />
              <h3 className="font-bold text-xl">98%</h3>
            </div>
            <p className="text-gray-600">Taxa de Sucesso</p>
            <div className="w-0.5 h-full bg-palette-secondary absolute top-0 left-0" />
          </Card>
          <Card className="p-6 bg-transparent border-none relative">
            <div className="flex items-center gap-2">
              <Award className="w-8 h-8 text-primary" strokeWidth={1} />
              <h3 className="font-bold text-xl">R$ 10M+</h3>
            </div>
            <p className="text-gray-600">Recuperados</p>
            <div className="w-0.5 h-full bg-palette-secondary absolute top-0 left-0" />
          </Card>
        </div>
      </div>
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
