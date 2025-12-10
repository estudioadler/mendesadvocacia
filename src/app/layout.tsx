import type { Metadata } from "next";
import localFont from "next/font/local";
import {Libre_Baskerville} from "next/font/google";
import "./globals.css";

const libreBaskerville = Libre_Baskerville({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-libre-baskerville",
  display: "swap",
});

const clashGrotesk = localFont({
  src: [
    {
      path: './fonts/ClashGrotesk-Extralight.woff2',
      weight: '200',
      style: 'normal',
    },
    {
      path: './fonts/ClashGrotesk-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: './fonts/ClashGrotesk-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/ClashGrotesk-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/ClashGrotesk-Semibold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: './fonts/ClashGrotesk-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-clash-grotesk',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Mendes Advocacia - Especialistas em Direito do Trabalho",
  description: "Defesa dos seus direitos trabalhistas com excelência e dedicação.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth overflow-scroll antialiased bg-palette-deepGreen bg-noise bg-repeat">
      <body className={`${clashGrotesk.className} ${libreBaskerville.variable}`}>{children}</body>
    </html>
  );
}