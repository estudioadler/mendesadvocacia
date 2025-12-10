"use client";
import Image from "next/image";

export const Hero = () => {
  return (
    <div className="w-full bg-[var(--background-color)]">
      <section className="container mx-auto flex flex-col md:flex-row">
        {/* Texto */}
        <div className="w-full px-6 md:px-16 py-16 md:py-28 flex flex-col gap-8">
          <h1 className="text-5xl w-full max-w-md text-emerald-50 uppercase">
            Sua <span className="italic">voz</span>, nossa{" "}
            <span className="italic">missão</span>.
          </h1>
          <p className="text-lg text-secondary w-64 md:w-full md:max-w-xs">
            Advocacia Trabalhista especializada em{" "}
            <span className="italic font-medium">proteger seus direitos</span> no
            ambiente de trabalho.
          </p>
        </div>

        {/* Imagem - colada à direita */}
        <div className="relative w-full overflow-hidden aspect-square md:aspect-video md:-mr-6 lg:-mr-8">
          <Image
            src="/hero-image.png"
            alt="Imagem de fundo da seção principal"
            fill
            priority
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </section>
    </div>
  );
};