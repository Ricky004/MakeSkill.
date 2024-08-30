"use client"

import { cn } from "@/lib/utils"
import { LucideIcon } from "lucide-react"
import { usePathname, useRouter } from "next/navigation"

interface SidebarItemProps {
  icon: LucideIcon
  label: string
  href: string
}

export function SidebarItem({ icon: Icon, label, href }: SidebarItemProps) {
  const pathname = usePathname()
  const router = useRouter()

  const isActive = (
    (pathname === "/" && href === "/") || pathname === href ||
    pathname?.startsWith(`${href}/`)
  )

  const onclick = () => {
    router.push(href)
  }

  return (
    <>
      <div>
        <button
          onClick={onclick}
          type="button"
          className={cn(
            "text-slate-400 flex items-center rounded-xl whitespace-nowrap gap-2 mt-2 pl-2 text-sm font-[700] w-full transition-all hover:text-slate-400 hover:bg-slate-300/20",
            isActive && "text-white bg-sky-200/20 hover:bg-violet-200/20 hover:text-white"
          )}
        >
          <div className="flex items-center gap-x-2 py-4">
            <Icon
              size={22}
              className={cn(
                "",
                isActive && "text-white"
              )}
            />
            {label}
          </div>
        </button>
      </div>
    </>
  )
}
