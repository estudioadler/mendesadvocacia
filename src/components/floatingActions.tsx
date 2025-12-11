"use client";

import { useState, useEffect } from "react";
import ContactFloat from "./contactFloat";
import { ScrollToTopButton } from "./scrollToTopButton";

export default function FloatingActions() {
  const [scrollVisible, setScrollVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="
        fixed bottom-6 right-6
        flex items-end gap-2
        z-50
        transition-all duration-300
      "
    >
      <ContactFloat shift={scrollVisible} />
      <ScrollToTopButton forceVisible={scrollVisible} />
    </div>
  );
}
