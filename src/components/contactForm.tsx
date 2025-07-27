import React from "react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { TitleSection } from "./titleSection";
import Link from "next/link";
import { Button } from "./ui/button";

export const ContactForm = () => {
  return (
    <section id="contato" className="py-20 border-b border-palette-secondary">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto flex flex-col gap-6">
          <TitleSection
            title="Estamos prontos para ouvir você e defender seus direitos."
            tagTitle="Entre em contato"
          />
          <form>
            <div className="outline outline-1 outline-palette-stone/20 p-4 rounded-2xl">
              <Input placeholder="Nome completo"  className="text-lg rounded-none shadow-none  border-0 border-b-[1px] border-palette-stone/20" />
              <Input placeholder="Telefone/WhatsApp"  className="text-lg rounded-none shadow-none  border-0 border-b-[1px] border-palette-stone/20" />
              <Input placeholder="E-mail" type="email" className="text-lg rounded-none shadow-none  border-0 border-b-[1px] border-palette-stone/20"/>
              <Textarea
                placeholder="Descreva brevemente seu caso"
                className="text-lg rounded-none shadow-none  border-0"
                rows={8}
              />
            </div>

            <div className="flex gap-4 mt-6">
              <Link href="#">
                <Button
                  size={"lg"}
                  variant={"default"}
                  className="px-6 rounded-full text-palette-mist"
                >
                  Enviar Mensagem
                </Button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
