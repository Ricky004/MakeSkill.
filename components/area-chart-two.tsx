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
import { SquareActivity } from "lucide-react"

export const description = "A simple area chart"

const chartData = [
    { month: "January", desktop: 46 },
    { month: "February", desktop: 23 },
    { month: "March", desktop: 25 },
    { month: "April", desktop: 35 },
    { month: "May", desktop: 65 },
    { month: "June", desktop: 34 },
    { month: "January", desktop: 46 },
    { month: "February", desktop: 37 },
    { month: "March", desktop: 30 },
    { month: "April", desktop: 43 },
    { month: "May", desktop: 38 },
    { month: "June", desktop: 47 },
]

const chartConfig = {
    desktop: {
        label: "Desktop",
        color: "hsl(var(--chart-2))",
    },
} satisfies ChartConfig

export function AreaChartDiagramTwo() {
    return (
        <Card>
            <CardHeader>
                <div className="flex flex-row gap-2 items-center">
                    <SquareActivity className="bg-green-400/30 text-green-600 rounded-md p-1 size-7" />
                    <CardTitle className="text-sm">Avg. Activity</CardTitle>
                </div>
                <CardDescription className="text-2xl text-slate-900 font-bold">
                    63%
                </CardDescription>
                <CardDescription>

                </CardDescription>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig}>
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
