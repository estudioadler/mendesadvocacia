import React from "react";
import { TitleSection } from "./titleSection";
import { MonitorCheck } from "lucide-react";
import { CardAreas } from "./cardAreas";

export const LegalDisciplines = () => {
  const listAreas = [
    {
      icon: <MonitorCheck className="size-16 text-neutral-500" strokeWidth={0.7} />,
      title: "Financial capital and Business",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, natus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, natus.",
    },
    {
      icon: <MonitorCheck className="size-16 text-neutral-500" strokeWidth={0.7} />,
      title: "Financial capital and Business",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, natus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, natus.",
    },
    {
      icon: <MonitorCheck className="size-16 text-neutral-500" strokeWidth={0.7} />,
      title: "Financial capital and Business",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, natus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, natus.",
    },
  ];
  return (
    <section>
      <TitleSection title="Schedule a free case" tagTitle="Get in touch">
        <div className="flex flex-col gap-4">
          <p className="text-lg text-neutral-500">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet
            facere sunt eos sint sequi, velit recusandae tempore, accusamus
            exercitationem esse eligendi eaque.
          </p>
        </div>
      </TitleSection>
      <div className="grid grid-cols-3 gap-4 container-x">
        {listAreas.map((area, index) => (
          <CardAreas
            key={index}
            title={area.title}
            description={area.description}
          />
        ))}
      </div>
    </section>
  );
};
