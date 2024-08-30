"use client"

import { IconBadge } from "@/components/icon-badge";
import { BookOpen } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ProgressBar } from "./progress-bar";

const WatchCourseCard = () => {
    return (
        <>
            <Link href="/chapter/introduction">
                <div className="group hover:shadow-sm transition 
      overflow-hidden border rounded-lg p-3 bg-white">
                    <div className="relative aspect-video rounded-md 
         overflow-hidden">
                        <Image
                            className="object-cover"
                            alt="course-image-title"
                            src="/image.jpg"
                            width={275}
                            height={150}
                        />
                    </div>
                    <div className="flex flex-col pt-2">
                        <div className="text-lg md:text-base font-medium 
             group-hover:text-sky-700 transition line-clamp-2">
                            <p>
                                Introduction to Machine Learning
                            </p>
                        </div>
                        <div className="my-3 flex-center gap-x-2 text-sm
            md:text-xs">
                            <div className="flex items-center gap-x-1 text-slate-500">
                                <IconBadge
                                    size="sm"
                                    icon={BookOpen}
                                />
                                <span>
                                    4/15 hour 
                                </span>
                            </div>
                             <div className="pt-3 w-full">
                             <ProgressBar />
                             </div>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    );
}

export default WatchCourseCard;