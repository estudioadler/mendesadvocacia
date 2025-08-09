"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import FloatingMenu from "./floatingMenu";
import MobileMenu from "./mobileMenu";
import { EqualsIcon, X } from "@phosphor-icons/react/dist/ssr";

export default function Header() {
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

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowHamburger(true);
      } else {
        setShowHamburger(false);
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className="z-50 bg-palette-mist w-full flex items-center justify-between py-4 container mx-auto px-6 md:px-8">
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

        {/* Menu desktop */}
        <nav className="hidden md:flex">
          <ul className="flex gap-6">
            {listNav.map((item) => (
              <li key={item.id}>
                <Link href={`#${item.id}`}>
                  <button
                    role="link"
                    className=" text-palette-stone hover:text-palette-black transition-colors duration-200"
                  >
                    {item.name}
                  </button>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Botão do menu mobile com z-50 para ficar acima do backdrop */}
        <button
          className={`bg-palette-mist rounded-full z-50 sm:hidden ${
            isMobile
              ? "p-3" // Mobile: padding menor
              : "p-4" // Desktop: padding original
          }`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {mobileMenuOpen ? (
            <X
              className={`text-palette-black ${
                isMobile ? "size-6" : "size-7"
              }`}
            />
          ) : (
            <EqualsIcon
              className={`text-palette-black ${
                isMobile ? "size-6" : "size-7"
              }`}
            />
          )}
        </button>
      </header>

      <FloatingMenu
        isVisible={showHamburger}
        listNav={listNav}
        isMobile={isMobile}
      />

      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        listNav={listNav}
      />
    </>
  );
}
