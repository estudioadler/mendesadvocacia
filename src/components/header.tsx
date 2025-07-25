"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false)
  const menuRef = React.useRef<HTMLDivElement>(null)
  const buttonRef = React.useRef<HTMLButtonElement>(null)

  // Efeito para detectar o scroll da página
  React.useEffect(() => {
    const handleScroll = () => {
      // Verifica se a página foi rolada mais que 10px
      const isScrolled = window.scrollY > 10
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    // Adiciona o evento de scroll
    window.addEventListener("scroll", handleScroll)

    // Remove o evento quando o componente é desmontado
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [scrolled])

  // Efeito para fechar o menu quando clicar fora dele
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isMenuOpen])

  // Títulos e IDs correspondentes
  const listNav = [
    { name: "Sobre", id: "sobre" },
    { name: "Serviços", id: "servicos" },
    { name: "Benéficios", id: "beneficios" },
    { name: "Depoimentos", id: "depoimentos" },
    { name: "Dúvidas Frequentes", id: "faq" },
    { name: "Contato", id: "contato" },
  ]

  return (
    <header
      className="z-50 w-full flex items-center justify-between py-6 container mx-auto" 
    >
      { /* Logo */}
      <Link href="#inicio" className="text-palette-black flex items-center gap-2">
        <Image src="/logo.svg" alt="Logo Mendes Advocacia" width={24} height={24} />
        <div className="flex flex-col -space-y-2">
          <span>mendes</span>
          <span>advocacia</span>
        </div>
        
      </Link>

      <nav className="hidden lg:flex">
        <ul className="flex gap-6">
          {listNav.map((item) => (
            <li key={item.id}>
              <Link href={`#${item.id}`}>
                <button
                  role="link"
                  className="text-sm text-palette-stone hover:text-palette-black transition-colors duration-200"
                >
                  {item.name}
                </button>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
