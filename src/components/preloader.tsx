"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Remove o preload após 5 segundos
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const containerVariants = {
    initial: { opacity: 1 },
    exit: {
      opacity: 0,
      transition: {
        y: "-100%", duration: 0.8, ease: "easeInOut",
      },
    },
  };

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-50 bg-palette-deepGreen flex items-center justify-center"
          variants={containerVariants}
          initial="initial"
          exit="exit"
        >
          <div className="text-center">
            {/* Logotipo centralizado */}
            <div className="relative w-7 h-7 mx-auto">
              <Image
                src="/logo.svg"
                alt="Logo Mendes Advocacia"
                width={28}
                height={28}
                className="w-7 h-7"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}