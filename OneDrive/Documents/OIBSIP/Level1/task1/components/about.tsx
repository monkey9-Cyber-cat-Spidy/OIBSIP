"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Oasis Infobyte</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Empowering students with practical skills and industry experience since 2018
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/20 rounded-lg"></div>
              <div className="relative z-10 overflow-hidden rounded-lg shadow-xl">
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="Oasis Infobyte Office"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/20 rounded-lg"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold">Our Mission</h3>
            <p className="text-gray-700 dark:text-gray-300">
              At Oasis Infobyte, we bridge the gap between academic learning and industry requirements by providing
              students with hands-on experience in cutting-edge technologies. Our mission is to create a talent pool of
              skilled professionals ready to take on the challenges of the tech industry.
            </p>

            <h3 className="text-2xl font-bold">Why Choose Us?</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                  <div className="w-3 h-3 rounded-full bg-primary"></div>
                </div>
                <span className="ml-3 text-gray-700 dark:text-gray-300">
                  Industry-relevant curriculum designed by experts
                </span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                  <div className="w-3 h-3 rounded-full bg-primary"></div>
                </div>
                <span className="ml-3 text-gray-700 dark:text-gray-300">
                  Hands-on experience with real-world projects
                </span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                  <div className="w-3 h-3 rounded-full bg-primary"></div>
                </div>
                <span className="ml-3 text-gray-700 dark:text-gray-300">Mentorship from industry professionals</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                  <div className="w-3 h-3 rounded-full bg-primary"></div>
                </div>
                <span className="ml-3 text-gray-700 dark:text-gray-300">Recognized certification upon completion</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                  <div className="w-3 h-3 rounded-full bg-primary"></div>
                </div>
                <span className="ml-3 text-gray-700 dark:text-gray-300">Placement assistance and career guidance</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

