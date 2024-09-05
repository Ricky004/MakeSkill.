import { RiArrowDropDownLine } from "react-icons/ri"
import { BiSolidCartAlt } from "react-icons/bi"
import { TbPlayerPlayFilled } from "react-icons/tb"
import { Button } from "@/components/ui/button";
import Image from "next/image";

const LandinbgPage = () => {
    return (
        <>
            <div>
                <div className="bg-[#ece5e3] h-full p-10 w-full">
                    <div className="flex flex-row gap-7 items-center justify-between">
                        <div className="flex flex-row gap-7">
                            <h2 className="font-extrabold text-2xl">MaKeSkill.</h2>
                            <div className="flex flex-row gap-5 items-center">
                                <p>Home</p>
                                <p className="flex flex-row items-center">
                                    Course Category
                                    <RiArrowDropDownLine size={30} />
                                </p>
                                <p>Blog</p>
                            </div>
                        </div>
                        <div className="flex flex-row gap-5 items-center">
                            <BiSolidCartAlt size={30} />
                            <Button variant="outline">
                                Join now
                            </Button>
                        </div>
                    </div>

                    <div className="flex flex-row items-center justify-between">
                        <div className="flex flex-col gap-4">
                            <h1 className="text-5xl font-bold">
                                Transform Your Learning Journey: Tailored <span className="text-red-500">Courses.</span>, Unlimited Growth
                            </h1>
                            <p className="font-semibold text-1xl text-slate-800">
                                Unlock Your Potential: Master New Skills with Personalized Learning Paths Tailored Just for You!
                            </p>
                            <div className="flex gap-3 items-center mt-3">
                                <Button className="max-w-44 p-5 rounded-full
                            bg-gradient-to-r from-[#fe3a32] via-[#ff5e3e] to-[#ff864b]
                            shadow-lg">
                                    Explore Coureses
                                </Button>
                                <Button variant="outline" className="bg-transparent">
                                    <TbPlayerPlayFilled className="mr-2 text-red-600 bg-white rounded-full p-2 size-7" />
                                    Watch video
                                </Button>
                            </div>
                        </div>

                        <Image
                            src="/new-landing-img-2.png"
                            width={800}
                            height={800}
                            alt="landing-page-image"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default LandinbgPage