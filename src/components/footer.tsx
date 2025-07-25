import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer>
      <div className="w-full container mx-auto py-20">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <Link href="#inicio" className="text-palette-black flex items-center gap-2">
        <Image src="/logo.svg" alt="Logo Mendes Advocacia" width={24} height={24} />
        <div className="flex flex-col -space-y-2">
          <span>mendes</span>
          <span>advocacia</span>
        </div>
        
      </Link>
            <p className="max-w-xs mt-4 text-sm text-neutral-600">
              Defesa dos seus direitos trabalhistas com excelência e dedicação.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:col-span-2 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <p className="font-medium">Navegação</p>
              <nav className="flex flex-col mt-4 space-y-2 text-sm text-neutral-500">
                <Link href="/#sobre" className="hover:opacity-75">
                  Sobre
                </Link>
                <Link href="/#servicos" className="hover:opacity-75">
                  Serviços
                </Link>
                <Link href="/#beneficios" className="hover:opacity-75">
                  Benefícios
                </Link>
                <Link href="/#depoimentos" className="hover:opacity-75">
                  Depoimentos
                </Link>
              </nav>
            </div>
            <div>
              <p className="font-medium">Suporte</p>
              <nav className="flex flex-col mt-4 space-y-2 text-sm text-neutral-500">
                <Link href="/#contato" className="hover:opacity-75">
                  Contato
                </Link>
                <Link href="/#faq" className="hover:opacity-75">
                  FAQs
                </Link>
              </nav>
            </div>
            <div>
              <p className="font-medium">Legal</p>
              <nav className="flex flex-col mt-4 space-y-2 text-sm text-neutral-500">
                <Link href="/privacy-policy" className="hover:opacity-75">
                  Privacy Policy
                </Link>
                <Link href="/terms-conditions" className="hover:opacity-75">
                  Terms &amp; Conditions
                </Link>
              </nav>
            </div>
          </div>
        </div>
        <p className="mt-8 text-sm text-neutral-800">
          © 2024{" "}
          <Link
            href="https://linkedin.com/in/estudioadler"
            className="underline"
          >
            @devadler
          </Link>{" "}
          Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};