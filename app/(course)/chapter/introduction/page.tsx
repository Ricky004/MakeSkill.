import VidoePlayer from "../_component/videoplayer";

const IntroductionPage = () => {
    return (  
        <>
          <div className="flex flex-col max-w-4xl mx-auto pb-20">
            <div className="lg:p-4">
              <VidoePlayer />
            </div>
          </div>
        </>
    );
}
 
export default IntroductionPage;