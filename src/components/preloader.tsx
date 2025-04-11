"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

interface PreloaderProps {
  duration?: number
  logoSrc?: string
  logoWidth?: number
  logoHeight?: number
  backgroundColor?: string
}

export default function Preloader({
  duration = 2000,
  logoSrc = "/logo.svg",
  logoWidth = 128,
  logoHeight = 80,
  backgroundColor = "palette-secondary",
}: PreloaderProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [animationStarted, setAnimationStarted] = useState(false)

  useEffect(() => {
    // Start the animation after the duration
    const animationTimer = setTimeout(() => {
      setAnimationStarted(true)
    }, duration)

    // Remove the preloader after animation completes
    const loadingTimer = setTimeout(() => {
      setIsLoading(false)
    }, duration + 200) // 1000ms for the animation to complete

    return () => {
      clearTimeout(animationTimer)
      clearTimeout(loadingTimer)
    }
  }, [duration])

  return (
    <AnimatePresence>
      {isLoading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden">
          {/* Static logo that stays in place */}
          <div className="fixed z-[60] flex items-center justify-center">
            <Image
              src={logoSrc || "/placeholder.svg"}
              alt="Logo"
              width={logoWidth}
              height={logoHeight}
              className="object-contain"
              priority
            />
          </div>

          {/* Animated background that slides up */}
          <motion.div
            className={`absolute inset-0 z-[55] bg-${backgroundColor}`}
            initial={{ y: 0 }}
            animate={animationStarted ? { y: "-100%" } : { y: 0 }}
            transition={{
              duration: 0.5,    
              ease: "easeInOut",
            }}
          />
        </div>
      )}
    </AnimatePresence>
  )
}
