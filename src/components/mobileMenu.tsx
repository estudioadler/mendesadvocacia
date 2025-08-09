"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  listNav: Array<{ name: string; id: string }>;
}

export default function MobileMenu({ isOpen, onClose, listNav }: MobileMenuProps) {
  // Fecha o menu quando clica em um link
  const handleLinkClick = () => {
    onClose();
  };

  // Previne scroll do body quando menu está aberto
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <div
      className={`fixed inset-0 z-40 lg:hidden transition-all duration-200 ${
        isOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Menu Content */}
      <div
       className={`absolute bg-palette-mist rounded-2xl shadow-2xl border border-gray-100 overflow-hidden ${
          isOpen 
              ? "top-20 right-2 left-2" // Mobile: larger width
              : "top-24 right-8 min-w-80" // Desktop: posição original
          } ${
          isOpen
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
                    className="w-full text-left px-6 py-3 text-palette-stone hover:text-palette-black hover:bg-gray-50 transition-all duration-200 flex items-center justify-between group"
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
  );
}