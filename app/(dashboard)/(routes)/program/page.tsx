import SearchBar from "@/components/ui/searchbar"
import Categories from "./_component/categories/categories"
import Course from "./_component/course/course-list"
import SortList from "./_component/sort-list"
import { Button } from "@/components/ui/button"


const ProgramPage = () => {
    return ( 
        <>
          <div>
            <div className="flex flex-row w-1/2 gap-4 p-4 items-center justify-between">
            <SearchBar />
             <Button>
               Search
             </Button>
            </div>
             <Categories />
             <div className="flex justify-end p-4">
              <SortList />
             </div>
             <Course />
          </div>
        </>
    )
}
 
export default ProgramPage