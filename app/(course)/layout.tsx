import ChapterSidebar from "./chapter/_component/chapter-sidebar"

const ChapterPageLayout = ({
  children
}: {
  children: React.ReactNode 
}) => {
    return (  
        <>
          <div className="min-h-screen bg-gray-100">
            <div className="hidden md:flex h-full w-64 flex-col fixed inset-y-0
                z-50">
              <ChapterSidebar />
            </div>
            <main className="md:pl-64 min-h-screen">
              {children}
            </main>
          </div>
        </>
    );
}
 
export default ChapterPageLayout;