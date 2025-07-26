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
  {    name: "Twitter",
    href: "https://twitter.com/estudioadler",
  }
];

export const Footer = () => {
  return (
    <footer>
      <div className="w-full container mx-auto pt-20 pb-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <Link
              href="#inicio"
              className="text-palette-black flex items-center gap-2"
            >
              <Image
                src="/logo.svg"
                alt="Logo Mendes Advocacia"
                width={24}
                height={24}
              />
              <div className="flex flex-col -space-y-2">
                <span>mendes</span>
                <span>advocacia</span>
              </div>
            </Link>
            <p className="max-w-xs mt-4 text-palette-stone text-lg">
              Defesa dos seus direitos trabalhistas com excelência e dedicação.
            </p>

            <div className="flex flex-col gap-2 mt-6 text-neutral-600">
              <p className="font-medium">Redes Sociais</p>
              {socialLinks.map(({ name, href }) => (
                <Link
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {name}
                </Link>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:col-span-2 sm:grid-cols-2 lg:grid-cols-4">
            {Object.entries(footerLinks).map(([section, links]) => (
              <div key={section}>
                <p className="font-medium capitalize">{section}</p>
                <nav className="flex flex-col mt-4 space-y-2 text-neutral-500">
                  {links.map(({ name, href }) => (
                    <Link key={name} href={href} className="hover:opacity-75">
                      {name}
                    </Link>
                  ))}
                </nav>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-8 text-neutral-800">
          © 2024{" "}
          <Link
            href="https://linkedin.com/in/estudioadler"
            className="underline"
            target="_blank"
          >
            @estudioadler
          </Link>{" "}
          Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};
