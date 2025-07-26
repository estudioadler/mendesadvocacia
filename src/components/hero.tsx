"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { Button } from "./ui/button";

export const Hero = () => {
  const [offset, setOffset] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Detecta scroll com melhor desempenho
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setOffset(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Detecta se é mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Evita recarregar vídeo em resize
  const videoSrc = useMemo(() => {
    return isMobile ? "/hero-video-mobile.mp4" : "/hero-video-desktop.mp4";
  }, [isMobile]);

  // Define o poster correto
  const videoPoster = useMemo(() => {
    return isMobile ? "/hero-poster-mobile.jpg" : "/hero-poster.jpg";
  }, [isMobile]);

  return (
    <section className="flex flex-col gap-10 mb-20 md:mb-32 px-1.5">
      {/* Vídeo com efeito parallax */}
      <div className="relative w-full h-[450px] overflow-hidden rounded-3xl">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover object-center md:object-right-top"
          src={videoSrc}
          poster={videoPoster}
          width={1400}
          height={500}
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          style={{
            transform: isMobile
              ? "scale(1.1)"
              : `translateY(${offset * 0.4}px) scale(1.2)`,
            transition: "transform 0.1s ease-out",
            willChange: "transform",
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
            <Button size="lg" className="px-4 rounded-full">
              Fale com um especialista
            </Button>
          </Link>
          <Link href="#sobre">
            <Button
              variant="outline"
              size="lg"
              className="px-4 rounded-full border-palette-black/20 border"
            >
              Saiba mais
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
