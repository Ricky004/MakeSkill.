"use client"

import { Button } from "@/components/ui/button"
import {
    FcEngineering,
    FcFilmReel,
    FcMultipleDevices,
    FcOldTimeCamera,
    FcMusic,
    FcSalesPerformance,
    FcSportsMode
  } from "react-icons/fc"

const Categories = () => {
    return (  
        <>
          <div className="flex flex-row pl-2 gap-2 overflow-scroll">
            <Button variant="outline" className="space-x-1 rounded-2xl">
              All
            </Button>
             <Button variant="outline" className="space-x-1 rounded-2xl">
               <FcEngineering />
               <p>Engineering</p>
             </Button>
             <Button variant="outline" className="space-x-1 rounded-2xl">
               <FcFilmReel />
               <p>Video Editing</p>
             </Button>
             <Button variant="outline" className="space-x-1 rounded-2xl">
               <FcMultipleDevices />
               <p>Programing</p>
             </Button>
             <Button variant="outline" className="space-x-1 rounded-2xl">
               <FcOldTimeCamera />
               <p>Photography</p>
             </Button>
             <Button variant="outline" className="space-x-1 rounded-2xl">
               <FcMusic />
               <p>Music</p>
             </Button>
             <Button variant="outline" className="space-x-1 rounded-2xl">
               <FcSalesPerformance />
               <p>Statistics</p>
             </Button>
             <Button variant="outline" className="space-x-1 rounded-2xl">
               <FcSportsMode />
               <p>Sports</p>
             </Button>
          </div>
        </>
    )
    
}
 
export default Categories
