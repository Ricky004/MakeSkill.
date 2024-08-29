"use client"

import { Progress } from "@/components/ui/progress"
import { useEffect, useState } from "react"


export function ProgressBar() {
  const [progress, setProgress] = useState(13)

  useEffect(() => {
    const timer = setTimeout(() => setProgress(40), 500)
    return () => clearTimeout(timer)
  }, [])

  return <Progress value={progress} className="w-[100%]" />
}
