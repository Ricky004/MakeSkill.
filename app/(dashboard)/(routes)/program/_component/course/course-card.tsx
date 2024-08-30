"use client"

import { IconBadge } from "@/components/icon-badge";
import { BookOpen } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { IoMdStar } from "react-icons/io";

const CourseCard = () => {
   return (
      <>
         <Link href="/chapter/introduction">
            <div className="group hover:shadow-sm transition 
          overflow-hidden border rounded-lg p-3 h-full bg-white">
               <div className="relative w-full aspect-video rounded-md 
             overflow-hidden">
                  <Image
                     fill
                     className="object-cover"
                     alt="course-image-title"
                     src="/image.jpg"
                  />
               </div>
               <div className="flex flex-col pt-2">
                  <div className="text-lg md:text-base font-medium 
                 group-hover:text-sky-700 transition line-clamp-2">
                     <p>
                        Introduction to Machine Learning
                     </p>
                  </div>
                  <p className="text-xs text-muted-foreground font-medium">
                     LeanSkill training
                  </p>
                  <p className="text-xs text-muted-foreground bg-violet-600 
                    p-1 text-white rounded-md w-20 text-center mt-2">
                     Engineering
                  </p>
                  <div className="my-3 flex-center gap-x-2 text-sm
                md:text-xs">
                     <div className="flex flex-row justify-between items-center gap-x-1 text-slate-500">
                        <div className="flex items-center justify-center gap-1">
                           <IconBadge
                              size="sm"
                              icon={BookOpen}
                           />
                           <span>
                              15 hour
                           </span>
                        </div>
                        <div className="flex justify-center items-center">
                           <IoMdStar className="size-5 text-yellow-400" />
                           <span className="font-bold"> 4.5 (456) </span>
                        </div>
                     </div>
                     <p className="text-md md:text-sm font-extrabold pt-4
                   text-slate-700">
                        ₹1200 
                     </p>
                  </div>
               </div>
            </div>
         </Link>
      </>
   )
}

export default CourseCard;