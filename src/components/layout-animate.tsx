'use client'

import { Transitions } from '@/components/transitions'
import { AnimatePresence, motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { FC, ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export const LayoutAnimate: FC<Props> = ({ children }) => {
  const pathname = usePathname()
  return (
    <AnimatePresence mode="wait" key={pathname}>
      <motion.div className="h-full">
        <Transitions />
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
