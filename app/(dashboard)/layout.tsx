import TopBar from "@/app/(dashboard)/_component/topbar"
import { Sidebar } from "@/app/(dashboard)/_component/sidebar";

const DashboardLayout = ({
    children
}: {
    children: React.ReactNode
}) => {
    return (
        <>
            <div className="h-screen bg-gray-100">
                <div className="">
                 <TopBar />
                </div>
                <div className="hidden md:flex h-full w-56 flex-col fixed 
                z-50">
                 <Sidebar />
                </div>
                <main className="md:pl-56 h-full ">
                 {children}
                </main>
            </div>
        </>
    )
}

export default DashboardLayout