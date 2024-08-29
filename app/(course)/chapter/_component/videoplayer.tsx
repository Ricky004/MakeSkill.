"use client"
import { Captions } from 'lucide-react';
import dynamic from 'next/dynamic';

const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false });
const VidoePlayer = () => {
    return (  
        <>
           <div className="shadow-sm border-r p-4 bg-white rounded-md">
              <ReactPlayer 
                 url="https://cdn.pixabay.com/video/2016/08/22/4733-179738669_large.mp4"
                 height="700"
                 width="950"
                 controls={true}
              />
           <div>
            <div className="p-4 flex flex-col md:flex-row items-center
            justify-center">
             <h2 className="text-2xl font-semibold mb-2">
                Introduction (Chapter)
             </h2>
            </div>
            <div className="flex flex-row gap-2">
            <Captions className='text-slate-500'/>
            <p className='font-medium text-slate-500'>
              Transcript of the video 
             </p>
            </div>
            <p className="pt-4 text-slate-900">
            Lorem Ipsum is simply dummy text of the printing and 
            typesetting industry. Lorem Ipsum has been the industry 
            standard dummy text ever since the 1500s, when an unknown 
            printer took a galley of type and scrambled it to make a type 
            specimen book. It has survived not only five centuries, but also 
            the leap into electronic typesetting, remaining essentially unchanged. 
            It was popularised in the 1960s with the release of Letraset sheets 
            containing Lorem Ipsum passages, and more recently with desktop publishing 
            software like Aldus PageMaker including versions of Lorem Ipsum.
             </p>
           </div>
           </div>
        </>
    );
}
 
export default VidoePlayer;