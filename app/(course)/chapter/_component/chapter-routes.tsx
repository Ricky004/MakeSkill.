import { Film, Lock } from "lucide-react";
import { ChapterSidebarItem } from "./chapter-sideber-item";


const chapterRoutes = [
    {   
        icon: Film,
        label: "introduction",
        href: "/chapter/introduction",
    },
    {
        icon: Lock,
        label: "supervised learning",
        href: "/chapter/supervised-learning",
    },
    {
        icon: Lock,
        label: "regression",
        href: "/chapter/regression",
    },
    {
        icon: Lock,
        label: "unsupervised learning",
        href: "/chapter/unsupervised-learning",
    },
    {
        icon: Lock,
        label: "reinforcement learning",
        href: "/chapter/reinforcement-learning",
    },
]

const ChapterRoutes = () => {
    const routes = chapterRoutes
    return (
        <>
            <div className="flex flex-col w-full">
                {
                    routes.map((route) => (
                        <ChapterSidebarItem
                            key={route.href}
                            icon={route.icon}
                            label={route.label}
                            href={route.href}
                        />
                    ))
                }
            </div>
        </>
    );
}

export default ChapterRoutes;