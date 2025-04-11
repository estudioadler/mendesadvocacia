import React from "react";

interface TitleSectionProps {
  title: string;
  tagTitle: string;
  className?: string;
}
export const TitleSection = ({
  title,
  tagTitle,
}: TitleSectionProps) => {
  return (
    <div>
      <div className="flex flex-col justify-between gap-1 md:gap-2">
        <span className="text-xs sm:text-sm font-bold uppercase text-palette-primary">{tagTitle}</span>
        <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl">
          {title}
        </h2>
      </div>
    </div>
  );
};
