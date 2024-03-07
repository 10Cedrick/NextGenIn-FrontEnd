import React from 'react'
import { Sidebar, SidebarConnect } from '../component'
import "./DashboardLayout.css"

export default function DashboardLayout({children}) {
  return (
    <div className='flex flex-row bg-principale'>
        <div className="">
            <Sidebar />
        </div>
        <main>
            <div>
                <SidebarConnect />
            </div>
            <div className="w-auto mx-8 mt-16 px-16">
             {children}
        </div>
        </main>
        
    </div>
  )
}
