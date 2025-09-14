"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Code, Brain, Globe, Wrench } from "lucide-react"

const skillCategories = [
  {
    title: "Programming",
    icon: Code,
    color: "from-blue-500 to-cyan-500",
    skills: [
      { name: "Python", level: 95 },
      { name: "JavaScript", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Java", level: 80 },
      { name: "C++", level: 75 },
    ],
  },
  {
    title: "AI/ML",
    icon: Brain,
    color: "from-purple-500 to-pink-500",
    skills: [
      { name: "TensorFlow", level: 90 },
      { name: "PyTorch", level: 85 },
      { name: "OpenCV", level: 80 },
      { name: "Pandas", level: 95 },
      { name: "Scikit-learn", level: 88 },
    ],
  },
  {
    title: "Web Development",
    icon: Globe,
    color: "from-green-500 to-emerald-500",
    skills: [
      { name: "Next.js", level: 92 },
      { name: "React", level: 90 },
      { name: "Node.js", level: 85 },
      { name: "TailwindCSS", level: 88 },
      { name: "GraphQL", level: 75 },
    ],
  },
  {
    title: "Tools & Technologies",
    icon: Wrench,
    color: "from-orange-500 to-red-500",
    skills: [
      { name: "Git", level: 95 },
      { name: "Docker", level: 80 },
      { name: "AWS", level: 75 },
      { name: "Figma", level: 70 },
      { name: "VS Code", level: 98 },
    ],
  },
]

export default function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="skills" className="py-20" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
            A comprehensive overview of my technical skills across multiple domains, from programming languages to
            cutting-edge AI technologies.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              className="bg-card p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color}`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => {
                  // Calculate real-time varying percentage
                  const baseLevel = skill.level
                  const variation = Math.sin(Date.now() / 1000 + skillIndex * 0.5) * 3 // ±3% variation
                  const currentLevel = Math.max(0, Math.min(100, baseLevel + variation))

                  return (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <motion.span
                          className="text-sm text-foreground/60"
                          animate={{ opacity: [0.6, 1, 0.6] }}
                          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                        >
                          {Math.round(currentLevel)}%
                        </motion.span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                        <motion.div
                          className={`h-2 rounded-full bg-gradient-to-r ${category.color} relative`}
                          initial={{ width: 0 }}
                          animate={
                            isInView
                              ? {
                                  width: `${currentLevel}%`,
                                  boxShadow: [
                                    "0 0 0px rgba(59, 130, 246, 0.5)",
                                    "0 0 10px rgba(59, 130, 246, 0.8)",
                                    "0 0 0px rgba(59, 130, 246, 0.5)",
                                  ],
                                }
                              : { width: 0 }
                          }
                          transition={{
                            width: {
                              duration: 1,
                              delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.5,
                              ease: "easeOut",
                            },
                            boxShadow: {
                              duration: 2,
                              repeat: Number.POSITIVE_INFINITY,
                              ease: "easeInOut",
                            },
                          }}
                        >
                          {/* Animated shine effect */}
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                            animate={{
                              x: ["-100%", "100%"],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Number.POSITIVE_INFINITY,
                              ease: "linear",
                              delay: categoryIndex * 0.2 + skillIndex * 0.1 + 1,
                            }}
                          />
                        </motion.div>
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* Skill Tags Alternative View */}
              <div className="mt-6 pt-4 border-t border-border">
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <motion.span
                      key={skill.name}
                      className={`px-3 py-1 text-xs rounded-full bg-gradient-to-r ${category.color} text-white`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      animate={{
                        opacity: [0.8, 1, 0.8],
                      }}
                      transition={{
                        opacity: {
                          duration: 3,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "easeInOut",
                          delay: Math.random() * 2,
                        },
                      }}
                    >
                      {skill.name}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Interactive Skill Cloud */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-semibold mb-8">Technology Stack</h3>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {[
              "React",
              "Next.js",
              "TypeScript",
              "Python",
              "TensorFlow",
              "Node.js",
              "AWS",
              "Docker",
              "GraphQL",
              "MongoDB",
              "PostgreSQL",
              "Redis",
              "Kubernetes",
              "Jenkins",
              "Git",
              "Figma",
              "Tailwind CSS",
              "Framer Motion",
            ].map((tech, index) => (
              <motion.div
                key={tech}
                className="px-4 py-2 bg-muted rounded-full text-sm font-medium hover:bg-muted/80 cursor-pointer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                transition={{ duration: 0.5, delay: 1.2 + index * 0.05 }}
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
