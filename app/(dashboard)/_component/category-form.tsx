"use client"

import { Button } from "@/components/ui/button";
import { Pencil } from "lucide-react";

const CategoryForm = () => {
    return (  
        <>
            <div className="mt-6 border bg-slate-600 text-white rounded-md p-4">
                <div className="font-medium flex-col items-center 
            justify-between space-y-2 ">
                     Description
                    <Button variant="ghost">
                        <Pencil className="h-4 w-4 mr-2" />
                        Edit description
                    </Button>
                    <div className="">
                      
                    </div>
                    <Button>
                        Save
                    </Button>
                </div>
            </div>
        </>
    );
}
 
export default CategoryForm;