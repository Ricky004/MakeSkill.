import TopBar from "@/app/(dashboard)/_component/topbar"
import { Sidebar } from "@/app/(dashboard)/_component/sidebar";

const DashboardLayout = ({
    children
}: {
    children: React.ReactNode
}) => {
    return (
        <> 
            <div className="min-h-screen bg-gray-100">
                {/* <div className="fixed w-full h-[80px] inset-y-0 z-50">
                 <TopBar />
                </div> */}
                <div className="hidden xl:flex h-full w-64 flex-col fixed inset-y-0
                z-50">
                 <Sidebar />
                </div>
                <main className="xl:pl-64 pt-[10px] min-h-screen">
                 {children}
                </main>
            </div>
        </>
    )
}

export default DashboardLayout