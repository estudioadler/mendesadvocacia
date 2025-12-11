"use client";
import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Equals, X } from "@phosphor-icons/react/dist/ssr";

export default function Header() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [showFloatingButton, setShowFloatingButton] = React.useState(false);
  const [isMobile, setIsMobile] = React.useState(false);

  const listNav = [
    { name: "Sobre", id: "sobre" },
    { name: "Serviços", id: "servicos" },
    { name: "Benéficios", id: "beneficios" },
    { name: "Depoimentos", id: "depoimentos" },
    { name: "FAQ", id: "faq" },
    { name: "Contato", id: "contato" },
  ];

  // Detectar mobile
  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Controlar botão flutuante no scroll
  React.useEffect(() => {
    const handleScroll = () => {
      const shouldShow = window.scrollY > 100;
      setShowFloatingButton(shouldShow);
      
      // Fecha o menu se o botão flutuante sumir
      if (!shouldShow && menuOpen) {
        setMenuOpen(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [menuOpen]);

  // Bloquear scroll quando menu aberto
  React.useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menuOpen]);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <>
      {/* HEADER FIXO */}
      <div className="w-full bg-[var(--background-color)]">
        <header className="z-50 w-full flex items-center justify-between p-6 container mx-auto">
          
          {/* LOGO */}
          <Link href="#" className="flex items-center -space-x-2 text-secondary">
            <Image src="/logo.svg" alt="Logo Mendes Advocacia" width={28} height={28} />
            <div className="flex flex-col items-end -space-y-2">
              <span>mendes</span>
              <span>advocacia</span>
            </div>
          </Link>

          {/* MENU DESKTOP (sempre visível no desktop) */}
          <nav className="hidden lg:flex">
            <ul className="flex gap-6">
              {listNav.map((item) => (
                <li key={item.id}>
                  <Link
                    href={`#${item.id}`}
                    className="text-sm uppercase text-palette-mist hover:text-palette-stone transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* BOTÃO MOBILE NO HEADER (só aparece quando não tem floating) */}
          <button
            className={`lg:hidden p-3 rounded-full text-secondary transition-opacity duration-300
              ${showFloatingButton ? "opacity-0 pointer-events-none" : "opacity-100"}
            `}
            onClick={() => setMenuOpen(true)}
            aria-label="Abrir menu"
          >
            <Equals className="size-7" />
          </button>
        </header>
      </div>

      {/* BOTÃO FLUTUANTE (aparece no scroll - mobile e desktop) */}
      <div
        className={`
          fixed z-50 transition-all duration-300
          ${isMobile ? "top-6 right-6" : "top-8 right-8"}
          ${showFloatingButton ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        `}
      >
        <button
          className="bg-palette-mist shadow-md rounded-full transition p-4"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {menuOpen ? (
            <X className="size-5 text-palette-black" />
          ) : (
            <Equals className="size-5 text-palette-black" />
          )}
        </button>
      </div>

      {/* MENU OVERLAY FULLSCREEN (único para todos os casos) */}
      <div
        className={`
          fixed inset-0 z-40 bg-palette-mist flex flex-col 
          transition-all duration-300
          ${menuOpen 
            ? "opacity-100 pointer-events-auto" 
            : "opacity-0 pointer-events-none"}
        `}
      >
        {/* BOTÃO FECHAR INTERNO */}
        <button
          className="absolute top-6 right-6 p-3 rounded-full z-50 transition"
          onClick={() => setMenuOpen(false)}
          aria-label="Fechar menu"
        >
          <X className="size-6 text-palette-black" />
        </button>

        {/* LISTA CENTRAL */}
        <nav className="flex-1 flex flex-col justify-center items-center gap-4 px-6">
          {listNav.map((item) => (
            <Link
              key={item.id}
              href={`#${item.id}`}
              onClick={handleLinkClick}
              className="text-4xl md:text-5xl uppercase text-palette-deepGreen hover:text-palette-black transition"
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}