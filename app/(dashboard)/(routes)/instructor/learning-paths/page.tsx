import { Button } from "@/components/ui/button"
import Link from "next/link"

const LearningPathPage = () => {
    return ( 
      <>
        <div className="p-5">
          <Link href="/instructor/create">
          <Button>
            Add learning path
          </Button>
          </Link>
        </div>
      </>
    )
}
 
export default LearningPathPage