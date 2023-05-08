import React, { ReactNode } from 'react'
import DesktopSidebar from './DesktopSidebar';

interface ISidebarProps {
    children: ReactNode
}

const SideBar = ({children}:ISidebarProps) => {
  return (
    <div className='h-full'>
        <DesktopSidebar/>
        <main className='h-full lg:pl-20'>
        {children}
        </main>
       
    </div>
  )
}

export default SideBar;