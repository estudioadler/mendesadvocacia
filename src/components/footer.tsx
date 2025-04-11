

import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer>
      <div className="max-w-screen-2xl px-4 py-16 container-x">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <Link href={"/"}>
              <Image src="/logo.svg" alt="logo" width={128} height={128} />
            </Link>
            <p className="max-w-xs mt-4 text-sm text-neutral-600">
              Defesa dos seus direitos trabalhistas com excelência e dedicação.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:col-span-2 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <p className="font-medium">Company</p>
              <nav className="flex flex-col mt-4 space-y-2 text-sm text-neutral-500">
                <Link href={"#"}  className="hover:opacity-75"> About </Link>
                <Link href={"#"}  className="hover:opacity-75"> Meet the Team </Link>
                <Link href={"#"}  className="hover:opacity-75"> History </Link>
                <Link href={"#"}  className="hover:opacity-75"> Careers </Link>
              </nav>
            </div>
            <div>
              <p className="font-medium">Services</p>
              <nav className="flex flex-col mt-4 space-y-2 text-sm text-neutral-500">
                <Link href={"#"} className="hover:opacity-75"> 1on1 Coaching </Link>
                <Link href={"#"}  className="hover:opacity-75"> Company Review </Link>
                <Link href={"#"}  className="hover:opacity-75"> Accounts Review </Link>
                <Link href={"#"}  className="hover:opacity-75"> HR Consulting </Link>
                <Link href={"#"}  className="hover:opacity-75"> SEO Optimisation </Link>
              </nav>
            </div>
            <div>
              <p className="font-medium">Helpful Links</p>
              <nav className="flex flex-col mt-4 space-y-2 text-sm text-neutral-500">
                <Link href={"#"}  className="hover:opacity-75"> Contact </Link>
                <Link href={"#"}  className="hover:opacity-75"> FAQs </Link>
                <Link href={"#"}  className="hover:opacity-75"> Live Chat </Link>
              </nav>
            </div>
            <div>
              <p className="font-medium">Legal</p>
              <nav className="flex flex-col mt-4 space-y-2 text-sm text-neutral-500">
                <Link href={"#"}  className="hover:opacity-75"> Privacy Policy </Link>
                <Link href={"#"}  className="hover:opacity-75"> Terms &amp; Conditions </Link>
                <Link href={"#"}  className="hover:opacity-75"> Returns Policy </Link>
                <Link href={"#"}  className="hover:opacity-75"> Accessibility </Link>
              </nav>
            </div>
          </div>
        </div>
        <p className="mt-8 text-sm text-neutral-800">© 2024 <Link href="https://linkedin.com/in/estudioadler" className="underline">@estudioadler</Link> All rights reserved</p>
      </div>
    </footer>
  );
};
