"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "./ui/button"

export const Hero = () => {
  const [offset, setOffset] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const rafRef = useRef<number>()
  const [isMounted, setIsMounted] = useState(false)

  // Throttled scroll handler com useCallback para evitar re-criações
  const handleScroll = useCallback(() => {
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current)
    }

    rafRef.current = requestAnimationFrame(() => {
      setOffset(window.scrollY)
    })
  }, [])

  // Debounced resize handler
  const handleResize = useCallback(() => {
    const mobile = window.innerWidth < 1024
    if (mobile !== isMobile) {
      setIsMobile(mobile)
    }
  }, [isMobile])

  useEffect(() => {
    // Marcar como montado e definir isMobile
    setIsMounted(true)
    setIsMobile(window.innerWidth < 1024)

    // Passive listeners para melhor performance
    window.addEventListener("scroll", handleScroll, { passive: true })
    window.addEventListener("resize", handleResize, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleResize)
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }
    }
  }, [handleScroll, handleResize])

  // Memoizar URLs dos vídeos
  // Memoizar estilos de transformação para evitar recálculos

  // Otimizar carregamento do vídeo
  useEffect(() => {
    const video = videoRef.current
    if (video) {
      // Preload apenas metadata inicialmente
      video.preload = "metadata"

      // Carregar vídeo completo quando estiver próximo da viewport
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              video.preload = "auto"
              observer.unobserve(video)
            }
          })
        },
        { rootMargin: "100px" },
      )

      observer.observe(video)

      return () => observer.disconnect()
    }
  }, [])

  return (
    <section className="flex flex-col gap-10 mb-20 md:mb-32 px-1.5">
      {/* Container do vídeo e imagem LCP */}
      <div className="relative w-full h-[450px] overflow-hidden rounded-3xl">
        {/* Imagem do poster com prioridade (LCP real) */}
        <Image
          src={"/hero-poster.jpg"}
          alt="Imagem de fundo da seção principal"
          fill
          priority
          fetchPriority="high"
          className="object-cover object-center md:object-right-top"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
        />

        {/* Fallback visual enquanto não hidrata (opcional) */}
        {!isMounted && (
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 animate-pulse" />
        )}

        {/* Vídeo Desktop */}
        <video
          ref={videoRef}
          className="absolute top-0 left-0 w-full h-full object-cover object-center md:object-right-top hidden lg:block"
          src="/hero-video-desktop.mp4"
          width={1400}
          height={500}
          autoPlay
          loop
          muted
          playsInline
          poster="/hero-poster.jpg"
          style={{
            transform: `translateY(${offset * 0.4}px) scale(1.2)`,
            willChange: "transform",
          }}
        />

        {/* Vídeo Mobile */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover object-center block lg:hidden"
          src="/hero-video-mobile.mp4"
          width={1400}
          height={500}
          autoPlay
          loop
          muted
          playsInline
          poster="/hero-poster-mobile.jpg"
          style={{
            transform: "scale(1.1)",
            willChange: "transform",
          }}
        />
      </div>

      {/* Texto principal */}
      <div className="w-full flex-col md:flex justify-between container mx-auto px-3.5 md:px-8">
        <h1 className="text-3xl md:text-4xl w-full max-w-md">Advocacia Trabalhista descomplicada e eficiente.</h1>

        <div className="flex flex-col md:flex-row gap-2 mt-6">
          <Link href="#">
            <Button size="lg" className="px-6 rounded-full">
              Fale com um especialista
            </Button>
          </Link>

          <Link href="#sobre">
            <Button
              variant="outline"
              size="lg"
              className="px-6 rounded-full border-palette-black/20 border bg-transparent"
            >
              Saiba mais
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
