"use client"

import { SidebarRoutes } from "./sidebar-routes"

export function Sidebar() {

  return (
    <>
      <div className="h-full flex flex-col border-r shadow-sm 
      overflow-y-auto bg-white">
        <div className="m-6 ">
          <h2 className="text-violet-700 font-extrabold text-2xl">LeanSkills</h2>
        </div>
        <div className="flex flex-col w-full overflow-hidden">
         <SidebarRoutes />
        </div>
      </div>
    </>
  )
}


