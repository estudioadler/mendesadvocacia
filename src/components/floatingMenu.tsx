"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import { Equals, X } from "@phosphor-icons/react/dist/ssr";

interface FloatingMenuProps {
  isVisible: boolean;
  listNav: Array<{ name: string; id: string }>;
  isMobile?: boolean;
}

export default function FloatingMenu({
  isVisible,
  listNav,
  isMobile = false,
}: FloatingMenuProps) {
  const [menuOpen, setMenuOpen] = React.useState(false);

  // Fecha o menu quando clica em um link
  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  // Previne scroll do body quando menu está aberto
  React.useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menuOpen]);

  // Fecha o menu quando o componente não está mais visível
  React.useEffect(() => {
    if (!isVisible) {
      setMenuOpen(false);
    }
  }, [isVisible]);

  return (
    <>
      {/* Botão Menu Hamburger Flutuante */}
      <div
        className={`fixed z-50 transition-all duration-200 ${
          isMobile 
            ? "top-5 right-6" // Mobile: menor distância das bordas
            : "top-8 right-8" // Desktop: posição original
        } ${
          isVisible
            ? "opacity-100 pointer-events-auto scale-100"
            : "opacity-0 pointer-events-none scale-90"
        }`}
      >
        <button
          className={`bg-white shadow-sm rounded-full hover:shadow-xl transition-shadow duration-200 ${
            isMobile 
              ? "p-3" // Mobile: padding menor
              : "p-4" // Desktop: padding original
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {menuOpen ? (
            <X className={`text-palette-black ${isMobile ? "size-6" : "size-7"}`} />
          ) : (
            <Equals className={`text-palette-black ${isMobile ? "size-6" : "size-7"}`} />
          )}
        </button>
      </div>

      {/* Menu Dropdown */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-200 ${
          menuOpen && isVisible
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setMenuOpen(false)}
        />

        {/* Menu Content */}
        <div
          className={`absolute bg-palette-mist rounded-2xl shadow-2xl border border-gray-100 overflow-hidden transform transition-all duration-200 ${
            isMobile 
              ? "top-20 right-4 left-4" // Mobile: fullwidth com margens
              : "top-28 right-8 min-w-80" // Desktop: posição original
          } ${
            menuOpen && isVisible
              ? "scale-100 opacity-100 translate-y-0"
              : "scale-95 opacity-0 -translate-y-4"
          }`}
        >
          {/* Links do Menu */}
          <nav className="py-4">
            <ul>
              {listNav.map((item) => (
                <li key={item.id}>
                  <Link href={`#${item.id}`} onClick={handleLinkClick}>
                    <button
                      role="link"
                      className={`w-full text-left text-palette-stone hover:text-palette-black hover:bg-gray-50 transition-all duration-200 flex items-center justify-between group ${
                        isMobile 
                          ? "px-6 py-3 text-base" // Mobile: mais espaço e fonte maior
                          : "px-6 py-3 text-lg" // Desktop: tamanho original
                      }`}
                    >
                      <span>{item.name}</span>
                      <span className="text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        →
                      </span>
                    </button>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Footer do Menu (CTA) */}
          <div className="px-6 pb-6 bg-palette-mist">
          <Link href="#contato" onClick={handleLinkClick}>
            <Button size={"lg"} className="w-full rounded-full">
              Fale Conosco
            </Button>
          </Link>
        </div>
        </div>
      </div>
    </>
  );
}