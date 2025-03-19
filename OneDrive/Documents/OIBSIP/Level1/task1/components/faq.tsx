"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQ() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const faqs = [
    {
      question: "Who can apply for internships at Oasis Infobyte?",
      answer:
        "Our internships are open to students pursuing undergraduate or postgraduate degrees in computer science, IT, or related fields. We also welcome students from other disciplines who have a strong interest and basic knowledge in technology.",
    },
    {
      question: "Are the internships paid or unpaid?",
      answer:
        "We offer both paid and unpaid internships depending on the program and your experience level. All internships come with a certificate of completion and the opportunity to work on real-world projects that enhance your portfolio.",
    },
    {
      question: "What is the duration of the internships?",
      answer:
        "Most of our internship programs run for 6-12 weeks, with flexible timing options to accommodate your academic schedule. The exact duration varies by program and is specified in the internship description.",
    },
    {
      question: "Is the internship remote or in-person?",
      answer:
        "We offer both remote and in-person internship options. Due to the global situation, many of our internships are currently conducted remotely, but we also have in-office opportunities at our locations in major cities.",
    },
    {
      question: "What kind of support will I receive during the internship?",
      answer:
        "You'll be assigned a mentor who will guide you throughout the internship. We also provide regular feedback sessions, technical resources, and access to our learning platform to help you succeed in your projects.",
    },
    {
      question: "Will I receive a certificate after completing the internship?",
      answer:
        "Yes, all interns who successfully complete their projects and meet the program requirements receive an official certificate from Oasis Infobyte, which is recognized in the industry.",
    },
    {
      question: "Can the internship lead to a full-time job opportunity?",
      answer:
        "While we can't guarantee employment, many of our past interns have been offered full-time positions based on their performance. We also provide placement assistance and connect top-performing interns with our industry partners.",
    },
    {
      question: "How can I apply for an internship?",
      answer:
        "You can apply through our website by filling out the application form and uploading your resume. We review applications on a rolling basis and will contact you for the next steps if your profile matches our requirements.",
    },
  ]

  return (
    <section id="faq" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Find answers to common questions about our internship programs and services
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <AccordionItem value={`item-${index}`}>
                  <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-gray-700 dark:text-gray-300">{faq.answer}</AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}

