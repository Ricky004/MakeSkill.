"use client"

import { IconBadge } from "@/components/icon-badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { BookOpen } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { IoMdStar } from "react-icons/io";

const CourseCard = () => {
   return (
      <>
         <Link href="/chapter/introduction">
            <div className="group hover:shadow-sm transition 
          overflow-hidden border h-full bg-white">
               <div className="relative w-full aspect-video
             overflow-hidden">
                  <Image
                     fill
                     className="object-cover"
                     alt="course-image-title"
                     src="/image.jpg"
                  />
               </div>
               <div className="flex flex-col p-3">
                  <div className="flex items-center justify-between gap-1 pb-2">
                     <div className="flex gap-1 items-center">
                        <IconBadge
                           size="sm"
                           icon={BookOpen}
                        />
                        <span className="text-xs text-slate-500">
                           15x lesson
                        </span>
                     </div>
                     <p className="text-xs bg-sky-300/40 
                    p-1 text-sky-700 rounded-md w-20 text-center">
                        Engineering
                     </p>
                  </div>
                  <div className="text-lg md:text-base font-medium 
                 group-hover:text-sky-700 transition line-clamp-2 pb-2">
                     <p>
                        Introduction to Machine Learning
                     </p>
                  </div>
                  <Separator />
                  <div className="flex gap-2 items-center justify-between pt-2 pb-2">
                     <div className="flex items-center gap-2">
                        <Avatar className="size-7">
                           <AvatarImage src="/teacher.jpg" />
                           <AvatarFallback>TD</AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col gap-1">
                           <p className="text-sm text-slate-800 font-semibold">
                              Andrew Ng.
                           </p>
                           <p className="text-xs text-muted-foreground font-medium">
                              AI Researcher
                           </p>
                        </div>
                     </div>
                      <div className="text-xs">
                        <span className="text-sky-700 font-bold">500+</span> <p className="text-slate-600">enrolled</p>
                      </div>
                  </div>
                  <Separator />
                  <div className="my-3 flex-center gap-x-2 text-sm
                md:text-xs">
                     <div className="flex flex-row justify-between items-center gap-x-1 text-slate-500">
                        <div className="flex flex-row items-center gap-1">
                        <div className="flex justify-center items-center">
                           <IoMdStar className="size-5 text-yellow-400" />
                           <IoMdStar className="size-5 text-yellow-400" />
                           <IoMdStar className="size-5 text-yellow-400" />
                           <IoMdStar className="size-5 text-yellow-400" />
                        </div>
                        <span className="font-bold"> 4.5 (456) </span>
                        </div>
                        <p className="font-semibold underline text-slate-600">Learn more+</p>
                     </div>
                  </div>
               </div>
            </div>
         </Link>
      </>
   )
}

export default CourseCard;