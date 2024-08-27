import SearchBar from "../../../components/ui/searchbar"
import { Bell } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "../../../components/ui/avatar"
import { Separator } from "../../../components/ui/separator"
import { CircleHelp } from "lucide-react"
import TopbarRoutes from "@/components/topbar-routes"


const TopBar = () => {
    return (
        <>
            <div className="flex justify-between items-center p-3 bg-white">
                <div>
                    <h2 className="hidden md:block font-extrabold">LeanSkills</h2>
                </div>
                <div className="flex flex-row gap-3 items-center">
                    <TopbarRoutes />
                    <SearchBar />
                    <CircleHelp size="2rem"/>
                    <Bell size="2rem"/>
                    <Avatar>
                        <AvatarImage src="" />
                        <AvatarFallback>TD</AvatarFallback>
                    </Avatar>
                    <p className="hidden lg:block font-medium text-center whitespace-nowrap">Tridip Dam</p>
                </div>
            </div>
            <Separator />
        </>
    )
}

export default TopBar