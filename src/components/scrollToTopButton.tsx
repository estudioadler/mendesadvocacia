
"use client";
import { ArrowUp01, ArrowUpIcon } from "lucide-react";
import { useState, useEffect } from "react";

interface ScrollToTopButtonProps {
  // distância de scroll para exibir o botão (em px)
  showAfter?: number;
  // estilo adicional
  className?: string;
}

export function ScrollToTopButton({
  showAfter = 300,
  className = "",
}: ScrollToTopButtonProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      setVisible(scrollY > showAfter);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // checar ao montar
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [showAfter]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!visible) {
    return null;
  }

  return (
    <button
      onClick={scrollToTop}
      className={`fixed flex items-center justify-center bottom-24 right-8 size-12 rounded-full bg-white text-palette-deepGreen shadow-md focus:outline-none ${className}`}
      aria-label="Scroll to top"
    >
      <ArrowUpIcon size={20} />
    </button>
  );
}
