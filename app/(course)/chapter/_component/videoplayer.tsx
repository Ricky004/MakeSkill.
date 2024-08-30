"use client"

import dynamic from 'next/dynamic';

const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false });
const VidoePlayer = () => {
    return (  
        <>
           <div className='max-w-4xl mx-auto'>
              <ReactPlayer 
                 url="https://videos.pexels.com/video-files/3205619/3205619-hd_1920_1080_25fps.mp4"
                 height="700"
                 width="950"
                 controls={true}
              />
           </div>
        </>
    );
}
 
export default VidoePlayer;