"use client"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Pencil } from "lucide-react";

const TitleForm = () => {
    return (
        <>
            <div className="mt-6 border bg-slate-600 text-white rounded-md p-4">
                <div className="font-medium flex-col items-center 
            justify-between space-y-2 ">
                    Learning path title
                    <Button variant="ghost">
                        <Pencil className="h-4 w-4 mr-2" />
                        Edit title
                    </Button>
                    <div className="">
                        <Input placeholder="e.g. 'Math need for machine learning'" />
                    </div>
                    <Button>
                        Save
                    </Button>
                </div>
            </div>
        </>
    );
}

export default TitleForm;