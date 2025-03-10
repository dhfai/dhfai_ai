"use client";

import { Bot, CoinsIcon, HomeIcon, Layers2Icon, MenuIcon, Paperclip, ShieldCheckIcon } from 'lucide-react';
import React, { useState } from 'react'
import Link from 'next/link';
import { Button, buttonVariants } from './ui/button';
import { usePathname } from 'next/navigation';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import Logo from './Logo';
import { ScrollArea } from './ui/scroll-area';
import { cn } from '@/lib/utils';
import { Input } from './ui/input';
import ChatInterface from './ChatInterface';

const routes = [
    {
        href:"",
        label: "Home",
        icon: HomeIcon
    },
    {
        href:"aigenerate",
        label: "AI Generate",
        icon: Bot
    },
    {
        href:"credentials",
        label: "Credentials",
        icon: ShieldCheckIcon
    },
    {
        href:"billing",
        label: "Billing",
        icon: CoinsIcon
    }
]

const DesktopSidebar = () => {
    const pathname = usePathname()
    const activeRoute = routes.find(
        (route) => route.href.length > 0 && pathname.includes(route.href)
    ) || routes[0];
  return (
    <div className='hidden relative md:block max-w-[280px] h-screen overflow-hidden w-full bg-background dark:bg-secondary/30 dark:text-foreground text-muted-foreground border-r-2 border-separate'>
        <div className='flex items-center justify-center gap-2 border-b-[1px] border-separate p-4'>
            <Logo />
        </div>
        <div className='flex flex-col p-2'>
            {routes.map((route) => (
                <Link
                    key={route.href}
                    href={route.href}
                    className={
                        buttonVariants({
                            variant: activeRoute.href == route.href ? "sidebarActivateItem" : "sidebarItem",
                        })
                    }
                > 
                    <route.icon size={24} />
                    {route.label}
                </Link>
            ))}
        </div>
    </div>
  )
}


interface QuestionInputProps {
    className?: string
}

const EditorSideBar = () => {
  return (
    <div className='hidden relative md:block max-w-[450px] h-screen overflow-hidden w-full bg-background dark:bg-secondary/30 dark:text-foreground text-muted-foreground border-r-2 border-separate'>
        <div className='flex items-center justify-center gap-2 border-b-[1px] border-separate p-4'>
            <Logo />
        </div>
        <ChatInterface />
    </div>
  )
}

export { DesktopSidebar, EditorSideBar }

export function MobileSidebar(){
    const [isOpen, setOpen] = useState(false)
    const pathname = usePathname()
    const activeRoute = routes.find(
        (route) => route.href.length > 0 && pathname.includes(route.href)
    ) || routes[0];
    return (
        <div className='block border-separate bg-background md:hidden'>
            <nav className='container flex items-center justify-between px-8'>
                <Sheet open={isOpen} onOpenChange={setOpen}>
                    <SheetTrigger asChild>
                        <Button variant="ghost" size={"icon"}>
                            <MenuIcon />
                        </Button>
                    </SheetTrigger>
                    <SheetContent className='w-[400px] sm:w-[540px] space-y-4' side={'left'}>
                        <Logo />
                        <div className='flex flex-col gap-1'>
                            {" "}
                            {routes.map((route) => (
                                <Link
                                    key={route.href}
                                    href={route.href}
                                    className={
                                        buttonVariants({
                                            variant: activeRoute.href == route.href ? "sidebarActivateItem" : "sidebarItem",
                                        })
                                    }
                                    onClick={() => setOpen((prev) => !prev)}
                                > 
                                    <route.icon size={24} />
                                    {route.label}
                                </Link>
                            ))}
                        </div>
                    </SheetContent>
                </Sheet>
            </nav>
        </div>
    )
}