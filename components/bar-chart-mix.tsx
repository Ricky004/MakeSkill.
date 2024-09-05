"use client"

import { Bar, BarChart, XAxis, YAxis } from "recharts"

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
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "A mixed bar chart"

const chartData = [
  { course: "frontend", progress: 275, fill: "var(--color-frontend)" },
  { course: "backend", progress: 200, fill: "var(--color-backend)" },
  { course: "cpp", progress: 147, fill: "var(--color-cpp)" },
  { course: "java", progress: 300, fill: "var(--color-java)" },
  { course: "hardware", progress: 90, fill: "var(--color-hardware)" },

]
const chartConfig = {
  progress: {
    label: "Progress",
  },
  frontend: {
    label: "Reactjs",
    color: "hsl(var(--chart-1))",
  },
  backend: {
    label: "nodejs",
    color: "hsl(var(--chart-2))",
  },
  cpp: {
    label: "C++",
    color: "hsl(var(--chart-3))",
  },
  java: {
    label: "Java",
    color: "hsl(var(--chart-4))",
  },
  hardware: {
    label: "Python",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig

export function BarChartMix() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base">Success</CardTitle>
        <CardDescription></CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chartData}
            layout="vertical"
            margin={{
              left: 0,
            }}
          >
            <YAxis
              dataKey="course"
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) =>
                chartConfig[value as keyof typeof chartConfig]?.label
              }
            />
            <XAxis dataKey="progress" type="number" hide />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="progress" layout="vertical" radius={5} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
