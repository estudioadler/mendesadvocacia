import type React from "react"

interface TitleSectionProps {
  title: string
  tagTitle: string
  alignment?: "left" | "center" | "right"
  className?: string
  children?: React.ReactNode
}

export const TitleSection = ({ title, tagTitle, alignment = "left", className, children }: TitleSectionProps) => {
  const getAlignmentClasses = () => {
    switch (alignment) {
      case "center":
        return "items-center text-center"
      case "right":
        return "items-end text-right"
      default:
        return "items-start text-left"
    }
  }

  return (
    <div className={`flex flex-col justify-between gap-2 md:gap-2 ${getAlignmentClasses()}`}>
      <span className={`text-sm font-medium uppercase text-palette-stone tracking-wide ${className}`}>
        {tagTitle}
      </span>
      <h2 className={`text-2xl sm:text-3xl md:text-3xl tracking-wide w-full max-w-xs ${className}`}>{title}</h2>
      {children && <div className="mt-2">{children}</div>}
    </div>
  )
}
