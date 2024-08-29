"use client";

const HeartButton = () => {
    return (
        <>
            <div className="">
                <div className="w-[100px] h-[100px] bg-no-repeat cursor-pointer transition-[background-position] duration-0"
                     style={{
                         backgroundImage: 'url("https://cssanimation.rocks/images/posts/steps/heart.png")',
                         backgroundPosition: '0 0'
                     }}></div>
            </div>
        </>
    );
}

export default HeartButton;
