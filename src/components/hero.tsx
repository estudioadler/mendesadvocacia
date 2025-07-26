"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "./ui/button";

export const Hero = () => {
  const [offset, setOffset] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Detecta scroll para parallax
  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Detecta se é mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile(); // chama ao montar
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section className="flex flex-col gap-10 mb-20 md:mb-32 px-1.5">
      {/* Vídeo com efeito parallax */}
      <div className="relative w-full h-[450px] overflow-hidden rounded-3xl">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover object-center md:object-right-top"
          src={isMobile ? "/hero-video-mobile.mp4" : "/hero-video-desktop.mp4"}
          width={1400}
          height={500}
          autoPlay
          loop
          muted
          playsInline
          style={{
            transform: `translateY(${offset * 0.4}px) scale(1.2)`,
            transition: "transform 0.1s ease-out",
          }}
        />
      </div>

      {/* Texto principal */}
      <div className="w-full flex-col md:flex justify-between container mx-auto px-3.5 md:px-8">
        <h1 className="text-3xl w-full max-w-md">
          Advocacia Trabalhista descomplicada e eficiente.
        </h1>
        <div className="flex flex-col md:flex-row gap-2 mt-6">
          <Link href="#">
            <Button size="lg" className="px-4 rounded-full ">
              Fale com um especialista
            </Button>
          </Link>
          <Link href="#sobre">
            <Button variant="outline" size="lg" className="px-4 rounded-full border-palette-black/20 border">
              Saiba mais
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
