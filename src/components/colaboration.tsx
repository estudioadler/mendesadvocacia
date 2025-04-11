import { TitleSection } from "./titleSection"
import { Button } from "./ui/button"

export const Colaboration = () => {
  return (
      <section>
        <TitleSection title="Schedule a free case evaluation" tagTitle="Get in touch">
          <div className="flex flex-col gap-4">
            <p className="text-lg text-neutral-500">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet
              facere sunt eos sint sequi, velit recusandae tempore, accusamus
              exercitationem esse eligendi eaque.
            </p>
            <Button size={"lg"} className="w-fit rounded-none">Lets Talk - Get in touch</Button>
          </div>
        </TitleSection>
      </section>
  )
}
