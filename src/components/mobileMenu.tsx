"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import { X } from "@phosphor-icons/react/dist/ssr";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  listNav: Array<{ name: string; id: string }>;
}

export default function MobileMenu({
  isOpen,
  onClose,
  listNav,
}: MobileMenuProps) {
  const handleLinkClick = () => {
    onClose();
  };

  React.useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <div
      className={`fixed inset-0 z-40 bg-palette-mist lg:hidden flex flex-col transition-all duration-300 
      ${
        isOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }
    `}
    >
      {/* BOTÃO FECHAR */}
      <button
        className="absolute top-4 right-4 p-3 rounded-full z-50"
        onClick={onClose}
        aria-label="Fechar menu"
      >
        <X className="size-6 text-palette-black" />
      </button>

      {/* LISTA CENTRAL */}
      <nav className="flex-1 flex flex-col mt-32 px-6 gap-2">
        {listNav.map((item) => (
          <Link
            key={item.id}
            href={`#${item.id}`}
            onClick={handleLinkClick}
            className="text-5xl uppercase text-palette-deepGreen hover:text-palette-black transition"
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </div>
  );
}
