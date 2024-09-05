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
import { ChevronDown } from "lucide-react"

export const description = "A simple area chart"

const chartData = [
    { month: "January", desktop: 16 },
    { month: "February", desktop: 25 },
    { month: "March", desktop: 37 },
    { month: "April", desktop: 45 },
    { month: "May", desktop: 77 },
    { month: "June", desktop: 34 },
    { month: "July", desktop: 46 },
    { month: "August", desktop: 25 },
    { month: "September", desktop: 57 },
    { month: "October", desktop: 73 },
    { month: "November", desktop: 18 },
    { month: "December", desktop: 47 },
]

const chartConfig = {
    desktop: {
        label: "Hour",
        color: "#E76F51",
    },
} satisfies ChartConfig

export function AreaChartDiagramFour() {
    return (
        <Card>
            <CardHeader>
                <div className="flex flex-row justify-between gap-2">
                <CardTitle className="text-base">Study Process</CardTitle>
                <div className="flex flex-row items-center text-sm text-slate-900">This week <ChevronDown className="text-slate-500 size-4" /></div>
                </div>
                <CardDescription>
                    Showing total study hour for the last one year
                </CardDescription>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig} className="h-44 w-full">
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
