"use client"

import { ChevronRight } from "lucide-react";
import Image from "next/image";

const CategoryGrid = () => {
    return (
        <>
            <div className="flex flex-row items-center justify-between rounded-xl border-2 pr-4">
                    <div className="flex flex-row p-4 gap-x-4 aspect-video h-24 w-full">
                        <Image
                            src="/coffee.jpg"
                            width={50}
                            height={50}
                            className="object-cover rounded-md h-16"
                            alt="course-image-title"
                        />
                        <div className="flex flex-col gap-y-1 whitespace-nowrap pr-5 justify-center">
                            <p className="font-bold text-slate-800">Physics with Python with real world expriments</p>
                            <p className="text-slate-500">Jake VanderPlas</p>
                        </div>
                    </div>
                    <ChevronRight className="border-2 rounded-full p-1 size-7" />
            </div>
        </>
    );
}

export default CategoryGrid;