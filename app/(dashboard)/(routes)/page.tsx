"use client"

import { PieChartDiagram } from "@/components/pie-chart"
import { AreaChartDiagramOne } from "@/components/area-chart"
import { AreaChartDiagramTwo } from "@/components/area-chart-two"
import { AreaChartDiagramThree } from "@/components/area-chart-three"
import { RaderChart } from "@/components/rader-chart"
import { BarChartDiagram } from "@/components/bar-chart"
import { BarChartMix } from "@/components/bar-chart-mix"
import { AreaChartDiagramFour } from "@/components/area-chart-four"
import CategoryGrid from "../_component/category-grid"

export default function Home() {
  return (
    <>
      {/* <p className="pl-6 pb-2 text-2xl font-bold text-slate-800">Wellcome back, Tridip Dam.</p> */}
      <div className="lg:flex lg:flex-row pl-6 pr-6">
        <div>
          <div className="grid grid-cols-3 items-center gap-2 pb-3">
            <AreaChartDiagramOne />
            <AreaChartDiagramTwo />
            <AreaChartDiagramThree />
          </div>
          <div className="">
            <AreaChartDiagramFour />
          </div>
          <div className="flex flex-row gap-3 pb-3 pt-3">
            <RaderChart />
            <BarChartDiagram />
          </div>
        </div>
        <div className="pl-5 space-y-2">
          <PieChartDiagram />
          <p className="pt-1 pb-0.5 font-bold">Most activity</p>
          <BarChartMix />
          <p className="pt-1 font-bold">Continue course</p>
          <CategoryGrid />
        </div>
      </div>
    </>
  )
}
