"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Users, Compass, Calendar, Award, Lightbulb } from "lucide-react"

export default function AdditionalServices() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const services = [
    {
      title: "Workshops & Webinars",
      description:
        "Participate in specialized workshops and webinars conducted by industry experts on emerging technologies and trends.",
      icon: <BookOpen className="h-10 w-10 text-primary" />,
    },
    {
      title: "Mentorship Program",
      description:
        "Get personalized guidance from experienced professionals who will help you navigate your career path and develop essential skills.",
      icon: <Users className="h-10 w-10 text-primary" />,
    },
    {
      title: "Career Guidance",
      description:
        "Receive expert advice on career planning, job search strategies, and interview preparation to help you land your dream job.",
      icon: <Compass className="h-10 w-10 text-primary" />,
    },
    {
      title: "Networking Events",
      description:
        "Connect with industry professionals, alumni, and fellow students through regular networking events and meetups.",
      icon: <Calendar className="h-10 w-10 text-primary" />,
    },
    {
      title: "Certification Programs",
      description:
        "Earn industry-recognized certifications that validate your skills and enhance your resume for better job prospects.",
      icon: <Award className="h-10 w-10 text-primary" />,
    },
    {
      title: "Innovation Lab",
      description:
        "Access our state-of-the-art innovation lab to experiment with new technologies and work on personal projects.",
      icon: <Lightbulb className="h-10 w-10 text-primary" />,
    },
  ]

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Additional Services</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Beyond internships, we offer a range of services to support your professional development and career growth
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <div className="mb-4">{service.icon}</div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

