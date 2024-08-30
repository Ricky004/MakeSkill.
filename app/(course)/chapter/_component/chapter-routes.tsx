import { Film, Lock } from "lucide-react";
import { ChapterSidebarItem } from "./chapter-list-item";


const chapterRoutes = [
    {   
        icon: Film,
        label: "Introduction",
        href: "/chapter/introduction",
    },
    {
        icon: Lock,
        label: "Supervised learning",
        href: "/chapter/supervised-learning",
    },
    {
        icon: Lock,
        label: "Regression",
        href: "/chapter/regression",
    },
    {
        icon: Lock,
        label: "Unsupervised learning",
        href: "/chapter/unsupervised-learning",
    },
    {
        icon: Lock,
        label: "Reinforcement learning basics",
        href: "/chapter/reinforcement-learning",
    },
    {
        icon: Lock,
        label: "Math behind regression model",
        href: "/chapter/math-ml",
    },
    {
        icon: Lock,
        label: "Neural network basic introduction",
        href: "/chapter/neural-network",
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