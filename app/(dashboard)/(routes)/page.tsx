"use client"

import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"
import Image from "next/image"
import HomeCategory from "../_component/home-category"
import WatchCourseCard from "../_component/watched-course-card"

export default function Home() {
  return (
    <>
      <div className="2xl:flex 2xl:flex-row pl-6 pr-6 pt-10">
        <div>
          <div className="relative flex flex-row justify-between 
        bg-[#e06ee5] 2xl:w-[1230px]  p-7 rounded-xl text-white">
            <div className="">
              <p className="mb-4 font-[200]">
                Online Learning Paths
              </p>
              <div className="font-extrabold text-2xl">
                <h1>Sharpen your Knowledge with</h1>
                <h1>Proffesional learnign paths</h1>
              </div>
              <Button className="mt-4 rounded-full">
                <p className="pr-2"> Join now </p>
                <div className="bg-white rounded-full text-black p-1.5">
                  <Play className="size-3" />
                </div>
              </Button>
            </div>
            <div className="absolute right-0 bottom-0">
              <Image
                src="/3d_img.png"
                width={290}
                height={200}
                alt="A girl fly with a rockt"
              />
            </div>
          </div>

          <div className="flex flex-row gap-x-7 mt-4 overflow-scroll">
            <HomeCategory
              watch="3/15"
              subject="Frontend"
            />
            <HomeCategory
              watch="1/5"
              subject="Backend"
            />
            <HomeCategory
              watch="5/25"
              subject="ML basics"
            />
            <HomeCategory
              watch="20/25"
              subject="Java basics"
            />
            <HomeCategory
              watch="3/15"
              subject="Frontend"
            />
            <HomeCategory
              watch="3/15"
              subject="Frontend"
            />
          </div>
          <h2 className="mt-5 text-1xl font-bold">Continue Watching</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 mt-5 
           xl:grid-cols-3 2xl:grid-cols-3 gap-4">
            <WatchCourseCard />
            <WatchCourseCard />
            <WatchCourseCard />
          </div>
        </div>
        <div className="">
          Hello 
        </div>
      </div>
    </>
  )
}
