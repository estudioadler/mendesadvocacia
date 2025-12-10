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
    { name: "FAQ", id: "faq" },
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
      {/* Adiciona um wrapper com a cor de fundo que vai até as bordas */}
      <div className="w-full bg-[var(--background-color)]">
        <header className="z-50 w-full flex items-center justify-between py-6 container mx-auto px-6 md:px-8">
          {/* Logo */}
          <Link href="#" className="flex items-center -space-x-2 text-secondary">
            <Image
              src="/logo.svg"
              alt="Logo Mendes Advocacia"
              width={28}
              height={28}
            />
            <div className="flex flex-col items-end -space-y-2">
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
                      className="text-sm uppercase text-palette-mist hover:text-palette-stone transition-colors duration-200"
                    >
                      {item.name}
                    </button>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Botão do menu mobile */}
          {!mobileMenuOpen && (
            <button
              className={`rounded-full z-50 sm:hidden ${
                isMobile ? "p-3 text-secondary" : "p-4"
              }`}
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Abrir menu"
            >
              <EqualsIcon className={`${isMobile ? "size-6" : "size-7"}`} />
            </button>
          )}
        </header>
      </div>

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