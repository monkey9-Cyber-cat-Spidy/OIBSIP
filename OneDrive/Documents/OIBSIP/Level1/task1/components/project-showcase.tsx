"use client"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Code, Database, Smartphone, Palette } from "lucide-react"

export default function ProjectShowcase() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const projectCategories = [
    { id: "web", name: "Web Development", icon: <Code className="h-5 w-5" /> },
    { id: "data", name: "Data Science", icon: <Database className="h-5 w-5" /> },
    { id: "mobile", name: "Mobile Apps", icon: <Smartphone className="h-5 w-5" /> },
    { id: "design", name: "UI/UX Design", icon: <Palette className="h-5 w-5" /> },
  ]

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "web",
      image: "/placeholder.svg?height=300&width=500",
      shortDescription: "A full-stack e-commerce website with payment integration",
      fullDescription:
        "This project involved building a complete e-commerce platform with user authentication, product catalog, shopping cart, and payment processing using Stripe. Students learned React.js for the frontend, Node.js and Express for the backend, and MongoDB for the database.",
      technologies: ["React.js", "Node.js", "Express", "MongoDB", "Stripe API"],
      outcomes: [
        "Implemented responsive design principles",
        "Created RESTful API endpoints",
        "Integrated secure payment processing",
        "Deployed application to cloud hosting",
      ],
      studentQuote:
        "Working on this e-commerce project gave me hands-on experience with the entire development stack. I learned how to handle user authentication, manage state, and integrate third-party APIs.",
    },
    {
      id: 2,
      title: "Customer Churn Prediction",
      category: "data",
      image: "/placeholder.svg?height=300&width=500",
      shortDescription: "Machine learning model to predict customer churn for a telecom company",
      fullDescription:
        "In this project, students analyzed telecom customer data to build a predictive model that identifies customers at risk of churning. The project involved data cleaning, exploratory data analysis, feature engineering, and implementing various machine learning algorithms to find the best performing model.",
      technologies: ["Python", "Pandas", "Scikit-learn", "Matplotlib", "Jupyter Notebooks"],
      outcomes: [
        "Performed comprehensive data cleaning and preprocessing",
        "Conducted exploratory data analysis with visualizations",
        "Implemented and compared multiple ML algorithms",
        "Created an interactive dashboard for business insights",
      ],
      studentQuote:
        "This project taught me how to apply machine learning to solve real business problems. I learned the entire data science workflow from data cleaning to model deployment.",
    },
    {
      id: 3,
      title: "Fitness Tracking App",
      category: "mobile",
      image: "/placeholder.svg?height=300&width=500",
      shortDescription: "Cross-platform mobile app for tracking workouts and nutrition",
      fullDescription:
        "Students developed a comprehensive fitness tracking application that allows users to log workouts, track nutrition, set goals, and view progress over time. The app features user authentication, data visualization, and integration with health APIs.",
      technologies: ["React Native", "Firebase", "Redux", "Chart.js", "Health API"],
      outcomes: [
        "Built cross-platform mobile application",
        "Implemented secure user authentication",
        "Created interactive data visualizations",
        "Integrated with device health sensors",
      ],
      studentQuote:
        "Developing this fitness app gave me practical experience with mobile development. I learned how to create a seamless user experience across different devices and how to work with device sensors.",
    },
    {
      id: 4,
      title: "Banking Dashboard Redesign",
      category: "design",
      image: "/placeholder.svg?height=300&width=500",
      shortDescription: "UX/UI redesign of a banking application dashboard",
      fullDescription:
        "This project involved redesigning the dashboard of a banking application to improve user experience and accessibility. Students conducted user research, created wireframes and prototypes, and performed usability testing to validate their designs.",
      technologies: ["Figma", "Adobe XD", "User Research", "Prototyping", "Usability Testing"],
      outcomes: [
        "Conducted user interviews and created personas",
        "Designed wireframes and high-fidelity mockups",
        "Built interactive prototypes",
        "Performed usability testing and iteration",
      ],
      studentQuote:
        "This project taught me the importance of user-centered design. I learned how to translate user needs into effective interface designs and how to validate my design decisions through testing.",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Student Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Explore real-world projects completed by our interns that showcase the practical skills and experience
            gained during the program
          </p>
        </motion.div>

        <Tabs defaultValue="web" className="w-full max-w-5xl mx-auto">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
            {projectCategories.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className="text-sm md:text-base flex items-center gap-2"
              >
                {category.icon} {category.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {projectCategories.map((category) => (
            <TabsContent key={category.id} value={category.id}>
              <div className="grid md:grid-cols-2 gap-6">
                {projects
                  .filter((project) => project.category === category.id)
                  .map((project) => (
                    <motion.div
                      key={project.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Card className="h-full flex flex-col">
                        <div className="overflow-hidden">
                          <img
                            src={project.image || "/placeholder.svg"}
                            alt={project.title}
                            className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                          />
                        </div>
                        <CardHeader>
                          <CardTitle>{project.title}</CardTitle>
                          <CardDescription>{project.shortDescription}</CardDescription>
                        </CardHeader>
                        <CardContent className="flex-grow">
                          <div className="flex flex-wrap gap-2 mb-4">
                            {project.technologies.slice(0, 3).map((tech, index) => (
                              <span key={index} className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs">
                                {tech}
                              </span>
                            ))}
                            {project.technologies.length > 3 && (
                              <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-full text-xs">
                                +{project.technologies.length - 3} more
                              </span>
                            )}
                          </div>
                        </CardContent>
                        <CardFooter>
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button variant="outline" className="w-full">
                                View Details
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="max-w-3xl">
                              <DialogHeader>
                                <DialogTitle className="text-2xl">{project.title}</DialogTitle>
                                <DialogDescription className="text-base">{project.shortDescription}</DialogDescription>
                              </DialogHeader>
                              <div className="grid md:grid-cols-2 gap-6 mt-4">
                                <div>
                                  <img
                                    src={project.image || "/placeholder.svg"}
                                    alt={project.title}
                                    className="w-full h-auto rounded-lg"
                                  />
                                  <div className="mt-4">
                                    <h4 className="font-semibold mb-2">Technologies Used</h4>
                                    <div className="flex flex-wrap gap-2">
                                      {project.technologies.map((tech, index) => (
                                        <span
                                          key={index}
                                          className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs"
                                        >
                                          {tech}
                                        </span>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                                <div className="space-y-4">
                                  <div>
                                    <h4 className="font-semibold mb-2">Project Description</h4>
                                    <p className="text-gray-700 dark:text-gray-300">{project.fullDescription}</p>
                                  </div>
                                  <div>
                                    <h4 className="font-semibold mb-2">Learning Outcomes</h4>
                                    <ul className="space-y-1">
                                      {project.outcomes.map((outcome, index) => (
                                        <li key={index} className="flex items-start">
                                          <span className="text-primary mr-2">•</span>
                                          <span className="text-gray-700 dark:text-gray-300">{outcome}</span>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                  <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg italic">
                                    <p className="text-gray-700 dark:text-gray-300">"{project.studentQuote}"</p>
                                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">- Former Intern</p>
                                  </div>
                                </div>
                              </div>
                            </DialogContent>
                          </Dialog>
                        </CardFooter>
                      </Card>
                    </motion.div>
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}

