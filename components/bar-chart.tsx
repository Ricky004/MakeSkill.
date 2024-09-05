"use client"

import { Bar, BarChart, CartesianGrid, LabelList, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "A bar chart with a label"

const chartData = [
  { day: "5th", hour: 10 },
  { day: "6th", hour: 2 },
  { day: "7th", hour: 6 },
  { day: "8th", hour: 7 },
  { day: "9th", hour: 3 },
  { day: "10th", hour: 8 },
]

const chartConfig = {
  hour: {
    label: "Hour",
    color: "#0B2F9F",
  },
} satisfies ChartConfig

export function BarChartDiagram() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base">Study Time</CardTitle>
        <CardDescription>Sep 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chartData}
            margin={{
              top: 20,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="day"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="hour" fill="var(--color-hour)" radius={8}>
              <LabelList
                position="top"
                offset={12}
                className="fill-foreground"
                fontSize={12}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="leading-none text-muted-foreground">
          Showing total hours you study for the last 6 days
        </div>
      </CardFooter> 
    </Card>
  )
}
