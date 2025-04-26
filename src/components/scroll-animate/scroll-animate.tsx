// components/ScrollAnimate.tsx
'use client'
import { ReactNode, useEffect } from 'react'
import { motion, useAnimation, Variants } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

interface Props {
  children: ReactNode
  variants?: Variants
  threshold?: number
}

export default function ScrollAnimate({
  children,
  variants,
  threshold = 0.2,
}: Props) {
  const controls = useAnimation()
  const [ref, inView] = useInView({ triggerOnce: true, threshold })

  useEffect(() => {
    if (inView) controls.start('visible')
  }, [controls, inView])

  const defaultVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants ?? defaultVariants}
    >
      {children}
    </motion.div>
  )
}

