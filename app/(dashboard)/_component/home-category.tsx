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
          <Button variant="outline" className="flex flex-row py-7 gap-x-3 items-center justify-center bg-white rounded-xl">
             <div className="bg-violet-200 text-violet-800 p-1.5 rounded-full">
              <Bell />
             </div>
            <div className="flex flex-col">
               <p className="text-slate-500 text-sm">{watch}</p>
               <p className="font-semibold text-sm">{subject}</p>
            </div>
            <EllipsisVertical className="text-slate-600"/>
          </Button>
        </>
    );
}
 
export default HomeCategory;