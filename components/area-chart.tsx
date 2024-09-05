"use client"

import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

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
import { Clock } from "lucide-react"

export const description = "A simple area chart"

const chartData = [
    { month: "January", desktop: 16 },
    { month: "February", desktop: 25 },
    { month: "March", desktop: 37 },
    { month: "April", desktop: 45 },
    { month: "May", desktop: 37 },
    { month: "June", desktop: 34 },
    { month: "January", desktop: 46 },
    { month: "February", desktop: 25 },
    { month: "March", desktop: 57 },
    { month: "April", desktop: 73 },
    { month: "May", desktop: 38 },
    { month: "June", desktop: 47 },
]

const chartConfig = {
    desktop: {
        label: "Desktop",
        color: "#E76F51",
    },
} satisfies ChartConfig

export function AreaChartDiagramOne() {
    return (
        <Card>
            <CardHeader>
                <div className="flex flex-row gap-2 items-center">
                  <Clock className="bg-violet-400/30 text-violet-800 rounded-md p-1 size-7"/>
                  <CardTitle className="text-sm">Time Spend</CardTitle>
                </div>
                <CardDescription className="text-2xl text-slate-900 font-bold">
                    15:05:26 
                </CardDescription>
                <CardDescription>
                   
                </CardDescription>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig} >
                    <AreaChart
                        accessibilityLayer
                        data={chartData}
                        margin={{
                            left: 12,
                            right: 12,
                        }}
                    >
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey="month"
                            tickLine={false}
                            axisLine={false}
                            tickMargin={8}
                            tickFormatter={(value) => value.slice(0, 3)}
                        />
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent indicator="line" />}
                        />
                        <Area
                            dataKey="desktop"
                            type="natural"
                            fill="var(--color-desktop)"
                            fillOpacity={0.4}
                            stroke="var(--color-desktop)"
                        />
                    </AreaChart>
                </ChartContainer>
            </CardContent>
        </Card>
    )
}
