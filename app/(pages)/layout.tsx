'use client'
import BreadCrumbHeader from '@/components/BreadCrumbHeader'
import {DesktopSidebar, EditorSideBar} from '@/components/Sidebar'
import { ThemeModeToggle } from '@/components/ThemeModeToggle'
import { Separator } from '@/components/ui/separator'
import { usePathname } from 'next/navigation'
import React from 'react'


const Layout = ({children}: {children: React.ReactNode}) => {
    const path = usePathname()

    return (
    <div className='flex h-screen'>
        {path.includes('aigenerate/editor') ? <EditorSideBar /> : <DesktopSidebar />}
        <div className='flex flex-col flex-1 min-h-screen'>
            <header className='flex items-center justify-between px-6 py-4 h-[50px] container'>
                <BreadCrumbHeader />
                <div className='gap-1 flex items-center'>
                    <ThemeModeToggle />
                </div>
            </header>
            <Separator />
            <div className='flex-1 py-4 text-accent-foreground'>
                {children}
            </div>
        </div>

    </div>
  )
}

export default Layout