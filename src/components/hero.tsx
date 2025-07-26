'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from './ui/button';

export const Hero = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="flex flex-col gap-10 my-20 md:mb-32 px-1.5">
      {/* Vídeo com efeito parallax */}
      <div className="relative w-full h-60 md:h-[450px] overflow-hidden  rounded-3xl">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover object-right-top"
          src="/hero-video1.mp4"
          width={1400}
          height={500}
          autoPlay
          loop
          muted
          playsInline
          style={{
            transform: `translateY(${offset * 0.4}px)`,
            transition: 'transform 0.1s ease-out',
          }}
        />
      </div>

      {/* Texto principal */}
      <div className="w-full flex-col md:flex justify-between container mx-auto px-4 md:px-8">
        <h1 className="text-3xl w-full max-w-md">
          Advocacia Trabalhista descomplicada e eficiente.
        </h1>
        <div className="flex flex-col md:flex-row gap-2 mt-6">
          <Link href="#">
            <Button size="lg" className="px-4 rounded-full text-palette-mist">
              Fale com um especialista
            </Button>
          </Link>
          <Link href="#sobre">
            <Button
              variant="outline"
              size="lg"
              className="px-4 rounded-full"
            >
              Saiba mais
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
