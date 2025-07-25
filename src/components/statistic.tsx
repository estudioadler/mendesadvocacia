import React from "react";
import { Card } from "./ui/card";
export const Statistic = () => {
  return (
    <div className="gap-6 container mx-auto bg-palette-white pb-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center items-center gap-6">
        <Card className="p-6 bg-transparent border-none relative">
          <div className="flex items-center gap-2">
            <h3 className="font-medium text-5xl">+1000</h3>
          </div>
          <p className="text-gray-600">Clientes Atendidos</p>
          <div className="w-0.5 h-full bg-palette-secondary absolute top-0 left-0" />
        </Card>
        <Card className="p-6 bg-transparent border-none relative">
          <div className="flex items-center gap-2">
            <h3 className="font-medium text-5xl">15+</h3>
          </div>
          <p className="text-gray-600">Anos de Experiência</p>
          <div className="w-0.5 h-full bg-palette-secondary absolute top-0 left-0" />
        </Card>
        <Card className="p-6 bg-transparent border-none relative">
          <div className="flex items-center gap-2">
            <h3 className="font-medium text-5xl">98%</h3>
          </div>
          <p className="text-gray-600">Taxa de Sucesso</p>
          <div className="w-0.5 h-full bg-palette-secondary absolute top-0 left-0" />
        </Card>
        <Card className="p-6 bg-transparent border-none relative">
          <div className="flex items-center gap-2">
            <h3 className="font-medium text-5xl">R$ 10M+</h3>
          </div>
          <p className="text-gray-600">Recuperados</p>
          <div className="w-0.5 h-full bg-palette-secondary absolute top-0 left-0" />
        </Card>
      </div>
    </div>
  );
};
