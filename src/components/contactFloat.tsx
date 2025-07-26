"use client";
import { useState } from "react";
import { MessageCircle, Phone, Mail, X, Wheat, } from "lucide-react";

export const ContactFloat = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 md:bottom-8 right-6 md:right-8 z-50 flex flex-col items-end gap-2">
      {open && (
        <>
          <a
            href="https://wa.me/seunumerowhatsapp"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow"
          >
            <Wheat size={20} />
          </a>
          <a
            href="mailto:seuemail@exemplo.com"
            className="bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-full shadow"
          >
            <Mail size={20} />
          </a>
          <a
            href="tel:+5511999999999"
            className="bg-red-500 hover:bg-red-600 text-white p-4 rounded-full shadow"
          >
            <Phone size={20} />
          </a>
        </>
      )}
      <button
        onClick={() => setOpen(!open)}
        className="bg-palette-graphite hover:bg-primary/90 text-white p-4 rounded-full shadow-lg transition-all"
      >
        {open ? <X size={24} /> : <MessageCircle size={24} />}
      </button>
    </div>
  );
};
