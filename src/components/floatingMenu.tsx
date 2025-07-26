"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

interface FloatingMenuProps {
  isVisible: boolean;
  listNav: Array<{ name: string; id: string }>;
}

export default function FloatingMenu({ isVisible, listNav }: FloatingMenuProps) {
  const [menuOpen, setMenuOpen] = React.useState(false);

  // Fecha o menu quando clica em um link
  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  // Previne scroll do body quando menu está aberto
  React.useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
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
        className={`fixed top-8 right-8 z-50 transition-all duration-200 ${
          isVisible ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none translate-y-[-20px]'
        }`}
      >
        <button 
          className="p-4 bg-white shadow-sm rounded-full hover:shadow-xl transition-shadow duration-200"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {menuOpen ? (
            <X className="w-6 h-6 text-palette-black" />
          ) : (
            <Menu className="w-6 h-6 text-palette-black" />
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
          className={`absolute top-24 right-8 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden transform transition-all duration-200 min-w-80 ${
            menuOpen && isVisible
              ? "scale-100 opacity-100 translate-y-0"
              : "scale-95 opacity-0 -translate-y-4"
          }`}
        >
          {/* Links do Menu */}
          <nav className="py-2">
            <ul>
              {listNav.map((item) => (
                <li key={item.id}>
                  <Link href={`#${item.id}`} onClick={handleLinkClick}>
                    <button
                      role="link"
                      className="w-full text-left px-6 py-3 text-sm text-palette-stone hover:text-palette-black hover:bg-gray-50 transition-all duration-200 flex items-center justify-between group"
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
          <div className="px-6 pb-6 border-t border-gray-100 bg-gray-50">
            <Link href="#contato" onClick={handleLinkClick}>
              <button className="w-full py-2 px-4 bg-palette-black text-white text-sm rounded-lg hover:bg-opacity-90 transition-colors duration-200">
                Fale Conosco
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}