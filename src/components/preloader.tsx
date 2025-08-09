"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simula o carregamento por 3 segundos
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    // Simula o progresso de carregamento
    let progressValue = 0;
    const progressInterval = setInterval(() => {
      progressValue += 2;
      setProgress(Math.min(progressValue, 100));
    }, 60);

    return () => {
      clearTimeout(timer);
      clearInterval(progressInterval);
    };
  }, []);

  const containerVariants = {
    initial: { y: 0 },
    exit: {
      y: "-100%",
      transition: {
        duration: 0.8,
        ease: [0.645, 0.045, 0.355, 1],
      },
    },
  };

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-50 bg-palette-black flex items-center justify-center"
          variants={containerVariants}
          initial="initial"
          exit="exit"
        >
          <div className="text-center">
            {/* Logotipo com efeito de preenchimento */}
            <div className="relative w-6 h-7 mx-auto">
              {/* Div preta de fundo */}
              <div className="absolute inset-0 bg-palette-black overflow-hidden">
                {/* Barra branca que sobe */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 bg-palette-stone"
                  initial={{ height: 0 }}
                  animate={{ height: `${progress}%` }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />
              </div>

              {/* Logotipo por cima */}
              <motion.div
                className="relative flex items-center justify-center"
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <Image
                  src="/logo.svg"
                  alt="Logo Mendes Advocacia"
                  width={28}
                  height={28}
                  className="w-7 h-7"
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
