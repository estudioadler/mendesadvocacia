import React from "react";
import { Card } from "./ui/card";

export const Statistic = () => {
  const statisticsData = [
    {
      id: 1,
      value: "+1000",
      label: "Clientes Atendidos"
    },
    {
      id: 2,
      value: "15+",
      label: "Anos de Experiência"
    },
    {
      id: 3,
      value: "98%",
      label: "Taxa de Sucesso"
    },
    {
      id: 4,
      value: "R$ 10M+",
      label: "Recuperados"
    }
  ];

  return (
    <div className="gap-6 container mx-auto px-6 md:px-8 bg-palette-white">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center items-center border border-palette-stone/20 rounded-2xl">
        {statisticsData.map((stat) => (
          <Card key={stat.id} className="p-6 bg-transparent border border-palette-stone/20 relative">
            <div className="flex items-center gap-2">
              <h3 className="font-medium text-5xl">{stat.value}</h3>
            </div>
            <p className="text-palette-stone">{stat.label}</p>
            
          </Card>
        ))}
      </div>
    </div>
  );
};