"use client"

import CourseCard from "./course-card";

const Course = () => {
    return (  
        <>
           <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 pl-4 pr-4
           xl:grid-cols-4 2xl:grid-cols-5 gap-4">
              <CourseCard src="/image.jpg" heading="Introduction to Machine Learning"/>
              <CourseCard src="/pic-1.jpg" heading="Basic programing with Java"/>
              <CourseCard src="/pic-2.png" heading="How to be become 10x developer"/>
              <CourseCard src="/pic-3.jpg" heading="Hardware course "/>
              <CourseCard src="/pic-2.png" heading="How to be become 10x developer"/>
              <CourseCard src="/image.jpg" heading="Introduction to Machine Learning"/>
              <CourseCard src="/pic-3.jpg" heading="Hardware course "/>
              <CourseCard src="/pic-1.jpg" heading="Basic programing with Java"/>
           </div>
        </>
    )
}
 
export default Course;