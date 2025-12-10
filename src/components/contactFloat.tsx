
import Link from "next/link";
import { MessageCircle } from "lucide-react";

export default function ContactFloat() {
  return (
    <Link
      href="https://wa.me/5599999999999" // coloque seu número aqui
      target="_blank"
      className="
        fixed bottom-6 right-6
        z-30
        bg-white text-palette-deepGreen
        px-4 py-3
        rounded-full shadow-md
        flex items-center gap-2
        font-medium
         transition
      "
    >
      <MessageCircle size={20} />
      Fale Conosco
    </Link>
  );
};
