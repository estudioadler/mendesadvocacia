import Link from "next/link"

export const Hero = () => {
  return (
    <section className="flex flex-col items-end md:flex-row gap-10 pb-24 pt-48 bg-palette-white pl-6 md:pl-16">
      <div className="md:w-1/2 w-full">
        <h1 className="md:text-4xl text-3xl">
          Defesa dos seus <br /> direitos trabalhistas <br /> com excelência e dedicação.
        </h1>
        <p className="mt-6 text-muted-foreground">
          Nossa missão é lutar ao lado de cada trabalhador, assegurando <br />
          seus direitos com justiça, dignidade e respeito.
        </p>
        <div className="flex gap-4 mt-6">
          <Link href="#">
            <button className="px-6 py-3 text-sm font-semibold text-palette-white bg-palette-primary hover:bg-palette-primary/90 transition-colors">
              Entre em contato
            </button>
          </Link>
        </div>
      </div>
      <div className="md:w-1/2 w-full">
        <div className="relative w-full h-0 pb-[56.25%] overflow-hidden">
          <video
            className="absolute top-0 left-0 w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="none"
            aria-label="Vídeo institucional"
          >
            <source src="/hero-video.mp4" type="video/mp4" />
            Seu navegador não suporta a tag de vídeo.
          </video>
        </div>
      </div>
    </section>
  )
}
