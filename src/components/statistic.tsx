'use client';

import React, { useEffect, useRef, useState } from "react";
import { Card } from "./ui/card";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const statisticsData = [
  { id: 1, value: 1000, label: "Clientes Atendidos", prefix: "", suffix: "+" },
  { id: 2, value: 15, label: "Anos de Experiência", prefix: "", suffix: "+" },
  { id: 3, value: 98, label: "Taxa de Sucesso", prefix: "", suffix: "%" },
  { id: 4, value: 10, label: "Recuperados", prefix: "", suffix: "M+" }
];

export const Statistic = () => {
  const refs = useRef<Array<HTMLHeadingElement | null>>([]);
  const [preloadFinished, setPreloadFinished] = useState(false);

  useEffect(() => {
    // Aguarda 3 segundos (duração do preload) antes de ativar as animações
    const timer = setTimeout(() => {
      setPreloadFinished(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!preloadFinished) return;

    refs.current.forEach((el, index) => {
      if (!el) return;

      const stat = statisticsData[index];
      const obj = { val: 0 };

      gsap.to(obj, {
        val: stat.value,
        duration: 2.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          toggleActions: "play none none none"
        },
        onUpdate: function () {
          if (!el) return;
          const value = stat.value >= 10 ? Math.floor(obj.val) : obj.val.toFixed(1);
          el.textContent = `${stat.prefix || ""}${value}${stat.suffix || ""}`;
        }
      });
    });
  }, [preloadFinished]);

  return (
    <div className="gap-6 container mx-auto px-6 md:px-8 bg-palette-mist py-12 md:py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center items-center rounded-2xl overflow-hidden">
        {statisticsData.map((stat, i) => (
          <Card key={stat.id} className="p-6 bg-transparent">
            <div className="flex items-center gap-2">
              <div
                className="font-medium text-5xl"
                ref={(el) => { refs.current[i] = el; }}
              >
                0
              </div>
            </div>
            <p className="text-lg text-muted-foreground">{stat.label}</p>
          </Card>
        ))}
      </div>
    </div>
  );
};