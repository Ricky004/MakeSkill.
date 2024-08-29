import { Button } from "@/components/ui/button"
import Link from "next/link"
import CourseCard from "../../program/_component/course/course-card"

const LearningPathPage = () => {
  return (
    <>
      <div className="p-5">
        <div className="flex flex-row justify-between mb-10">
          <div className="">
            <h1 className="text-4xl font-semibold">We meet again, LeanSkill Training.</h1>
          </div>
          <div>
            <Link href="/instructor/create">
              <Button>
                Add learning path
              </Button>
            </Link>
          </div>
        </div>
        <p className="mb-5 text-slate-600">Your previously created all Learnign Paths</p>
        <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3
           xl:grid-cols-4 2xl:grid-cols-4 gap-4">
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
        </div>
      </div>
    </>
  )
}

export default LearningPathPage