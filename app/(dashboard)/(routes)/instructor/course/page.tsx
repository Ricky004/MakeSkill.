import CategoryForm from "@/app/(dashboard)/_component/category-form"
import DescriptionForm from "@/app/(dashboard)/_component/description-form"
import ImageForm from "@/app/(dashboard)/_component/image-form"
import TitleForm from "@/app/(dashboard)/_component/title-form"
import { IconBadge } from "@/components/icon-badge"
import { LayoutDashboard } from "lucide-react"

const CoursePage = () => {
    return (  
        <>
          <div className="p-5">
            <div className="flex items-center justify-between">
               <div className="flex flex-col gap-y-2">
                 <h1 className="text-2xl font-medium">
                    Learning path setup
                 </h1>
                 <span className="text-sm text-slate-700">
                    Complete all fields (1/5)
                 </span>
               </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
               <div>
                 <div className="flex items-center gap-x-2">
                  <IconBadge icon={LayoutDashboard} />
                    <h2 className="text-xl">
                       Customize your learning path 
                    </h2>
                 </div>
                 <TitleForm />
                 <DescriptionForm />
                 <ImageForm />
               </div>
               <div>
               <CategoryForm />
               <CategoryForm />
               <CategoryForm />
               </div>
            </div>
          </div>
        </>
    )
}
 
export default CoursePage