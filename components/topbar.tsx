import SearchBar from "./ui/searchbar"
import { Bell } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { Separator } from "./ui/separator"
import { CircleHelp } from "lucide-react"


const TopBar = () => {
    return (
        <>
            <div className="flex justify-between w-full h-14 items-center p-3 ">
                <div>
                    <h2 className="font-bold">LeanSkill</h2>
                </div>
                <div className="flex flex-row gap-3 items-center">
                    <SearchBar />
                    <CircleHelp size="2rem"/>
                    <Bell size="2rem"/>
                    <Avatar>
                        <AvatarImage src="" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <p className="font-medium text-center whitespace-nowrap">Tridip Dam</p>
                </div>
            </div>
            <Separator />
        </>
    )
}

export default TopBar