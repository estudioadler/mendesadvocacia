import { Mail, Phone } from "lucide-react"

export function TopBar() {
  return (
    <div className="w-full bg-palette-secondary py-2">
      <div className="container-x mx-auto flex justify-end items-center gap-4 text-xs">
        <div>
          <span>(11) 99999-9999</span>
        </div>
        <div>
          <span>mendesadvocacia@gmail.com</span>
        </div>
      </div>
    </div>
  )
}
