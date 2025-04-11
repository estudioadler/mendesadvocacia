"use client";

import * as React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Efeito para detectar o scroll da página
  React.useEffect(() => {
    const handleScroll = () => {
      // Verifica se a página foi rolada mais que 10px
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    // Adiciona o evento de scroll
    window.addEventListener("scroll", handleScroll);

    // Remove o evento quando o componente é desmontado
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  // Títulos e IDs correspondentes
  const listNav = [
    { name: "Sobre", id: "sobre" },
    { name: "Serviços", id: "servicos" },
    { name: "Benéficios", id: "beneficios" },
    { name: "Dúvidas Frequentes", id: "faq" },
    { name: "Contato", id: "contato" },
  ];

  return (
    <header
      className={`fixed md:sticky top-0 left-0 right-0 flex items-center justify-between h-20 md:h-24 w-full px-6 md:px-16 z-40 transition-all duration-300 scroll-smooth ${
        scrolled ? "bg-white shadow-sm" : "bg-transparent"
      }`}
    >
      <a href="#inicio">
        <Image src="/logo.svg" alt="logo" width={128} height={128} />
      </a>

      <nav className="hidden lg:flex">
        <ul className="flex gap-6">
          {listNav.map((item) => (
            <li key={item.id}>
              <Link href={`#${item.id}`}>
                <button
                  role="link"
                  className="relative text-sm text-muted-foreground after:absolute after:-bottom-0.5 after:left-0 after:h-0.5 after:w-full after:origin-bottom-right after:scale-x-0 after:bg-palette-secondary after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100"
                >
                  {item.name}
                </button>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      {/* Botão de menu para dispositivos móveis */}
      <button
        onClick={toggleMenu}
        className="lg:hidden focus:outline-none"
        aria-label="Toggle menu"
      >
        <div className="space-y-1.5">
          <span
            className={`block h-px w-6 bg-muted-foreground transition-all duration-300 ease-out ${
              isMenuOpen ? "rotate-45 translate-y-1" : ""
            }`}
          ></span>
          <span
            className={`block h-px w-6 bg-muted-foreground transition-all duration-300 ease-out ${
              isMenuOpen ? "-rotate-45 -translate-y-1" : ""
            }`}
          ></span>
        </div>
      </button>

      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-palette-white shadow-md lg:hidden z-50">
          <nav className="px-6">
            <ul className="flex flex-col">
              {listNav.map((item) => (
                <li key={item.id}>
                  <a href={`#${item.id}`} onClick={() => setIsMenuOpen(false)}>
                    <Button
                      variant="ghost"
                      size="lg"
                      className="text-base text-muted-foreground py-7 px-0 border-t w-full items-center justify-start"
                    >
                      {item.name}
                    </Button>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
