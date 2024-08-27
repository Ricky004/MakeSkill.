"use client"

import {
    ChartNoAxesColumn,
    GraduationCap,
    Users,
    SquareUserRound,
    StarIcon,
    List,
    BarChart
} from "lucide-react";
import { SidebarItem } from "./sidebar-item";
import { usePathname } from "next/navigation";

const learnerRoutes = [
    {
        icon: ChartNoAxesColumn,
        label: "Dashboard",
        href: "/",
    },
    {
        icon: GraduationCap,
        label: "Program",
        href: "/program",
    },
    {
        icon: Users,
        label: "Learners",
        href: "/learn",
    },
    {
        icon: SquareUserRound,
        label: "Instructors",
        href: "/inst",
    },
    {
        icon: StarIcon,
        label: "Feedback",
        href: "/feedback",
    },
]

const instructorRoutes = [
    {
        icon: List,
        label: "Learning paths",
        href: "/instructor/learning-paths",
    },
    {
        icon: BarChart,
        label: "Analytics",
        href: "/instructor/analytics",
    },
    {
        icon: StarIcon,
        label: "Feedback",
        href: "/instructor/feedback",
    },
]

export const SidebarRoutes = () => {
    const pathname = usePathname()
    
    const isInstructorPage = pathname?.includes("/instructor")

    const routes = isInstructorPage ? instructorRoutes : learnerRoutes
    return (
        <>
            <div className="flex flex-col w-full">
                {
                    routes.map((route) => (
                        <SidebarItem
                            key={route.href}
                            icon={route.icon}
                            label={route.label}
                            href={route.href}
                        />
                    ))
                }
            </div>
        </>
    )
}

