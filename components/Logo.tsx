import { cn } from '@/lib/utils'
import { Code, SquareDashedMousePointer } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Logo = ({
    fontSize = "text-2xl",
    iconsSize = 20
}: {
    fontSize?: string,
    iconsSize?: number
}) => {
  return (
    <Link href="/" className={cn("text-2xl font-extrabold flex items-center gap-2", fontSize)}>
        <div className='rounded-xl bg-gradient-to-r from-violet-500 to-violet-600 p-2'>
            <Code size={iconsSize} className='stroke-white' />
        </div>
        <div>
            <span className='bg-gradient-to-r from-violet-500 to-violet-600 bg-clip-text text-transparent'>
                dhf
            </span>
            <span className='text-stone-700 dark:text-stone-300'>.ai</span>
        </div>
    </Link>
  )
}

export default Logo