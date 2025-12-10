"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
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

  // Bloquear scroll ao abrir
  React.useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [menuOpen]);

  // Fecha o menu quando o botão some
  React.useEffect(() => {
    if (!isVisible) setMenuOpen(false);
  }, [isVisible]);

  return (
    <>
      {/* Botão flutuante */}
      <div
        className={`fixed z-50 transition-all duration-200 ${
          isMobile ? "top-5 right-5" : "top-8 right-8"
        } ${
          isVisible
            ? "opacity-100 pointer-events-auto scale-100"
            : "opacity-0 pointer-events-none scale-90"
        }`}
      >
        <button
          className="bg-palette-mist shadow-sm rounded-full hover:shadow-lg transition p-4"
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

      {/* MENU FULLSCREEN */}
      <div
        className={`fixed inset-0 z-40 bg-palette-mist flex flex-col transition-all duration-300
        ${menuOpen && isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6 pointer-events-none"}
      `}
      >

        {/* HEADER */}
      <header className="w-full flex items-center justify-between px-6 py-3">
        <Link href="#" className=" flex items-center gap-2 text-secondary" onClick={handleLinkClick}>
          <Image src="/logo.svg" alt="Logo Mendes Advocacia" width={24} height={24} />
          <div className="flex flex-col -space-y-2">
            <span>mendes</span>
            <span>advocacia</span>
          </div>
        </Link>

        <button
          className="p-3 rounded-full"
          
          aria-label="Fechar menu"
        >
          <X className="size-5 text-palette-black" />
        </button>
      </header>

      {/* LISTA CENTRAL */}
      <nav className="flex-1 flex flex-col mt-16 px-6 gap-6">
        {listNav.map((item) => (
          <Link
            key={item.id}
            href={`#${item.id}`}
            onClick={handleLinkClick}
            className="text-4xl uppercase text-palette-deepGreen hover:text-palette-black transition"
          >
            {item.name}
          </Link>
        ))}
      </nav>
      </div>
    </>
  );
}
