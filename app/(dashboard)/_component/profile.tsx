"use client"

import TopbarRoutes from "@/components/topbar-routes";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const Profile = () => {
    return (  
        <>
          <div className="flex flex-row items-center justify-between p-3 mt-5">
                    <div className="flex flex-row gap-3">
                    <Avatar>
                        <AvatarImage src="/teacher.jpg" />
                        <AvatarFallback>TD</AvatarFallback>
                    </Avatar>
                        <div className="flex flex-col gap-y-1 2xl:whitespace-nowrap pr-5 justify-center">
                            <p className="text-sm font-bold text-white">John Doe</p>
                            <p className="text-xs text-slate-500">Jake VanderPlas</p>
                        </div>
                    </div>
                    <TopbarRoutes />
            </div>
        </>
    );
}
 
export default Profile;