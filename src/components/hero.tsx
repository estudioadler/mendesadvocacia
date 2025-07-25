import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";

export const Hero = () => {
  return (
    <section className="flex flex-col gap-10 mb-20 md:mb-32">

      {/* imagem */}
      <div className="w-full h-auto px-1.5">
        <video
          className="w-full h-full lg:h-[450px] object-cover object-right-top rounded-3xl"
          src="/hero-video1.mp4"
          width={1400}
          height={500}
          autoPlay
          loop
          muted

        />
      </div>

      {/* Texto principal */}
      <div className="w-full flex-col md:flex justify-between container mx-auto">
        <h1 className="text-3xl w-full max-w-md">
          Advocacia Trabalhista descomplicada e com eficiência.
        </h1>
        <div className="flex flex-col md:flex-row gap-2 mt-6">
          <Link href="#">
            <Button size={"lg"} className="px-4 rounded-full text-palette-mist">
              Fale com um especialista
            </Button>
          </Link>
         
        </div>
      </div>
    </section>
  );
};
