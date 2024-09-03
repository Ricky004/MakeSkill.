const LandinbgPageLayout = ({
    children
}: {
    children: React.ReactNode
}) => {
    return (  
        <>
           <div className="h-full w-full">
             <main>
              {children}    
            </main>       
           </div>
        </>
    );
}
 
export default LandinbgPageLayout;