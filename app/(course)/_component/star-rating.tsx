"use client"

import { IoMdStar } from "react-icons/io";

const StarRating = () => {
    return (  
        <>
          <div className="flex flex-col justify-center items-center p-3 border whitespace-nowrap h-28">
            <p className="font-bold">
              This Chapter want Stars
            </p>
            <p className="text-sm text-slate-400">
                (1 is very bad, 5 is Best)
            </p>
            <div className="flex flex-row pt-2 gap-2">
                <IoMdStar className="text-yellow-400"/>
                <IoMdStar className="text-yellow-400"/>
                <IoMdStar className="text-yellow-400"/>
                <IoMdStar className="text-slate-400"/>
                <IoMdStar className="text-slate-400"/>
            </div>
          </div>
        </>
    );
}
 
export default StarRating;