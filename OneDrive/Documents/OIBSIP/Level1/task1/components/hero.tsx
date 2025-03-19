"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-teal-50 dark:from-blue-950 dark:to-teal-950 z-0" />

      {/* Animated shapes */}
      <div className="absolute inset-0 z-0 opacity-20">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-400 dark:bg-blue-600"
          animate={{
            x: [0, 30, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full bg-teal-400 dark:bg-teal-600"
          animate={{
            x: [0, -20, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-blue-600 to-teal-500 text-transparent bg-clip-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Launch Your Tech Career with Oasis Infobyte
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl mb-8 text-gray-700 dark:text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Join our industry-recognized internship programs and gain hands-on experience in web development, data
            science, and more. Build your portfolio with real-world projects.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button asChild size="lg" className="text-lg">
              <Link href="#apply">Apply Now</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg">
              <Link href="#internships">Explore Programs</Link>
            </Button>
          </motion.div>

          <motion.div
            className="mt-12 flex flex-wrap justify-center gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">5000+</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Students Trained</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">100+</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Projects Completed</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">95%</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Placement Rate</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

