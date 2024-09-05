"use client"

import { AlignJustify, ChevronDown, LayoutGrid } from "lucide-react";

const SortList = () => {
    return (  
        <>
          <div className="flex flex-row items-center">
            <p className="pr-4 text-slate-700">Sort By:</p>
              <div className="flex flex-row gap-2">
                <button className="bg-slate-200 border-2 flex gap-2 items-center text-xs p-1 text-slate-800">
                    default
                    <ChevronDown className="size-3" />
                </button>
                <button className="bg-slate-200 border border-orange-400 flex gap-2 items-center text-xs p-1 ">
                    <LayoutGrid className="size-4 text-orange-400" />
                </button>
                <button className="bg-slate-200 border flex gap-2 items-center text-xs p-1 ">
                    <AlignJustify className="size-4 text-slate-500" />
                </button>
              </div>
          </div>
        </>        
    );
}
 
export default SortList;
