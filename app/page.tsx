import { Sidebar, SidebarItem } from "@/components/sidebar";
import TopBar from "@/components/topbar";
import {
  ChartNoAxesColumn,
  GraduationCap,
  Users,
  SquareUserRound,
  StarIcon
} from "lucide-react";


export default function Home() {
  return (
    <main>
      <TopBar />
      <Sidebar>
        <SidebarItem
          icon={<ChartNoAxesColumn />}
          text="Dashboard"
        />
        <SidebarItem
          icon={<GraduationCap />}
          text="Program"
        />
        <SidebarItem
          icon={<Users />}
          text="Learners"
        />
        <SidebarItem
          icon={<SquareUserRound />}
          text="Instructors"
        />
        <SidebarItem
          icon={<StarIcon />}
          text="Feedback"
        />
      </Sidebar>
    </main>
  )
}
