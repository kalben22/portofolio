"use client"

import { motion } from "framer-motion"

export default function SectionTitle({ title, subtitle, inView }) {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 text-center">
      <motion.div
        className="space-y-2"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl relative inline-block">
          {title}
          <span className="absolute -bottom-1 left-0 w-full h-1 bg-primary/30 rounded-full"></span>
        </h2>
        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          {subtitle}
        </p>
      </motion.div>
    </div>
  )
}

