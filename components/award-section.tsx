"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "framer-motion"
import {
  Trophy,
  Medal,
  Award,
  Star,
  Crown,
  Zap,
  Calendar,
  MapPin,
  Users,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Target,
  BookOpen,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image";

const awards = [
  {
    id: 1,
    title: "🎗️Best Youth Leader Award🎗️",
    institution: "IP  (IPTSE- Intellactual Property Tatent Search Examination)",
    year: "2024",
    category: "Student | Faculty",
    description:
      "• All Indian Best Youth Leader Award in the Intellectual Property Talent Search Examination.",
    icon: Trophy,
    color: "from-blue-500 to-cyan-500",
    participants: "All Indian Rank 1",
    location: "Delhi",
    image: "/iptes-award.jpg?height=400&width=400",
    featured: true,
    details: [
      "All Indian Best Youth Leader Award (University Category).",
      "Intellectual Property Talent Search Examination.",
      "Copyrights, patents, and trademarks knowledge.",
      "Date: 19th November 2024",
    ],
  },
  {
    id: 2,
    title: "Exploration of Solar System",
    institution: "🏦 IIRS-ISRO",
    year: "2024",
    category: "Student",
    description:
      "I have successfully completed the online course 'Exploration of the Solar System' offered by IIRS-ISRO Dehradun.",
    icon: Star,
    color: "from-yellow-500 to-orange-500",
    participants: "Grade: A+",
    location: "Chatrapati Sambhajinagar",
    image: "/isro-merit.jpg?height=400&width=400",
    featured: true,
    details: [
      'Completed "Exploration of the Solar System" course.',
      "Offered by IIRS-ISRO Dehradun.",
      "Guided by IIRS Nodal Centre, PESCOE Chatrapati Sambhajinagar.",
      "Special Thanks to Prof. Bharati Pawar Ma’am.",
    ],
  },
  {
    id: 3,
    title: "The National Entrepreneurship Challenge",
    institution: "The Entrepreneurship Cell IIT Bombay ",
    year: "2023",
    category: "Entrepreneurship",
    description:
      " National Entrepreneurship Challenge. (Rank 33): The National Entrepreneurship Challenge is a 6-month-long competition.",
    icon: Star,
    color: "from-purple-500 to-pink-500",
    participants: "Rank 33",
    location: "PES College of Engineering Chatrapati Sambhajinagar",
    image: "/e-cell.png?height=300&width=400",
    featured: true,
    details: [
      "Published 2 papers in top-tier conferences",
      "Developed novel ML algorithm for image recognition",
      "Presented findings at international conference",
      "Received $5,000 research grant",
    ],
  },
  {
    id: 4,
    title: "Academic Scholarship Recipient",
    institution: "Tech Foundation",
    year: "2019-2021",
    category: "Scholarship",
    description: "Merit-based scholarship awarded for exceptional academic performance and leadership potential.",
    icon: Medal,
    color: "from-green-500 to-emerald-500",
    participants: "50 recipients nationwide",
    location: "National Selection",
    image: "/placeholder.svg?height=300&width=400",
    featured: false,
    details: [
      "Full tuition coverage for 3 years",
      "Maintained 3.8+ GPA requirement",
      "Completed 100+ community service hours",
      "Participated in leadership development program",
    ],
  },
  {
    id: 5,
    title: "Best Capstone Project",
    institution: "Computer Science Department",
    year: "2021",
    category: "Project",
    description: "Awarded for developing an innovative AI-powered web application that solves real-world problems.",
    icon: Zap,
    color: "from-red-500 to-pink-500",
    participants: "1st place out of 45 projects",
    location: "Project Showcase",
    image: "/placeholder.svg?height=300&width=400",
    featured: false,
    details: [
      "Developed full-stack AI application",
      "Integrated machine learning models",
      "Achieved 95% accuracy in predictions",
      "Deployed to production with 1000+ users",
    ],
  },
  {
    id: 6,
    title: "Student Leadership Award",
    institution: "Student Government Association",
    year: "2020",
    category: "Leadership",
    description: "Recognized for exceptional leadership skills and contribution to student community development.",
    icon: Crown,
    color: "from-indigo-500 to-purple-500",
    participants: "Top 5 student leaders",
    location: "Annual Awards Ceremony",
    image: "/placeholder.svg?height=300&width=400",
    featured: false,
    details: [
      "Led student council for 2 years",
      "Organized 10+ campus events",
      "Increased student engagement by 40%",
      "Implemented new student support programs",
    ],
  },
]

const categories = ["All", "Academic", "Research", "Scholarship", "Project", "Leadership"]

interface Award3DCardProps {
  award: (typeof awards)[0]
  index: number
  isInView: boolean
  onClick: () => void
}

function Award3DCard({ award, index, isInView, onClick }: Award3DCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotateX: 45 }}
      animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : { opacity: 0, y: 50, rotateX: 45 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="relative group cursor-pointer"
      style={{ transformStyle: "preserve-3d" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      whileHover={{
        scale: 1.05,
        rotateY: 5,
        z: 50,
      }}
    >
      <motion.div
        className={`relative bg-card rounded-xl shadow-2xl overflow-hidden ${
          award.featured ? "ring-2 ring-yellow-500/50" : ""
        }`}
        style={{
          transformStyle: "preserve-3d",
          transform: "translateZ(75px)",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        {/* Animated Border */}
        <motion.div
          className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: `conic-gradient(from 0deg, ${award.color.split(" ")[1]}, ${award.color.split(" ")[3]}, ${award.color.split(" ")[1]})`,
            padding: "2px",
          }}
          animate={isHovered ? { rotate: 360 } : { rotate: 0 }}
          transition={{ duration: 2, repeat: isHovered ? Number.POSITIVE_INFINITY : 0, ease: "linear" }}
        >
          <div className="w-full h-full bg-card rounded-xl" />
        </motion.div>

        <div className="relative z-10">
          {award.featured && (
            <div className="absolute top-2 left-2 z-10">
              <Badge className="bg-yellow-500 text-yellow-900 flex items-center gap-1">
                <Sparkles className="w-3 h-3" />
                FEATURED
              </Badge>
            </div>
          )}

          {/* Award Icon */}
          <div className="relative p-6 text-center">
            <motion.div
              className={`inline-flex p-4 rounded-full bg-gradient-to-r ${award.color} mb-4`}
              animate={
                isHovered
                  ? {
                      rotate: [0, 10, -10, 0],
                      scale: [1, 1.1, 1],
                    }
                  : {}
              }
              transition={{ duration: 0.6 }}
            >
              <award.icon className="w-8 h-8 text-white" />
            </motion.div>

            <motion.div
              className="absolute inset-0 pointer-events-none"
              animate={
                isHovered
                  ? {
                      background: [
                        "radial-gradient(circle, transparent 0%, transparent 100%)",
                        "radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 70%)",
                        "radial-gradient(circle, transparent 0%, transparent 100%)",
                      ],
                    }
                  : {}
              }
              transition={{ duration: 1.5, repeat: isHovered ? Number.POSITIVE_INFINITY : 0 }}
            />
          </div>

          {/* Award Details */}
          <div className="px-6 pb-6">
            <div className="flex items-center justify-between mb-2">
              <Badge variant="secondary">{award.category}</Badge>
              <span className="text-sm text-foreground/60 flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                {award.year}
              </span>
            </div>

            <h3 className="text-lg font-semibold mb-2">{award.title}</h3>
            <p className="text-sm text-foreground/60 mb-2">{award.institution}</p>
            <p className="text-sm text-foreground/70 mb-4 line-clamp-3">{award.description}</p>

            <div className="space-y-2 text-xs text-foreground/60">
              <div className="flex items-center gap-1">
                <Users className="w-3 h-3" />
                {award.participants}
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="w-3 h-3" />
                {award.location}
              </div>
            </div>
          </div>

          {/* 3D Glow Effect */}
          <motion.div
            className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"
            style={{
              background: `linear-gradient(45deg, ${award.color.split(" ")[1]}, ${award.color.split(" ")[3]})`,
              filter: "blur(20px)",
              transform: "translateZ(-20px)",
            }}
          />
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function AwardSection() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedAward, setSelectedAward] = useState<(typeof awards)[0] | null>(null)
  const [currentSlide, setCurrentSlide] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const filteredAwards =
    selectedCategory === "All" ? awards : awards.filter((award) => award.category === selectedCategory)

  const featuredAwards = awards.filter((award) => award.featured)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredAwards.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredAwards.length) % featuredAwards.length)
  }

  return (
    <section id="awards" className="py-20 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
            Academic Awards & Achievements
          </h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
            Recognition and honors received during my academic journey, showcasing excellence in studies, research,
            leadership, and contribution to the academic community.
          </p>
        </motion.div>

        {/* Featured Awards Carousel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-semibold mb-8 text-center flex items-center justify-center gap-2">
            <Trophy className="w-6 h-6 text-yellow-500" />
            Featured Achievements
          </h3>

          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden rounded-2xl">
              <motion.div
                className="flex"
                animate={{ x: `-${currentSlide * 100}%` }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                {featuredAwards.map((award, index) => (
                  <div key={award.id} className="w-full flex-shrink-0 px-4">
                    <div className="bg-card rounded-xl shadow-xl overflow-hidden">
                      <div className="grid md:grid-cols-2 gap-6 p-8">
                        <div className="space-y-4">
                          <div className="flex items-center gap-3">
                            <div className={`p-3 rounded-lg bg-gradient-to-r ${award.color}`}>
                              <award.icon className="w-6 h-6 text-white" />
                            </div>
                            <Badge className="bg-yellow-500 text-yellow-900">FEATURED</Badge>
                          </div>

                          <h4 className="text-2xl font-bold">{award.title}</h4>
                          <p className="text-foreground/60">
                            {award.institution} • {award.year}
                          </p>
                          <p className="text-foreground/70">{award.description}</p>

                          <div className="space-y-2">
                            {award.details.map((detail, idx) => (
                              <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="flex items-center gap-2 text-sm text-foreground/70"
                              >
                                <Target className="w-4 h-4 text-green-500" />
                                {detail}
                              </motion.div>
                            ))}
                          </div>
                        </div>

                        <div className="relative">
                          <img
                            src={award.image || "/placeholder.svg"}
                            alt={award.title}
                            className="w-full h-96 object-cover rounded-lg"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg" />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Carousel Controls */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-background/80 rounded-full shadow-lg hover:bg-background transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-background/80 rounded-full shadow-lg hover:bg-background transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Carousel Indicators */}
            <div className="flex justify-center gap-2 mt-6">
              {featuredAwards.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSlide ? "bg-yellow-500" : "bg-muted"
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className="flex items-center gap-2"
            >
              <Award className="w-4 h-4" />
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Awards Grid */}
        <motion.div
          className="relative grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          style={{ perspective: "1000px" }}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {/* Animated Border Container */}
          <motion.div
            className="absolute inset-0 rounded-2xl pointer-events-none"
            style={{
              background: `conic-gradient(from 0deg, #3b82f6, #8b5cf6, #06b6d4, #10b981, #f59e0b, #ef4444, #3b82f6)`,
              padding: "3px",
              opacity: 0.6,
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          >
            <div className="w-full h-full bg-background/50 rounded-2xl" />
          </motion.div>

          {/* Scrolling Border Effect */}
          <motion.div
            className="absolute inset-0 rounded-2xl pointer-events-none overflow-hidden"
            style={{
              background: `linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.3), transparent)`,
            }}
          >
            <motion.div
              className="absolute inset-0 w-full h-full"
              style={{
                background: `linear-gradient(90deg, transparent 0%, rgba(59, 130, 246, 0.8) 50%, transparent 100%)`,
                width: "200%",
              }}
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            />
          </motion.div>

          {/* Pulsing Corner Effects */}
          <motion.div
            className="absolute top-0 left-0 w-8 h-8 bg-blue-500 rounded-full opacity-50"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute top-0 right-0 w-6 h-6 bg-purple-500 rounded-full opacity-50"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.5 }}
          />
          <motion.div
            className="absolute bottom-0 left-0 w-6 h-6 bg-green-500 rounded-full opacity-50"
            animate={{
              scale: [1, 1.4, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{ duration: 1.8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
          />
          <motion.div
            className="absolute bottom-0 right-0 w-8 h-8 bg-orange-500 rounded-full opacity-50"
            animate={{
              scale: [1, 1.6, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{ duration: 2.2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1.5 }}
          />

          {/* Award Cards */}
          {filteredAwards.map((award, index) => (
            <Award3DCard
              key={award.id}
              award={award}
              index={index}
              isInView={isInView}
              onClick={() => setSelectedAward(award)}
            />
          ))}
        </motion.div>

        {/* Award Details Modal */}
        <AnimatePresence>
          {selectedAward && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedAward(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0, rotateY: -90 }}
                animate={{ scale: 1, opacity: 1, rotateY: 0 }}
                exit={{ scale: 0.8, opacity: 0, rotateY: 90 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="relative max-w-4xl w-full max-h-[90vh] bg-card rounded-lg overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Animated Border */}
                <motion.div
                  className="absolute inset-0 rounded-lg"
                  style={{
                    background: `conic-gradient(from 0deg, ${selectedAward.color.split(" ")[1]}, ${selectedAward.color.split(" ")[3]}, ${selectedAward.color.split(" ")[1]})`,
                    padding: "3px",
                  }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                >
                  <div className="w-full h-full bg-card rounded-lg" />
                </motion.div>

                <div className="relative z-10 p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className={`p-3 rounded-lg bg-gradient-to-r ${selectedAward.color}`}>
                        <selectedAward.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold">{selectedAward.title}</h3>
                        <p className="text-foreground/60">{selectedAward.institution}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => setSelectedAward(null)}
                      className="p-2 hover:bg-muted rounded-full transition-colors"
                    >
                      ✕
                    </button>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold mb-2">Description</h4>
                        <p className="text-foreground/70">{selectedAward.description}</p>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">Key Achievements</h4>
                        <ul className="space-y-2">
                          {selectedAward.details.map((detail, index) => (
                            <motion.li
                              key={index}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 }}
                              className="flex items-center gap-2 text-sm text-foreground/70"
                            >
                              <Target className="w-4 h-4 text-green-500" />
                              {detail}
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-foreground/60">Year:</span>
                          <p className="font-medium">{selectedAward.year}</p>
                        </div>
                        <div>
                          <span className="text-foreground/60">Category:</span>
                          <p className="font-medium">{selectedAward.category}</p>
                        </div>
                        <div>
                          <span className="text-foreground/60">Participants:</span>
                          <p className="font-medium">{selectedAward.participants}</p>
                        </div>
                        <div>
                          <span className="text-foreground/60">Location:</span>
                          <p className="font-medium">{selectedAward.location}</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <img
                        src={selectedAward.image || "/placeholder.svg"}
                        alt={selectedAward.title}
                        className="w-full h-64 object-cover rounded-lg mb-4"
                      />
                      <Button className="w-full" variant="outline">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Certificate
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-lg p-8"
        >
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-yellow-500 mb-2">{awards.length}</div>
              <div className="text-foreground/70">Total Awards</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-500 mb-2">{awards.filter((a) => a.featured).length}</div>
              <div className="text-foreground/70">Featured</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-500 mb-2">
                {new Set(awards.map((a) => a.category)).size}
              </div>
              <div className="text-foreground/70">Categories</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-500 mb-2">4</div>
              <div className="text-foreground/70">Years Active</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
