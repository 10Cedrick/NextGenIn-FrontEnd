import React from 'react'
import { Sidebar, SidebarConnect } from '../component'

export default function DashboardLayout({children}) {
  return (
    <div className='flex flex-row bg-slate-50'>
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
