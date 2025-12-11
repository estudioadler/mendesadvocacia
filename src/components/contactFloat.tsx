import Link from "next/link";
import { ChatTeardropIcon } from "@phosphor-icons/react/dist/ssr";

export default function ContactFloat({ shift = false }) {
  return (
    <Link
      href="https://wa.me/5599999999999"
      target="_blank"
      className={`
        bg-white text-palette-deepGreen
        p-4
        rounded-full shadow-md
        flex items-center gap-2 font-medium
        transition-transform duration-300 ease-out
        hover:scale-105
        ${shift ? "-translate-x-1" : "translate-x-0"}
      `}
    >
      <ChatTeardropIcon size={20} />
      Fale Conosco
    </Link>
  );
}