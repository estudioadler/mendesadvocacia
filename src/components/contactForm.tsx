import React from "react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { TitleSection } from "./titleSection";
import Link from "next/link";
import { Button } from "./ui/button";

export const ContactForm = () => {
  return (
    <div className="w-full bg-palette-mist">
      <section id="contato" className="container mx-auto py-20 px-6">
        <div className="max-w-2xl mx-auto flex flex-col gap-6">
          <TitleSection
            title="Estamos prontos para ouvir você e defender seus direitos."
            tagTitle="Entre em contato"
          />
          <form>
            <div className="flex flex-col gap-4 outline outline-1 outline-palette-stone/20 p-4 rounded-3xl">
              <Input placeholder="Nome completo" className="text-lg" />
              <Input placeholder="Telefone/WhatsApp" className="text-lg" />
              <Input placeholder="E-mail" type="email" className="text-lg" />
              <Textarea
                placeholder="Descreva brevemente seu caso"
                className="text-lg md:text-lg"
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
      </section>
    </div>
  );
};