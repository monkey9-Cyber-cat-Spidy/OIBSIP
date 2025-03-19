"use client"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Clock, Users, Award, CheckCircle, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function InternshipPrograms() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const programs = [
    {
      id: "web-dev",
      title: "Web Development",
      description: "Learn front-end and back-end technologies to build responsive and dynamic websites.",
      duration: "8 weeks",
      eligibility: "Students pursuing CS/IT or related fields",
      skills: ["HTML/CSS", "JavaScript", "React.js", "Node.js", "MongoDB"],
      benefits: [
        "Build a portfolio of 3+ web projects",
        "Learn modern frameworks and libraries",
        "Deploy applications to production",
        "Collaborate using version control",
      ],
    },
    {
      id: "data-science",
      title: "Data Science",
      description: "Master data analysis, visualization, and machine learning techniques.",
      duration: "10 weeks",
      eligibility: "Students with basic knowledge of statistics and programming",
      skills: ["Python", "Pandas", "NumPy", "Matplotlib", "Scikit-learn"],
      benefits: [
        "Work with real-world datasets",
        "Build predictive models",
        "Create interactive dashboards",
        "Implement machine learning algorithms",
      ],
    },
    {
      id: "mobile-dev",
      title: "Mobile App Development",
      description: "Create native and cross-platform mobile applications for iOS and Android.",
      duration: "8 weeks",
      eligibility: "Students with basic programming knowledge",
      skills: ["React Native", "Flutter", "Firebase", "RESTful APIs", "State Management"],
      benefits: [
        "Develop and publish mobile applications",
        "Implement responsive UI designs",
        "Integrate with backend services",
        "Test on real devices and emulators",
      ],
    },
    {
      id: "ui-ux",
      title: "UI/UX Design",
      description: "Learn to create user-centered designs and intuitive interfaces.",
      duration: "6 weeks",
      eligibility: "Students interested in design (no prior experience required)",
      skills: ["Figma", "Adobe XD", "Wireframing", "Prototyping", "User Research"],
      benefits: [
        "Create a design portfolio",
        "Conduct usability testing",
        "Design responsive interfaces",
        "Collaborate with developers",
      ],
    },
  ]

  const processSteps = [
    {
      title: "Application",
      description: "Submit your application with your resume and area of interest.",
      icon: <Users className="h-10 w-10 text-primary" />,
    },
    {
      title: "Selection",
      description: "Selected candidates will be notified via email for the next steps.",
      icon: <CheckCircle className="h-10 w-10 text-primary" />,
    },
    {
      title: "Internship",
      description: "Complete projects and assignments with guidance from mentors.",
      icon: <Clock className="h-10 w-10 text-primary" />,
    },
    {
      title: "Certification",
      description: "Receive a recognized certificate upon successful completion.",
      icon: <Award className="h-10 w-10 text-primary" />,
    },
  ]

  return (
    <section id="internships" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Internship Programs</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Explore our diverse range of internship opportunities designed to give you practical experience and
            industry-relevant skills
          </p>
        </motion.div>

        <Tabs defaultValue="web-dev" className="w-full max-w-5xl mx-auto">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
            {programs.map((program) => (
              <TabsTrigger key={program.id} value={program.id} className="text-sm md:text-base">
                {program.title}
              </TabsTrigger>
            ))}
          </TabsList>

          {programs.map((program) => (
            <TabsContent key={program.id} value={program.id}>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">{program.title} Internship</CardTitle>
                  <CardDescription className="text-base">{program.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-lg mb-2">Duration</h4>
                        <p className="flex items-center text-gray-700 dark:text-gray-300">
                          <Clock className="h-4 w-4 mr-2 text-primary" />
                          {program.duration}
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-lg mb-2">Eligibility</h4>
                        <p className="flex items-center text-gray-700 dark:text-gray-300">
                          <Users className="h-4 w-4 mr-2 text-primary" />
                          {program.eligibility}
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-lg mb-2">Skills You'll Learn</h4>
                        <div className="flex flex-wrap gap-2">
                          {program.skills.map((skill, index) => (
                            <span key={index} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-lg mb-2">Benefits</h4>
                      <ul className="space-y-2">
                        {program.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-start">
                            <CheckCircle className="h-5 w-5 mr-2 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full sm:w-auto">
                    <Link href="#apply">
                      Apply Now <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
          ))}
        </Tabs>

        <div className="mt-20">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">Application Process</h3>
          <div className="grid md:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                className="relative"
              >
                <div className="text-center">
                  <div className="mx-auto flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-4">
                    {step.icon}
                  </div>
                  <h4 className="text-xl font-semibold mb-2">{step.title}</h4>
                  <p className="text-gray-700 dark:text-gray-300">{step.description}</p>
                </div>

                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gray-200 dark:bg-gray-700 transform -translate-x-1/2">
                    <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 rotate-45">
                      <ArrowRight className="h-4 w-4 text-gray-400" />
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

