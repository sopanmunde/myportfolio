"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { useInView } from "framer-motion"
import { Camera, Download, Heart, Share2, Eye, X, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const photos = [
  {
    id: 1,
    src: "/iptes-award.jpg?height=400&width=600",
    title: "Youth Leader- 2024",
    description: " All Indian Best Youth Leader Award in the Intellectual Property Talent Search Examination in the 'Best Youth Leader Category'",
    category: "Achievement",
    date: "2024-11-19",
    location: "Delhi, India",
    likes: 124,
    featured: true,
  },
  {
    id: 2,
    src: "/e-cell.png?height=400&width=600",
    title: "Entrepreneure",
    description: "The National Entrepreneurship Challenge. (Rank 33): The National Entrepreneurship Challenge is a 6-month-long competition.",
    category: "Achievement",
    Date: "2023",
    location: "PESCOE Chh.Sambhajinagar, Maharastra",
    likes: 89,
    featured: true,
  },
  {
    id: 3,
    src: "/isro-merit.jpg?height=400&width=600",
    title: "IIRS-ISRO Merit Certificate",
    description: "Winning first place at the Global Tech Hackathon with our blockchain solution",
    category: "Achievement",
    date: "2024-05-10",
    location: "India",
    likes: 256,
    featured: true,
  },
  {
    id: 4,
    src: "/copyright.png?height=400&width=600",
    title: "Copyright",
    description: "CSE Departmental Magazine 2022-23",
    category: "Achivement",
    date: "2023-06-05",
    location: "Chh.Sambhajinagar",
    likes: 178,
    featured: true,
  },
  {
    id: 5,
    src: "/copyright-2.png?height=400&width=600",
    title: "Copyright",
    description: "CSE Departmental Magazine 2023-24",
    category: "Achievement",
    date: "2024-05-18",
    location: "Patent Office",
    likes: 203,
    featured: false,
  },
  {
    id: 6,
    src: "/?height=400&width=600",
    title: "Code Review Session",
    description: "Collaborative code review session with the engineering team",
    category: "Work",
    date: "2023-04-22",
    location: "Office",
    likes: 67,
    featured: false,
  },
  {
    id: 7,
    src: "/placeholder.svg?height=400&width=600",
    title: "Tech Meetup",
    description: "Networking at the local tech meetup discussing emerging technologies",
    category: "Networking",
    date: "2023-03-14",
    location: "Community Center",
    likes: 145,
    featured: false,
  },
  {
    id: 8,
    src: "/placeholder.svg?height=400&width=600",
    title: "Innovation Award",
    description: "Receiving the Innovation Excellence Award for outstanding contributions",
    category: "Achievement",
    date: "2023-02-28",
    location: "Awards Ceremony",
    likes: 312,
    featured: false,
  },
]

const categories = ["All", "Speaking", "Work", "Achievement", "Teaching", "Networking"]

interface Photo3DCardProps {
  photo: (typeof photos)[0]
  index: number
  isInView: boolean
  onClick: () => void
}

function Photo3DCard({ photo, index, isInView, onClick }: Photo3DCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x)
  const mouseYSpring = useSpring(y)

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return

    const rect = ref.current.getBoundingClientRect()
    const width = rect.width
    const height = rect.height

    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top

    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5

    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
    setIsHovered(false)
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, rotateX: 45 }}
      animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : { opacity: 0, y: 50, rotateX: 45 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="relative group cursor-pointer"
      style={{
        rotateY: rotateY,
        rotateX: rotateX,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      whileHover={{ z: 50 }}
    >
      <motion.div
        className={`relative bg-card rounded-xl shadow-2xl overflow-hidden ${
          photo.featured ? "ring-2 ring-yellow-500/50" : ""
        }`}
        style={{
          transformStyle: "preserve-3d",
          transform: "translateZ(75px)",
        }}
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        {photo.featured && (
          <div className="absolute top-2 left-2 z-10">
            <Badge className="bg-yellow-500 text-yellow-900">FEATURED</Badge>
          </div>
        )}

        <div className="relative overflow-hidden">
          <img
            src={photo.src || "/placeholder.svg"}
            alt={photo.title}
            className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
          />

          {/* 3D Overlay Effect */}
          <div
            className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              transform: "translateZ(25px)",
            }}
          />

          {/* Hover Actions */}
          <motion.div
            className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4"
            style={{
              transform: "translateZ(50px)",
            }}
          >
            <motion.button
              className="p-3 bg-white/20 rounded-full hover:bg-white/30 transition-colors backdrop-blur-sm"
              whileHover={{ scale: 1.2, rotateY: 180 }}
              whileTap={{ scale: 0.9 }}
            >
              <Eye className="w-5 h-5 text-white" />
            </motion.button>
            <motion.button
              className="p-3 bg-white/20 rounded-full hover:bg-white/30 transition-colors backdrop-blur-sm"
              whileHover={{ scale: 1.2, rotateX: 180 }}
              whileTap={{ scale: 0.9 }}
            >
              <Heart className="w-5 h-5 text-white" />
            </motion.button>
            <motion.button
              className="p-3 bg-white/20 rounded-full hover:bg-white/30 transition-colors backdrop-blur-sm"
              whileHover={{ scale: 1.2, rotateZ: 180 }}
              whileTap={{ scale: 0.9 }}
            >
              <Share2 className="w-5 h-5 text-white" />
            </motion.button>
          </motion.div>
        </div>

        <motion.div
          className="p-6"
          style={{
            transform: "translateZ(25px)",
          }}
        >
          <div className="flex items-center justify-between mb-2">
            <Badge variant="secondary">{photo.category}</Badge>
            <div className="flex items-center gap-1 text-sm text-foreground/60">
              <Heart className="w-4 h-4" />
              {photo.likes}
            </div>
          </div>

          <h3 className="text-lg font-semibold mb-2">{photo.title}</h3>
          <p className="text-sm text-foreground/70 mb-3 line-clamp-2">{photo.description}</p>

          <div className="flex items-center justify-between text-xs text-foreground/50">
            <span>{photo.date}</span>
            <span>{photo.location}</span>
          </div>
        </motion.div>

        {/* 3D Border Effect */}
        <motion.div
          className="absolute inset-0 rounded-xl border-2 border-transparent bg-gradient-to-r from-blue-500/50 to-purple-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            transform: "translateZ(-10px)",
            filter: "blur(10px)",
          }}
        />
      </motion.div>
    </motion.div>
  )
}

