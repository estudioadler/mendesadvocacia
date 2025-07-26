'use client';

import React, { useEffect, useRef } from "react";
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

  useEffect(() => {
    refs.current.forEach((el, index) => {
      if (!el) return;

      const stat = statisticsData[index];
      const obj = { val: 0 };

      gsap.to(obj, {
        val: stat.value,
        duration: 2,
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
  }, []);

  return (
    <div className="gap-6 container mx-auto px-6 md:px-8 bg-palette-white">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center items-center outline outline-1 outline-palette-stone/20 rounded-2xl overflow-hidden">
        {statisticsData.map((stat, i) => (
          <Card key={stat.id} className="p-6 bg-transparent outline outline-1 outline-palette-stone/20 border-0">
            <div className="flex items-center gap-2">
              <div
                className="font-medium text-5xl"
                ref={(el) => { refs.current[i] = el; }}
              >
                0
              </div>
            </div>
            <p className="text-muted-foreground">{stat.label}</p>
          </Card>
        ))}
      </div>
    </div>
  );
};