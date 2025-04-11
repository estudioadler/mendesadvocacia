"use client";
import React, { useState } from "react";
import { TitleSection } from "./titleSection";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
 
const FAQSection = () => {


  const faqItems = [
    {
      question: "Quanto tempo tenho para entrar com uma ação trabalhista?",
      answer:
        "O prazo prescricional para ações trabalhistas é de 2 anos após o término do contrato de trabalho, podendo reclamar direitos dos últimos 5 anos.",
    },
    {
      question: "Preciso pagar alguma coisa adiantado?",
      answer:
        "Não cobramos nenhum valor adiantado. Nossa remuneração é baseada apenas em honorários de êxito, ou seja, só recebemos quando você receber.",
    },
    {
      question: "Quanto tempo dura um processo trabalhista?",
      answer:
        "O tempo médio é de 1 a 3 anos, dependendo da complexidade do caso e da região onde é processado.",
    },
    {
      question: "Posso processar a empresa estando ainda empregado?",
      answer:
        "Sim, é possível, mas avaliamos cada caso individualmente para proteger sua estabilidade no emprego atual.",
    },
    {
      question: "Quais documentos preciso levar na primeira consulta?",
      answer:
        "É recomendável trazer carteira de trabalho, contracheques, comprovantes de pagamento, contrato de trabalho, comunicação de dispensa (se houver) e qualquer outro documento relacionado à situação trabalhista.",
    },
    {
      question: "O que é assédio moral no trabalho?",
      answer:
        "Assédio moral é a exposição repetitiva e prolongada do trabalhador a situações humilhantes e constrangedoras, causando dano à sua dignidade e integridade psíquica. Isso inclui comentários depreciativos, isolamento, sobrecarga intencional e outras condutas abusivas.",
    },
  ];

  return (
    <section id="faq" className="py-20">
      <div className="container-x flex flex-col gap-6">
        <TitleSection title="Dúvidas Frequentes" tagTitle="FAQ" />
        {faqItems.length > 0 && (
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-b border-b-palette-secondary"
              >
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>  
              </AccordionItem>
            ))}
          </Accordion>
        )}
      </div>
    </section>
  );
};

export default FAQSection;
