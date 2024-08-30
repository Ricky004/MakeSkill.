"use client"

import { Button } from "@/components/ui/button";
import { Bell, EllipsisVertical } from "lucide-react";

interface HomeCategoryProps {
    watch: string
    subject: string
}

const HomeCategory = ({watch, subject}: HomeCategoryProps) => {
    return (  
        <>
          <Button variant="outline" className="flex flex-row py-6 gap-x-3 items-center justify-center bg-white rounded-xl">
             <div className="bg-violet-200 text-violet-800 p-1 rounded-full">
              <Bell className="size-5"/>
             </div>
            <div className="flex flex-col">
               <p className="text-slate-500 text-xs">{watch}</p>
               <p className="text-sm">{subject}</p>
            </div>
            <EllipsisVertical className="text-slate-600"/>
          </Button>
        </>
    );
}
 
export default HomeCategory;