import { Sidebar } from "../(dashboard)/_component/sidebar";


const ChapterPageLayout = ({
  children
}: {
  children: React.ReactNode 
}) => {
    return (  
        <>
          <div className="h-screen bg-white">
            <div className="hidden md:flex h-full w-64 flex-col fixed inset-y-0
                z-50">
              <Sidebar />
            </div>
            <main className="md:pl-64 fixed">
              {children}
            </main>
          </div>
        </>
    );
}
 
export default ChapterPageLayout;