"use client";
import { useState } from "react";
import { Phone, Mail, X, Wheat } from "lucide-react";
import Link from "next/link";
import { ChatTextIcon,  WhatsappLogoIcon } from "@phosphor-icons/react/dist/ssr";

export const ContactFloat = () => {
  const [open, setOpen] = useState(false);
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  return (
    <div className="fixed bottom-6 md:bottom-8 right-6 md:right-8 z-50 flex flex-col items-end gap-2">
      {open && (
        <>
          <Link
            href="https://wa.me/seunumerowhatsapp"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="bg-green-500 hover:bg-green-600 text-white p-3.5 md:p-5 rounded-full shadow"
          >
            <WhatsappLogoIcon size={24} />
          </Link>
          <Link
            target="_blank"
            href="mailto:seuemail@exemplo.com"
            aria-label="Email"
            className="bg-blue-500 hover:bg-blue-600 text-white p-4 md:p-5 rounded-full shadow"
          >
            <Mail size={20} />
          </Link>
          <Link
            target="_blank"
            href="tel:+5511999999999"
            aria-label="Telefone"
            className="bg-red-500 hover:bg-red-600 text-white p-4 md:p-5 rounded-full shadow"
          >
            <Phone size={20} />
          </Link>
        </>
      )}
      <button
        className={`bg-palette-graphite shadow-sm rounded-full hover:shadow-xl transition-shadow duration-200 ${
          isMobile
            ? "p-4" // Mobile: padding menor
            : "p-4" // Desktop: padding original
        }`}
        onClick={() => setOpen(!open)}
        aria-label={open ? "Fechar menu" : "Abrir menu"}
      >
        {open ? (
          <X
            className="text-palette-mist size-5 md:size-7"
          />
        ) : (
          <ChatTextIcon
            className="text-palette-mist size-5 md:size-7"
          />
        )}
      </button>
    </div>
  );
};
