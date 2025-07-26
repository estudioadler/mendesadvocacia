"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import FloatingMenu from "./floatingMenu";
import MobileMenu from "./mobileMenu";


export default function Header() {
  const [headerHidden, setHeaderHidden] = React.useState(false);
  const [showHamburger, setShowHamburger] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [isMobile, setIsMobile] = React.useState(false);

  const listNav = [
    { name: "Sobre", id: "sobre" },
    { name: "Serviços", id: "servicos" },
    { name: "Benéficios", id: "beneficios" },
    { name: "Depoimentos", id: "depoimentos" },
    { name: "Dúvidas Frequentes", id: "faq" },
    { name: "Contato", id: "contato" },
  ];

  // Detecta se é mobile
  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Detecta scroll com delay para transições (apenas desktop)
  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100 && !isMobile) {
        // Primeiro esconde o header (apenas desktop)
        setHeaderHidden(true);
        // Depois de 200ms mostra o hamburger
        setTimeout(() => {
          setShowHamburger(true);
        }, 200);
      } else if (window.scrollY <= 100) {
        // Primeiro esconde o hamburger
        setShowHamburger(false);
        setMobileMenuOpen(false);
        // Depois de 200ms mostra o header (apenas desktop)
        if (!isMobile) {
          setTimeout(() => {
            setHeaderHidden(false);
          }, 200);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobile]);

  // Fecha o menu quando clica em um link
  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Header Normal - Desktop e Mobile */}
      <header 
        className={`fixed top-0 z-50 bg-palette-mist w-full flex items-center justify-between py-5 container mx-auto px-6 md:px-8 transition-all duration-200 ${
          headerHidden && !isMobile ? 'opacity-0 pointer-events-none translate-y-[-20px]' : 'opacity-100 pointer-events-auto translate-y-0'
        }`}
      >
        {/* Logo */}
        <Link href="#" className="text-palette-black flex items-center gap-2">
          <Image
            src="/logo.svg"
            alt="Logo Mendes Advocacia"
            width={24}
            height={24}
          />
          <div className="flex flex-col -space-y-2">
            <span>mendes</span>
            <span>advocacia</span>
          </div>
        </Link>

        {/* Menu normal - desktop */}
        <nav className="hidden lg:flex">
          <ul className="flex gap-6">
            {listNav.map((item) => (
              <li key={item.id}>
                <Link href={`#${item.id}`}>
                  <button
                    role="link"
                    className="text-sm text-palette-stone hover:text-palette-black transition-colors duration-200"
                  >
                    {item.name}
                  </button>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Menu hamburger - mobile sempre visível */}
        <button 
          className="lg:hidden p-2 text-palette-black"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </header>

      {/* Menu Flutuante - Desktop apenas */}
      <div className="hidden lg:block">
        <FloatingMenu 
          isVisible={showHamburger} 
          listNav={listNav}
        />
      </div>

      {/* Menu Mobile */}
      <MobileMenu 
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        listNav={listNav}
      />
    </>
  );
}