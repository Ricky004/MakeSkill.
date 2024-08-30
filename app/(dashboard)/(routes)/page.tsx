"use client"

import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"
import Image from "next/image"
import HomeCategory from "../_component/home-category"
import WatchCourseCard from "../_component/watched-course-card"
import { FcDataProtection, FcEngineering } from "react-icons/fc"
import DashboardCategory from "../_component/dashboard-category"

export default function Home() {
  return (
    <>
      <p className="pl-6 text-2xl font-bold text-slate-800">Wellcome back, LeanSkills Training.</p>
      <div className="2xl:flex 2xl:flex-row pl-6 pr-6">
        <div>
          <div className="flex flex-row justify-center items-center gap-3 pt-1.5">
            <div className="flex flex-col justify-between 
        bg-[#99bbff]/50 xl:w-[200px] p-7 rounded-xl text-slate-900">
              <h1 className="font-bold text-2xl">Certified Online</h1>
              <div className="flex flex-row justify-center items-center">
                <h1>Learning Paths</h1>
                <FcEngineering size="40" className="bg-white p-1 rounded-full shadow-md mr-1" />
                <FcDataProtection size="40" className="bg-white p-1 rounded-full shadow-md" />
              </div>
              <h1 className="font-extrabold text-1xl pt-3">For Students</h1>
            </div>
            <div className="relative flex flex-row justify-between 
        bg-[#e06ee5] xl:w-[1030px] p-7 rounded-xl text-white">
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
          </div>


          <div className="flex flex-row gap-x-7 mt-3 overflow-scroll">
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
          <h2 className="mt-2 text-1xl font-bold">Continue Watching <span className="text-slate-500 pl-3 text-sm">see all</span> </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 mt-2
           xl:grid-cols-4 2xl:grid-cols-4 gap-4">
            <WatchCourseCard />
            <WatchCourseCard />
            <WatchCourseCard />
            <WatchCourseCard />
          </div>
          <h2 className="pt-2 font-bold">Explore Learning Paths by Category</h2>
          <div className="pb-4">
           <DashboardCategory />
          </div>
        </div>
        <div className="">
          Hello
        </div>
      </div>
    </>
  )
}
