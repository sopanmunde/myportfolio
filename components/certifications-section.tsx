"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Award, ExternalLink, Calendar, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const certifications = [
  {
    id: 1,
    title: "AWS Cloud Architecture",
    issuer: "AWS Academy",
    date: "2024",
    status: "Verified",
    image: "/aws-archi.png?height=200&width=300",
    description:
      "AWS Academy Graduate - AWS Academy Cloud Architecting was issued by Amazon Web Services Training and Certification.",
    skills: ["AWS","Cloud Architecture"],
    verifyUrl: "https://www.credly.com/badges/49a3f561-5fb9-439a-b786-607c88e9dddb",
    featured: true,
  },
  {
    id: 2,
    title: "AWS Cloud Foundation",
    issuer: "AWS Academy",
    date: "2023",
    status: "Verified",
    image: "/aws-found.png?height=200&width=300",
    description: "AWS Academy Graduate - AWS Academy Cloud Foundations was issued by Amazon Web Services Training and Certification.",
    skills: ["AWS", "Security", "Scalability"],
    verifyUrl: "https://www.credly.com/badges/004c9678-599d-4e2a-9dc1-dbf8515d5cc9",
    featured: true,
  },
  {
    id: 3,
    title: "Aditya L1: India's first space-based observatory",
    issuer: "IIRS-ISRO",
    date: "2024",
    status: "Verified",
    image: "/l-1.png?height=200&width=300",
    description: "I have successfully completed the online course 'Aditya L1: India’s First Space-Based Observatory' offered by IIRS-ISRO Dehradun.",
    skills: [""],
    verifyUrl: "https://www.linkedin.com/in/sopan-munde-182569276/details/certifications/",
    featured: false,
  },
  {
    id: 4,
    title: "Exploring Earth\'s Moon through Chandrayaan",
    issuer: "IIRS-ISRO",
    date: "2023",
    status: "Verified",
    image: "/earth.png?height=200&width=300",
    description: "I have successfully completed the online course 'Exploring Earth’s Moon through Chandrayaan' offered by IIRS-ISRO Dehradun.",
    skills: [""],
    verifyUrl: "https://www.credly.com/badges/004c9678-599d-4e2a-9dc1-dbf8515d5cc9",
    featured: false,
  },
  {
    id: 5,
    title: "Advances in Remote Sensing Techniques for Geological Applications",
    issuer: "IIRS-ISRO",
    date: "2024",
    status: "Active",
    image: "/remote.png?height=200&width=300",
    description: "I have successfully completed the online course 'Advances in Remote Sensing Techniques.",
    skills: [""],
    verifyUrl: "https://www.credly.com/badges/004c9678-599d-4e2a-9dc1-dbf8515d5cc9",
    featured: true,
  },
  {
    id: 6,
    title: "Data Science with Python",
    issuer: "BRAINOVISION PVT.LTD.",
    date: "2022",
    status: "Verified",
    image: "/data.png?height=200&width=300",
    description: "I've earned a certification from an International-level workshop on Data Science using Python!",
    skills: ["Python", "NumPy", "Pandas", "Matplotlib","Tensorflow", "EDA"],
    verifyUrl: "https://www.credly.com/badges/004c9678-599d-4e2a-9dc1-dbf8515d5cc9",
    featured: false,
  },
]

export default function CertificationsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="certifications" className="py-20" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Certifications & Achievements
          </h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
            Professional certifications and achievements that validate my expertise across various technologies and
            platforms. Each certification represents continuous learning and commitment to excellence.
          </p>
        </motion.div>

        {/* Featured Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >
          <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <Award className="w-6 h-6 text-yellow-500" />
            Featured Certifications
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications
              .filter((cert) => cert.featured)
              .map((cert, index) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="bg-card rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border-2 border-yellow-500/20"
                  whileHover={{ y: -5 }}
                >
                  <div className="relative">
                    <img src={cert.image || "/placeholder.svg"} alt={cert.title} className="w-full h-40 object-cover" />
                    <div className="absolute top-2 right-2">
                      <Badge className="bg-yellow-500 text-yellow-900">FEATURED</Badge>
                    </div>
                    <div className="absolute bottom-2 left-2">
                      <Badge
                        variant={cert.status === "Active" ? "default" : "secondary"}
                        className="flex items-center gap-1"
                      >
                        <CheckCircle className="w-3 h-3" />
                        {cert.status}
                      </Badge>
                    </div>
                  </div>

                  <div className="p-6">
                    <h4 className="text-lg font-semibold mb-2">{cert.title}</h4>
                    <p className="text-foreground/60 text-sm mb-1">{cert.issuer}</p>
                    <p className="text-foreground/50 text-sm mb-3 flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {cert.date}
                    </p>

                    <p className="text-sm text-foreground/70 mb-4 line-clamp-2">{cert.description}</p>

                    <div className="flex flex-wrap gap-1 mb-4">
                      {cert.skills.slice(0, 3).map((skill) => (
                        <span key={skill} className="px-2 py-1 bg-muted text-xs rounded-full">
                          {skill}
                        </span>
                      ))}
                      {cert.skills.length > 3 && (
                        <span className="px-2 py-1 bg-muted text-xs rounded-full">+{cert.skills.length - 3}</span>
                      )}
                    </div>

                    <Button size="sm" variant="outline" asChild className="w-full">
                      <a href={cert.verifyUrl} className="flex items-center justify-center gap-2">
                        <ExternalLink className="w-4 h-4" />
                        Verify Certificate
                      </a>
                    </Button>
                  </div>
                </motion.div>
              ))}
          </div>
        </motion.div>

        {/* All Certifications Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-2xl font-semibold mb-6">All Certifications</h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.05 }}
                className="bg-card rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-6"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h4 className="font-semibold text-lg mb-1">{cert.title}</h4>
                    <p className="text-foreground/60 text-sm">{cert.issuer}</p>
                  </div>
                  <Badge variant={cert.status === "Active" ? "default" : "secondary"} className="ml-2">
                    {cert.status}
                  </Badge>
                </div>

                <p className="text-foreground/50 text-sm mb-3 flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  Issued: {cert.date}
                </p>

                <p className="text-sm text-foreground/70 mb-4">{cert.description}</p>

                <div className="flex flex-wrap gap-1 mb-4">
                  {cert.skills.map((skill) => (
                    <span key={skill} className="px-2 py-1 bg-muted text-xs rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>

                <Button size="sm" variant="outline" asChild className="w-full">
                  <a href={cert.verifyUrl} className="flex items-center justify-center gap-2">
                    <ExternalLink className="w-4 h-4" />
                    Verify
                  </a>
                </Button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg p-8"
        >
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-500 mb-2">{certifications.length}</div>
              <div className="text-foreground/70">Total Certifications</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-500 mb-2">
                {certifications.filter((c) => c.status === "Active").length}
              </div>
              <div className="text-foreground/70">Active Certifications</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-500 mb-2">
                {certifications.filter((c) => c.featured).length}
              </div>
              <div className="text-foreground/70">Featured Achievements</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-500 mb-2">
                {new Set(certifications.flatMap((c) => c.skills)).size}
              </div>
              <div className="text-foreground/70">Validated Skills</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
