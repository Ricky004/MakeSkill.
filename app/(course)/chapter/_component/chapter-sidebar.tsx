"use client"

import { ChevronLeft } from "lucide-react";
import ChapterRoutes from "./chapter-routes";
import Link from "next/link";

const ChapterSidebar = () => {
    return (
        <>
            <div className="h-full border-r flex flex-col 
          overflow-y-auto shadow-sm bg-white">
                <div className="p-8 flex flex-col border-b">
                    <div className="flex flex-row gap-x-4 items-center justify-center">
                    <Link href="/program">
                        <button className="text-slate-700">
                            <ChevronLeft />
                        </button>
                    </Link>
                    <h1 className="font-semibold">
                        Introduction to Machine Learning
                    </h1>
                    </div>
                </div>
                <div className="flex flex-col w-full">
                    <ChapterRoutes />
                </div>
            </div>
        </>
    );
}

export default ChapterSidebar;