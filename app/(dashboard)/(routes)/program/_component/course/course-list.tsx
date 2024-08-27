"use client"

import CourseCard from "./course-card";

const Course = () => {
    return (  
        <>
           <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 p-4
           xl:grid-cols-4 2xl:grid-cols-4 gap-4">
              <CourseCard />
              <CourseCard />
              <CourseCard />
              <CourseCard />
              <CourseCard />
              <CourseCard />
              <CourseCard />
           </div>
        </>
    )
}
 
export default Course;