"use client";

import { ArrowLineUpIcon } from "@phosphor-icons/react/dist/ssr";
import { useState, useEffect } from "react";

export function ScrollToTopButton({ forceVisible = false }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(forceVisible);
  }, [forceVisible]);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="
        p-4 rounded-full bg-white text-palette-deepGreen shadow-md
        flex items-center justify-center
        animate-fadeInScale
        transition-all duration-300
      "
    >
      <ArrowLineUpIcon size={20} />
    </button>
  );
}
