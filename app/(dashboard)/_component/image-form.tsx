"use client"

import { Button } from "@/components/ui/button";
import { PlusCircle, ImageIcon } from "lucide-react";

const ImageForm = () => {
    return (
        <>
            <div className="mt-6 border bg-slate-600 text-white rounded-md p-4">
                <div className="font-medium flex-col items-center 
                     justify-between space-y-2 ">
                    Thumbnail
                    <Button variant="ghost">
                        <PlusCircle className="h-4 w-4 mr-2" />
                        Add an image
                    </Button>
                    <div className="flex items-center justify-center 
                      h-60 bg-slate-200 rounded-md">
                        <ImageIcon className="h-10 w-10 text-slate-500" />
                    </div>
                    <Button>
                        Uplaod
                    </Button>
                </div>
            </div>
        </>
    );
}

export default ImageForm;