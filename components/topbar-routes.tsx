"use client"

import { usePathname } from "next/navigation"
import { Button } from "./ui/button"
import { LogOut } from "lucide-react"
import Link from "next/link"

const TopbarRoutes = () => {
  const pathname = usePathname()
  
  const isInstructorPage = pathname?.startsWith("/instructor")
  const isChapterPage = pathname?.includes("/chapter")

    return ( 
      <>
        <div className="flex gap-x-2 ml-auto">
          {isInstructorPage || isChapterPage ? (
            <Link href="/">
             <Button size="sm" variant="ghost" className="text-slate-400">
                <LogOut className="h-4 w-4 mr-2"/>
                Exit
             </Button>
             </Link>
          ) : (
            <Link href="/instructor/learning-paths">
              <Button size="sm" variant="ghost" className="text-slate-400">
                 Instructor mode
              </Button>
            </Link>
          )}
        </div>
      </>
    )
}
 
export default TopbarRoutes 