"use client"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";


const CreatePage = () => {
   return (
      <>
         <div className="max-w-3xl mx-auto flex flex-col
          md:justify-center h-full p-6">
            <h1 className="text-2xl">Name your learning path </h1>
            <p className="text-sm text-slate-600">What would you name your learning path? </p>
            <div className="space-y-6 mt-8 w-full">
               <div>
                <Label>Learning path title</Label>
                <Input placeholder="e.g. 'Introduction to python'" />
               </div>
               <div className="flex gap-x-2 items-center">
                  <Button variant="outline">
                     Cancel
                  </Button>
                  <Link href="/instructor/course">
                  <Button>
                     Continue
                  </Button>
                  </Link>
               </div>
            </div>
         </div>
      </>
   )
}

export default CreatePage;