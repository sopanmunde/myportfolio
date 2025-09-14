"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Calendar, MapPin, Award } from "lucide-react"

const timeline = [
  {
    year: "2024",
    title: "Senior Full Stack Developer",
    company: "Tech Innovations Inc.",
    description: "Leading AI-powered web applications development",
    type: "work",
  },
  {
    year: "2023",
    title: "AI Certification",
    company: "Stanford University",
    description: "Machine Learning Specialization",
    type: "education",
  },
  {
    year: "2022",
    title: "Full Stack Developer",
    company: "Digital Solutions Ltd.",
    description: "Developed scalable web applications using React and Node.js",
    type: "work",
  },
  {
    year: "2021",
    title: "Computer Science Degree",
    company: "University of Technology",
    description: "Bachelor of Science in Computer Science",
    type: "education",
  },
]

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-20 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
            I'm a passionate developer with expertise spanning multiple domains - from artificial intelligence and
            machine learning to full-stack web development. My journey in technology has been driven by curiosity and a
            desire to create meaningful solutions that make a difference.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="bg-card p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <Award className="w-6 h-6 text-blue-500" />
                Professional Journey
              </h3>
              <p className="text-foreground/70 leading-relaxed mb-4">
                With over 5 years of experience in software development, I've had the privilege of working on diverse
                projects ranging from AI-powered applications to large-scale web platforms. My expertise lies in
                bridging the gap between complex technical solutions and user-friendly interfaces.
              </p>
              <p className="text-foreground/70 leading-relaxed">
                I'm particularly passionate about emerging technologies like machine learning, blockchain, and IoT, and
                how they can be integrated to create innovative solutions for real-world problems.
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <MapPin className="w-6 h-6 text-purple-500" />
                Current Focus
              </h3>
              <ul className="space-y-2 text-foreground/70">
                <li>• Building AI-powered web applications</li>
                <li>• Developing scalable microservices architectures</li>
                <li>• Contributing to open-source projects</li>
                <li>• Mentoring junior developers</li>
                <li>• Research in computer vision and NLP</li>
              </ul>
            </div>
          </motion.div>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <h3 className="text-2xl font-semibold mb-8 flex items-center gap-2">
              <Calendar className="w-6 h-6 text-green-500" />
              Timeline
            </h3>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500" />

              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="relative pl-12 pb-8"
                >
                  {/* Timeline Dot */}
                  <div
                    className={`absolute left-2 w-4 h-4 rounded-full border-2 ${
                      item.type === "work" ? "bg-blue-500 border-blue-500" : "bg-purple-500 border-purple-500"
                    }`}
                  />

                  <div className="bg-card p-4 rounded-lg shadow-md">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-sm font-semibold text-blue-500">{item.year}</span>
                      <span
                        className={`px-2 py-1 text-xs rounded-full ${
                          item.type === "work" ? "bg-blue-500/20 text-blue-500" : "bg-purple-500/20 text-purple-500"
                        }`}
                      >
                        {item.type}
                      </span>
                    </div>
                    <h4 className="font-semibold text-foreground">{item.title}</h4>
                    <p className="text-sm text-foreground/60 mb-1">{item.company}</p>
                    <p className="text-sm text-foreground/70">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
