import Link from "next/link";
import Image from "next/image";

const footerLinks = {
  navegação: [
    { name: "Sobre", href: "/#sobre" },
    { name: "Serviços", href: "/#servicos" },
    { name: "Benefícios", href: "/#beneficios" },
    { name: "Depoimentos", href: "/#depoimentos" },
  ],
  suporte: [
    { name: "Contato", href: "/#contato" },
    { name: "FAQs", href: "/#faq" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms & Conditions", href: "/terms-conditions" },
  ],
};

const socialLinks = [
  {
    name: "Instagram",
    href: "https://instagram.com/estudioadler",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/estudioadler",
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/5599999999999",
  },
  {
    name: "Facebook",
    href: "https://facebook.com/estudioadler",
  },
  { name: "Twitter", href: "https://twitter.com/estudioadler" },
];

export const Footer = () => {
  return (
    <div className="w-full bg-[var(--background-color)]">
      <footer className="container mx-auto pt-20 pb-8 px-6">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            {/* Logo */}
            <Link
              href="#"
              className="flex items-center -space-x-2 text-secondary"
            >
              <Image
                src="/logo.svg"
                alt="Logo Mendes Advocacia"
                width={28}
                height={28}
              />
              <div className="flex flex-col items-end -space-y-2">
                <span>mendes</span>
                <span>advocacia</span>
              </div>
            </Link>
            <p className="max-w-xs mt-4 text-secondary text-lg">
              Defesa dos seus direitos trabalhistas com excelência e dedicação.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:col-span-2 sm:grid-cols-2 lg:grid-cols-4">
            {Object.entries(footerLinks).map(([section, links]) => (
              <div key={section}>
                <p className="font-medium text-secondary capitalize">
                  {section}
                </p>
                <nav className="flex flex-col mt-4 space-y-2 text-secondary">
                  {links.map(({ name, href }) => (
                    <Link key={name} href={href} className="hover:opacity-75">
                      {name}
                    </Link>
                  ))}
                </nav>
              </div>
            ))}
            
            {/* Redes Sociais */}
            <div>
              <p className="font-medium text-secondary">Redes Sociais</p>
              <nav className="flex flex-col mt-4 space-y-2 text-secondary">
                {socialLinks.map(({ name, href }) => (
                  <Link
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-75"
                  >
                    {name}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>

        <p className="mt-12 text-center text-secondary">
          © 2026{" "}
          <Link
            href="https://linkedin.com/in/estudioadler"
            className="underline"
            target="_blank"
          >
            @estudioadler
          </Link>{" "}
          Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
};