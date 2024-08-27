"use client"

import { SidebarRoutes } from "./sidebar-routes"

export function Sidebar() {

  return (
    <>
      <div className="h-full flex flex-col border-r shadow-sm 
      overflow-y-auto bg-white">
        <div className="flex flex-col w-full">
         <SidebarRoutes />
        </div>
      </div>
    </>
  )
}


