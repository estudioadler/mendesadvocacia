import React from "react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { TitleSection } from "./titleSection";
import Link from "next/link";

export const ContactForm = () => {
  return (
    <section id="contato" className="py-20 border-b border-palette-secondary">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto flex flex-col gap-6">
          <TitleSection
            title="Estamos prontos para ouvir você e defender seus direitos."
            tagTitle="Entre em contato"
          />
          <form className="space-y-6">
            <Input placeholder="Nome completo" />
            <Input placeholder="Telefone/WhatsApp" />
            <Input placeholder="E-mail" type="email" />
            <Textarea
              placeholder="Descreva brevemente seu caso"
              className="min-h-[150px]"
            />
            <div className="flex gap-4 mt-6">
              <Link href="#">
                <button className="px-6 py-3 text-sm font-semibold text-white bg-palette-primary hover:bg-palette-secondary transition-colors">
                  Entre em contato
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
