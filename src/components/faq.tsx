



"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"
import { TitleSection } from "./titleSection";


export default function Component() {
  const [expandedItem, setExpandedItem] = useState<number | null>(1)


  const faqData = [
    {
      id: 1,
      question: "Quanto tempo tenho para entrar com uma ação trabalhista?",
      answer:
        "O prazo prescricional para ações trabalhistas é de 2 anos após o término do contrato de trabalho, podendo reclamar direitos dos últimos 5 anos.",
    },
    {
      id: 2,
      question: "Preciso pagar alguma coisa adiantado?",
      answer:
        "Não cobramos nenhum valor adiantado. Nossa remuneração é baseada apenas em honorários de êxito, ou seja, só recebemos quando você receber.",
    },
    {
      id: 3,
      question: "Quanto tempo dura um processo trabalhista?",
      answer:
        "O tempo médio é de 1 a 3 anos, dependendo da complexidade do caso e da região onde é processado.",
    },
    {
      id: 4,
      question: "Posso processar a empresa estando ainda empregado?",
      answer:
        "Sim, é possível, mas avaliamos cada caso individualmente para proteger sua estabilidade no emprego atual.",
    },
    {
      id: 5,
      question: "Quais documentos preciso levar na primeira consulta?",
      answer:
        "É recomendável trazer carteira de trabalho, contracheques, comprovantes de pagamento, contrato de trabalho, comunicação de dispensa (se houver) e qualquer outro documento relacionado à situação trabalhista.",
    },
    {
      id: 6,
      question: "O que é assédio moral no trabalho?",
      answer:
        "Assédio moral é a exposição repetitiva e prolongada do trabalhador a situações humilhantes e constrangedoras, causando dano à sua dignidade e integridade psíquica. Isso inclui comentários depreciativos, isolamento, sobrecarga intencional e outras condutas abusivas.",
    },
  ];

  const toggleItem = (id: number) => {
    setExpandedItem(expandedItem === id ? null : id)
  }

  return (
    <section id="faq" className="container mx-auto px-6 md:px-8 py-20 flex flex-col gap-12 rounded-t-3xl bg-neutral-100">
    <TitleSection title="Perguntas Frequentes" tagTitle="FAQ" alignment="center"/>
    <div className="w-full space-y-4">
      {faqData.map((item) => {
        const isExpanded = expandedItem === item.id

        return (
          <div
            key={item.id}
            className={`rounded-2xl transition-all duration-300 max-w-4xl mx-auto ${
              isExpanded ? "bg-palette-black text-palette-mist" : "bg-neutral-200 text-palette-graphite"
            }`}
          >
            <button
              onClick={() => toggleItem(item.id)}
              className="w-full p-6 text-left flex items-center justify-between"
            >
              <h3
                className={`text-palette-stone font-medium pr-4 transition-colors duration-200 ${
                  !isExpanded ? "hover:text-palette-black" : ""
                }`}
              >
                {item.id}. {item.question}
              </h3>
              <div
                className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-200 ${
                  isExpanded ? "bg-neutral-100 text-palette-graphite" : "bg-palette-black text-palette-mist"
                }`}
              >
                {isExpanded ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
              </div>
            </button>

            {isExpanded && (
              <div className="px-6 pb-6">
                <p className="text-white/90 leading-relaxed">{item.answer}</p>
              </div>
            )}
          </div>
        )
      })}
    </div>
    </section>
    
  )
}
