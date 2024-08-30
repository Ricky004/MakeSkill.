import { Button } from "@/components/ui/button";
import VidoePlayer from "../_component/videoplayer";
import { SquareArrowOutUpRight, BookMarked } from "lucide-react";
import TabNavigation from "../../_component/tab-navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ProgressBar } from "@/app/(dashboard)/_component/progress-bar";
import ChapterList from "../_component/chapter-list";

const IntroductionPage = () => {
  return (
    <>
      <div className="2xl:flex 2xl:flex-row xl:flex xl:flex-row md:flex md:flex-col sm:flex sm:flex-col p-11">
        <div className="flex flex-col pb-20 max-w-4xl">
          <div className="mb-2 ml-3">
            <div className="flex flex-row items-center justify-between">
              <h2 className="text-2xl font-semibold text-slate-800">
                Introduction to Machine Learning
              </h2>
              <div className="flex flex-row gap-2 pr-3 text-slate-500">
                <Button variant="outline" className="rounded-full size-10 p-0">
                  <SquareArrowOutUpRight />
                </Button>
                <Button variant="outline" className="rounded-full size-10 p-0">
                  <BookMarked />
                </Button>
              </div>
            </div>
            <p className="pt-2 text-sm text-slate-600">LeanSkills Training.</p>
          </div>
          <div className="lg:p-4">
            <VidoePlayer />
          </div>
          <div className="">
            <TabNavigation />
          </div>
        </div>
        <div className="ml-14">
          <div className="border-2 pl-7 pb-7 pt-2">
            <div className="flex flex-col">
              <p className="font-bold text-2xl text-slate-800">
                About the course
              </p>
              <div className="flex flex-row gap-4 pt-4">
                <Avatar>
                  <AvatarImage src="/teacher.jpg" />
                  <AvatarFallback>TD</AvatarFallback>
                </Avatar>
                <div className="flex flex-col justify-center items-center">
                  <p className="text- font-bold">Andrew Ng.</p>
                  <p className="text-xs">ML Researcher</p>
                </div>
              </div>
            </div>
            <p className="pt-4 text-sm text-slate-600">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
              sapiente voluptate perspiciatis, dolores dolorem hic adipisci dolorum,
              voluptatem iste placeat ipsa veniam doloribus natus mollitia omnis eius
              consequuntur totam aliquam ...<span className="font-bold text-slate-900">read more</span>
            </p>
          </div>
          <div className="flex flex-col border-2 p-7">
            <div className="pt-7 space-y-3">
              <p className="font-bold">Cousre Completion</p>
              <div className="flex flex-row justify-between text-sm text-slate-600">
                <p>45% completed</p>
                <p>7/25</p>
              </div>
              <ProgressBar />
              <div className="pt-4 xl:overflow-y-scroll lg:overflow-y-scroll">
                <ChapterList />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default IntroductionPage;