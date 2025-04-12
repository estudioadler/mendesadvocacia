import React from "react";

interface TitleSectionProps {
  title: string;
  tagTitle: string;
  className?: string;
  children?: React.ReactNode;
}
export const TitleSection = ({
  title,
  tagTitle,
  className,
  children,
}: TitleSectionProps) => {
  return (
    <div>
      <div className="flex flex-col justify-between gap-2 md:gap-2">
        <span className={`text-xs sm:text-sm font-extrabold uppercase text-palette-primary tracking-wide ${className}`}>{tagTitle}</span>
        <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl tracking-tight font-medium ">
          {title}
        </h2>
      </div>
    </div>
  );
};
