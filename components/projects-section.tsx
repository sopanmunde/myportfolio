"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { ExternalLink, Github, Eye, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const projects = [
  {
    id: 1,
    title: "AI-Powered Analytics Dashboard",
    description:
      "A comprehensive analytics platform using machine learning to provide predictive insights for business intelligence.",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["React", "Python", "TensorFlow", "D3.js", "PostgreSQL"],
    category: "AI",
    github: "#",
    demo: "#",
    featured: true,
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    description:
      "Full-stack e-commerce solution with real-time inventory management, payment processing, and admin dashboard.",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["Next.js", "Node.js", "MongoDB", "Stripe", "Redis"],
    category: "Web",
    github: "#",
    demo: "#",
    featured: true,
  },
  {
    id: 3,
    title: "IoT Smart Home System",
    description: "Connected home automation system with mobile app control, voice commands, and energy monitoring.",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["React Native", "Arduino", "MQTT", "Firebase", "TensorFlow Lite"],
    category: "IoT",
    github: "#",
    demo: "#",
    featured: false,
  },
  {
    id: 4,
    title: "Computer Vision OCR Tool",
    description: "Advanced OCR application using deep learning for text extraction from images and documents.",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["Python", "OpenCV", "PyTorch", "FastAPI", "Docker"],
    category: "AI",
    github: "#",
    demo: "#",
    featured: false,
  },
  {
    id: 5,
    title: "Real-time Chat Application",
    description: "Scalable chat platform with video calls, file sharing, and end-to-end encryption.",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["React", "Socket.io", "WebRTC", "Node.js", "MongoDB"],
    category: "Web",
    github: "#",
    demo: "#",
    featured: false,
  },
  {
    id: 6,
    title: "Blockchain Voting System",
    description: "Secure and transparent voting platform built on blockchain technology with smart contracts.",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["Solidity", "Web3.js", "React", "Ethereum", "IPFS"],
    category: "Blockchain",
    github: "#",
    demo: "#",
    featured: true,
  },
]

const categories = ["All", "AI", "Web", "IoT", "Blockchain"]

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedProject, setSelectedProject] = useState(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const filteredProjects =
    selectedCategory === "All" ? projects : projects.filter((project) => project.category === selectedCategory)

  return (
    <section id="projects" className="py-20 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
            A showcase of my recent work spanning AI, web development, IoT, and blockchain technologies. Each project
            represents a unique challenge and innovative solution.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className="flex items-center gap-2"
            >
              <Filter className="w-4 h-4" />
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
              className={`bg-card rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 ${
                project.featured ? "ring-2 ring-blue-500/20" : ""
              }`}
              whileHover={{ y: -5 }}
            >
              {project.featured && (
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-semibold px-3 py-1 text-center">
                  FEATURED
                </div>
              )}

              <div className="relative group">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <motion.a
                    href={project.github}
                    className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Github className="w-5 h-5 text-white" />
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ExternalLink className="w-5 h-5 text-white" />
                  </motion.a>
                  <motion.button
                    onClick={() => setSelectedProject(project)}
                    className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Eye className="w-5 h-5 text-white" />
                  </motion.button>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <Badge variant="secondary">{project.category}</Badge>
                </div>

                <p className="text-foreground/70 text-sm mb-4 line-clamp-3">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="px-2 py-1 bg-muted text-xs rounded-full">
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="px-2 py-1 bg-muted text-xs rounded-full">+{project.tags.length - 3} more</span>
                  )}
                </div>

                <div className="flex gap-2">
                  <Button size="sm" variant="outline" asChild>
                    <a href={project.github} className="flex items-center gap-1">
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" asChild>
                    <a href={project.demo} className="flex items-center gap-1">
                      <ExternalLink className="w-4 h-4" />
                      Demo
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-card rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img
                  src={selectedProject.image || "/placeholder.svg"}
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover"
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 bg-black/50 rounded-full text-white hover:bg-black/70"
                >
                  ✕
                </button>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold">{selectedProject.title}</h3>
                  <Badge>{selectedProject.category}</Badge>
                </div>

                <p className="text-foreground/70 mb-6">{selectedProject.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-muted text-sm rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <Button asChild>
                    <a href={selectedProject.github} className="flex items-center gap-2">
                      <Github className="w-4 h-4" />
                      View Code
                    </a>
                  </Button>
                  <Button variant="outline" asChild>
                    <a href={selectedProject.demo} className="flex items-center gap-2">
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  )
}
