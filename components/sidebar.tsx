"use client"

import { ChevronFirst, ChevronLast } from "lucide-react"
import {
  createContext,
  ReactNode,
  useContext,
  useState,
  Dispatch,
  SetStateAction
} from "react"

type SidebarContextType = {
  expanded: boolean
  setExpanded: Dispatch<SetStateAction<boolean>>
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined)

type SidebarProps = {
  children: ReactNode
}

export function Sidebar({ children }: SidebarProps) {
  const [expanded, setExpanded] = useState(true)
  return (
    <>
      <aside className={`h-screen transition-all ${expanded ? "w-60" : "w-20"}`}>
        <nav className="h-full flex flex-col border-r shadow-sm">
          <div className="p-4 pb-2 flex justify-between items-center">
            <button
              onClick={() => setExpanded(exp => !exp)}
              className={`p-2 rounded-lg hover:bg-gray-100 transition-all
                ${expanded ? "ml-44" : "w-20"}`}
            >
              {expanded ? <ChevronFirst /> : <ChevronLast />}
            </button>
          </div>

          <SidebarContext.Provider value={{ expanded, setExpanded }}>

            <ul className="flex-1 px-3">{children}</ul>
          </SidebarContext.Provider>
        </nav>
      </aside>
    </>
  )
}

type SidebarItemProps = {
  icon: ReactNode
  text: string
  active?: boolean
  alert?: boolean
}

export function SidebarItem({ icon, text, active, alert }: SidebarItemProps) {
  const context = useContext(SidebarContext)

  if (!context) {
    throw new Error("SidebarItem must be used within a SidebarContext provider")
  }

  const { expanded } = context
  return (
    <>
      <li className={`
            relative flex items-center py-2 px-3 my-1
            font-medium round-md cursor-pointer
            transition-colors group 
            ${active
          ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
          : "hover:bg-indigo-50 text-gray-600 "
        }
          `}>
        {icon}
        <span
          className={`overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}`}
        >
          {text}
        </span>
        {alert && (
          <div className={`absolute right-2 w-2 h-2 rounded bg-indigo-400
            ${expanded ? "" : "top-4"}  
          `} />
        )}

        {!expanded && <div className={`
          absolute left-full rounded-md px-2 py-1 ml-6
          bg-indigo-100 text-indigo-800 text-sm invisible
          opacity-20 -translate-x-3 transition-all
          group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
        `}>{text}</div>}
      </li>
    </>
  )
}

