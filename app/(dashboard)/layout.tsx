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
                <div className="fixed w-full h-[80px] inset-y-0 z-50">
                 <TopBar />
                </div>
                <div className="hidden md:flex h-full w-56 flex-col fixed inset-y-0
                z-50">
                 <Sidebar />
                </div>
                <main className="md:pl-56 pt-[80px] min-h-screen">
                 {children}
                </main>
            </div>
        </>
    )
}

export default DashboardLayout