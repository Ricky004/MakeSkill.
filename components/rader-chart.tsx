"use client"

import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "A radar chart with a legend"

const chartData = [
  { month: "Frontend", skill0: 286, skill1: 210 },
  { month: "Backend", skill0: 305, skill1: 200 },
  { month: "AI/ML", skill0: 237, skill1: 120 },
  { month: "Hardware", skill0: 73, skill1: 340 },
  { month: "DevOps", skill0: 209, skill1: 260 },
  { month: "C++", skill0: 214, skill1: 340 },
]

const chartConfig = {
  skill0: {
    label: "Skill 0",
    color: "#7695FF",
  },
  skill1: {
    label: "Skill 1",
    color: "#AD49E1",
  },
} satisfies ChartConfig

export function RaderChart() {
  return (
    <Card>
      <CardHeader className="pb-4">
        <CardTitle className="text-base">Skill Developed</CardTitle>
        <CardDescription>
          Its a skill chart that show your skills
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[170px]"
        >
          <RadarChart
            data={chartData}
            margin={{
              top: -40,
              bottom: -10,
            }}
          >
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <PolarAngleAxis dataKey="month" />
            <PolarGrid />
            <Radar
              dataKey="skill0"
              fill="var(--color-skill0)"
              fillOpacity={0.5}
            />
            <Radar dataKey="skill1" fill="var(--color-skill1)" fillOpacity={0.5} />
          </RadarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
