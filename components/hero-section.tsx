"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react"

const titles = ["AI Developer", "Web Engineer", "Full Stack Developer", "Innovation Specialist"]

export default function HeroSection() {
  const [currentTitle, setCurrentTitle] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % titles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10" />
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-500/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 text-left lg:text-left"
          >
            {/* Profile Image - Mobile Only */}
            <motion.div
              className="w-32 h-32 mx-auto lg:hidden rounded-full bg-gradient-to-r from-blue-500 to-purple-500 p-1"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="w-full h-full rounded-full bg-background flex items-center justify-center text-4xl">
                👨‍💻
              </div>
            </motion.div>

            {/* Name */}
            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              𝑺𝒐𝒑𝒂𝒏 𝑴𝒖𝒏𝒅𝒆      
            </motion.h1>

            {/* Animated Title */}
            <motion.div
              className="h-16 flex items-center"
              key={currentTitle}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-xl md:text-2xl lg:text-3xl text-foreground/80">{titles[currentTitle]}</h2>
            </motion.div>

            {/* Description */}
            <motion.p
              className="text-base md:text-lg lg:text-xl text-foreground/60 max-w-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Passionate about creating innovative solutions that bridge the gap between artificial intelligence and
              user experience. Specializing in full-stack development with a focus on cutting-edge technologies.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 items-start"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <motion.button
                className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-full font-semibold shadow-lg"
                whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(0,0,0,0.3)" }}
                whileTap={{ scale: 0.95 }}
              >
                Download Resume
              </motion.button>
              <motion.button
                className="border border-foreground/20 text-foreground px-8 py-3 rounded-full font-semibold hover:bg-foreground/5"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Me
              </motion.button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex space-x-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              {[
                { icon: Github, href: "https://github.com/sopanmunde", label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/sopan-munde-182569276/", label: "LinkedIn" },
                { icon: Mail, href: "/sopanmunde5@gmail.com", label: "Email" },
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  className="w-12 h-12 rounded-full bg-foreground/10 flex items-center justify-center hover:bg-foreground/20 transition-colors"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Side - Animated Photo Box */}
          <motion.div
            initial={{ opacity: 0, x: 50, rotateY: -30 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="hidden lg:flex justify-center items-center"
            style={{ perspective: "1000px" }}
          >
            <div className="relative">
              {/* Animated Border Ring */}
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{
                  background: `conic-gradient(from 0deg, #3b82f6, #8b5cf6, #06b6d4, #10b981, #f59e0b, #ef4444, #3b82f6)`,
                  padding: "4px",
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              >
                <div className="w-full h-full rounded-full bg-background" />
              </motion.div>

              {/* Main Photo Container */}
              <motion.div
                className="relative w-80 h-80 rounded-full overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.05, rotateY: 10 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Profile Photo */}
                <img                  
                  src="\my-photo.png"
                  alt="Sopan Munde"
                  className="w-full h-full object-cover"
                />

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20" />

                {/* Floating Elements */}
                <motion.div
                  className="absolute top-4 right-4 bg-blue-500 text-white p-2 rounded-full shadow-lg"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                >
                  <span className="text-sm font-bold">AI</span>
                </motion.div>

                <motion.div
                  className="absolute bottom-4 left-4 bg-purple-500 text-white p-2 rounded-full shadow-lg"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.5 }}
                >
                  <span className="text-sm font-bold">WEB</span>
                </motion.div>

                <motion.div
                  className="absolute top-1/2 left-0 bg-green-500 text-white p-2 rounded-full shadow-lg transform -translate-y-1/2 -translate-x-1/2"
                  animate={{ x: [0, -5, 0] }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
                >
                  <span className="text-sm font-bold">JS</span>
                </motion.div>
              </motion.div>

              {/* Orbiting Elements */}
              <motion.div
                className="absolute inset-0 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              >
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <motion.div
                    className="w-8 h-8 bg-yellow-500 rounded-full shadow-lg flex items-center justify-center"
                    whileHover={{ scale: 1.2 }}
                  >
                    <span className="text-xs font-bold text-white">⚡</span>
                  </motion.div>
                </div>
              </motion.div>

              <motion.div
                className="absolute inset-0 rounded-full"
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              >
                <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2">
                  <motion.div
                    className="w-6 h-6 bg-red-500 rounded-full shadow-lg flex items-center justify-center"
                    whileHover={{ scale: 1.2 }}
                  >
                    <span className="text-xs font-bold text-white">🚀</span>
                  </motion.div>
                </div>
              </motion.div>

              {/* Background Glow Effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-xl scale-110 -z-10" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
      >
        <ChevronDown className="w-6 h-6 text-foreground/40" />
      </motion.div>
    </section>
  )
}