export default function PhotoSection() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedPhoto, setSelectedPhoto] = useState<(typeof photos)[0] | null>(null)
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const filteredPhotos =
    selectedCategory === "All" ? photos : photos.filter((photo) => photo.category === selectedCategory)

  const openLightbox = (photo: (typeof photos)[0]) => {
    setSelectedPhoto(photo)
    setCurrentPhotoIndex(photos.findIndex((p) => p.id === photo.id))
  }

  const closeLightbox = () => {
    setSelectedPhoto(null)
  }

  const nextPhoto = () => {
    const nextIndex = (currentPhotoIndex + 1) % photos.length
    setCurrentPhotoIndex(nextIndex)
    setSelectedPhoto(photos[nextIndex])
  }

  const prevPhoto = () => {
    const prevIndex = (currentPhotoIndex - 1 + photos.length) % photos.length
    setCurrentPhotoIndex(prevIndex)
    setSelectedPhoto(photos[prevIndex])
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedPhoto) return

      if (e.key === "Escape") closeLightbox()
      if (e.key === "ArrowRight") nextPhoto()
      if (e.key === "ArrowLeft") prevPhoto()
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [selectedPhoto, currentPhotoIndex])

  return (
    <section id="photos" className="py-20 bg-muted/30 overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Photo Gallery
          </h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
            A visual journey through my professional experiences, achievements, and memorable moments in the tech
            industry. Each photo tells a story of growth, collaboration, and innovation.
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
              <Camera className="w-4 h-4" />
              {category}
            </Button>
          ))}
        </motion.div>

        {/* 3D Photo Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8" style={{ perspective: "1000px" }}>
          {filteredPhotos.map((photo, index) => (
            <Photo3DCard
              key={photo.id}
              photo={photo}
              index={index}
              isInView={isInView}
              onClick={() => openLightbox(photo)}
            />
          ))}
        </div>

        {/* Featured Photos Carousel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotateX: -45 }}
          animate={isInView ? { opacity: 1, scale: 1, rotateX: 0 } : { opacity: 0, scale: 0.8, rotateX: -45 }}
          transition={{ duration: 1.2, delay: 0.6, type: "spring", stiffness: 100, damping: 15 }}
          className="mt-20"
        >
          <h3 className="text-2xl font-semibold mb-8 text-center">Featured Moments</h3>

          <div className="relative overflow-hidden rounded-2xl">
            <motion.div
              className="flex gap-6 pb-4"
              drag="x"
              dragConstraints={{ left: -800, right: 0 }}
              style={{ perspective: "1000px" }}
            >
              {photos
                .filter((photo) => photo.featured)
                .map((photo, index) => (
                  <motion.div
                    key={photo.id}
                    className="flex-shrink-0 w-80 cursor-pointer"
                    whileHover={{
                      scale: 1.05,
                      rotateY: 10,
                      z: 50,
                    }}
                    style={{ transformStyle: "preserve-3d" }}
                    onClick={() => openLightbox(photo)}
                  >
                    <div className="relative bg-card rounded-xl shadow-xl overflow-hidden">
                      <img
                        src={photo.src || "/placeholder.svg"}
                        alt={photo.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-4">
                        <h4 className="font-semibold mb-1">{photo.title}</h4>
                        <p className="text-sm text-foreground/70 line-clamp-2">{photo.description}</p>
                        <div className="flex items-center justify-between mt-3">
                          <Badge variant="secondary">{photo.category}</Badge>
                          <div className="flex items-center gap-1 text-sm text-foreground/60">
                            <Heart className="w-4 h-4" />
                            {photo.likes}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg p-8"
        >
          <div className="grid md:grid-cols-6 gap-10 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-500 mb-2">{photos.length}</div>
              <div className="text-foreground/70">Total Photos</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-500 mb-2">{photos.filter((p) => p.featured).length}</div>
              <div className="text-foreground/70">Featured</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-500 mb-2">
                {photos.reduce((sum, photo) => sum + photo.likes, 0)}
              </div>
              <div className="text-foreground/70">Total Likes</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-500 mb-2">
                {new Set(photos.map((p) => p.category)).size}
              </div>
              <div className="text-foreground/70">Categories</div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0, rotateY: -90 }}
            animate={{ scale: 1, opacity: 1, rotateY: 0 }}
            exit={{ scale: 0.8, opacity: 0, rotateY: 90 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="relative max-w-4xl w-full max-h-[90vh] bg-card rounded-lg overflow-hidden"
            style={{ transformStyle: "preserve-3d" }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={prevPhoto}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextPhoto}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <div className="grid md:grid-cols-2 h-full">
              <div className="relative">
                <img
                  src={selectedPhoto.src || "/placeholder.svg"}
                  alt={selectedPhoto.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-8 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-4">
                  <Badge>{selectedPhoto.category}</Badge>
                  {selectedPhoto.featured && <Badge className="bg-yellow-500 text-yellow-900">FEATURED</Badge>}
                </div>

                <h3 className="text-2xl font-bold mb-4">{selectedPhoto.title}</h3>
                <p className="text-foreground/70 mb-6">{selectedPhoto.description}</p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-foreground/60">Date:</span>
                    <span className="text-sm">{selectedPhoto.date}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-foreground/60">Location:</span>
                    <span className="text-sm">{selectedPhoto.location}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-foreground/60">Likes:</span>
                    <div className="flex items-center gap-1">
                      <Heart className="w-4 h-4 text-red-500" />
                      <span className="text-sm">{selectedPhoto.likes}</span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button size="sm" className="flex items-center gap-2">
                    <Download className="w-4 h-4" />
                    Download
                  </Button>
                  <Button size="sm" variant="outline" className="flex items-center gap-2">
                    <Share2 className="w-4 h-4" />
                    Share
                  </Button>
                  <Button size="sm" variant="outline" className="flex items-center gap-2">
                    <Heart className="w-4 h-4" />
                    Like
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}
