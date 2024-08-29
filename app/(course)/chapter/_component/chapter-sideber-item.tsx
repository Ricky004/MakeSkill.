"use client"

import { cn } from "@/lib/utils"
import { LucideIcon } from "lucide-react"
import { usePathname, useRouter } from "next/navigation"

interface ChapterSidebarItemProps {
    icon: LucideIcon
    label: string
    href: string
}

export const ChapterSidebarItem = ({ icon: Icon, label, href }: ChapterSidebarItemProps) => {
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
                        "flex items-center pr-28 whitespace-nowrap gap-2 text-slate-500 text-sm font-[500] pl-6 transition-all hover:text-slate-600 hover:bg-slate-300/20",
                        isActive && "text-sky-700 bg-sky-200/20 hover:bg-sky-200/20 hover:text-sky-700"
                    )}
                >
                    <div className="flex items-center gap-x-2 py-4">
                        <Icon
                            size={22}
                            className={cn(
                                "text-slate-500",
                                isActive && "text-sky-700"
                            )}
                        />
                        {label}
                    </div>
                </button>

            </div>
        </>
    );
}
