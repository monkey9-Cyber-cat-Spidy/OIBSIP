"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Testimonials() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Web Development Intern",
      image: "/placeholder.svg?height=100&width=100",
      quote:
        "The internship at Oasis Infobyte was a game-changer for my career. I gained hands-on experience with modern web technologies and built a portfolio that helped me land my first job as a frontend developer.",
      company: "Now at: TechCorp Solutions",
    },
    {
      name: "Rahul Patel",
      role: "Data Science Intern",
      image: "/placeholder.svg?height=100&width=100",
      quote:
        "The mentorship I received during my data science internship was invaluable. I worked on real-world projects that taught me how to apply machine learning algorithms to solve business problems.",
      company: "Now at: Analytics Innovations",
    },
    {
      name: "Aisha Khan",
      role: "UI/UX Design Intern",
      image: "/placeholder.svg?height=100&width=100",
      quote:
        "Oasis Infobyte provided me with the perfect platform to develop my design skills. The projects I worked on helped me understand user-centered design principles and build a strong portfolio.",
      company: "Now at: Creative Design Studio",
    },
    {
      name: "Vikram Singh",
      role: "Mobile App Development Intern",
      image: "/placeholder.svg?height=100&width=100",
      quote:
        "The mobile app development internship gave me practical experience with React Native and Flutter. I learned how to build cross-platform applications and work in a collaborative environment.",
      company: "Now at: MobileTech Innovations",
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  useEffect(() => {
    let interval
    if (autoplay) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
      }, 5000)
    }
    return () => clearInterval(interval)
  }, [autoplay, testimonials.length])

  const handlePrev = () => {
    setAutoplay(false)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  const handleNext = () => {
    setAutoplay(false)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Success Stories</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Hear from our alumni about how their internship experience at Oasis Infobyte shaped their careers
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <Card className="bg-white dark:bg-gray-800 shadow-lg">
                    <CardContent className="p-8">
                      <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                        <div className="flex-shrink-0">
                          <div className="relative">
                            <div className="w-20 h-20 rounded-full overflow-hidden">
                              <img
                                src={testimonial.image || "/placeholder.svg"}
                                alt={testimonial.name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="absolute -bottom-2 -right-2 bg-primary rounded-full p-1">
                              <Quote className="h-4 w-4 text-white" />
                            </div>
                          </div>
                        </div>
                        <div className="flex-grow text-center md:text-left">
                          <p className="text-gray-700 dark:text-gray-300 mb-4 italic">"{testimonial.quote}"</p>
                          <div>
                            <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                            <p className="text-gray-600 dark:text-gray-400">{testimonial.role}</p>
                            <p className="text-primary text-sm">{testimonial.company}</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setAutoplay(false)
                  setCurrentIndex(index)
                }}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? "bg-primary" : "bg-gray-300 dark:bg-gray-700"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <Button
            variant="outline"
            size="icon"
            className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 md:-translate-x-full rounded-full hidden md:flex"
            onClick={handlePrev}
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 md:translate-x-full rounded-full hidden md:flex"
            onClick={handleNext}
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}

