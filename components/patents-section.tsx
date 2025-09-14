"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { FileText, Download, Calendar, Shield, Lightbulb, Copyright } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const intellectualProperty = [
  {
    id: 1,
    type: "Patent",
    title: "AI-Powered Predictive Analytics System",
    registrationId: "US11,234,567",
    date: "2023-08-15",
    status: "Granted",
    description:
      "A novel machine learning system that predicts user behavior patterns in real-time applications using advanced neural network architectures.",
    category: "Artificial Intelligence",
    pdfUrl: "#",
    featured: true,
  },
  {
    id: 2,
    type: "Patent",
    title: "Blockchain-Based Identity Verification",
    registrationId: "US11,345,678",
    date: "2023-06-20",
    status: "Granted",
    description:
      "Decentralized identity verification system using blockchain technology to ensure secure and privacy-preserving authentication.",
    category: "Blockchain",
    pdfUrl: "#",
    featured: true,
  },
  {
    id: 3,
    type: "Copyright",
    title: "Smart Home Automation Framework",
    registrationId: "TX0009123456",
    date: "2023-04-10",
    status: "Registered",
    description:
      "Comprehensive software framework for IoT device management and automation in smart home environments.",
    category: "IoT",
    pdfUrl: "#",
    featured: false,
  },
  {
    id: 4,
    type: "Patent",
    title: "Real-time Data Processing Engine",
    registrationId: "US11,456,789",
    date: "2022-12-05",
    status: "Pending",
    description:
      "High-performance data processing engine capable of handling millions of transactions per second with fault tolerance.",
    category: "Data Processing",
    pdfUrl: "#",
    featured: false,
  },
  {
    id: 5,
    type: "Copyright",
    title: "Computer Vision Library",
    registrationId: "TX0009234567",
    date: "2022-09-18",
    status: "Registered",
    description:
      "Open-source computer vision library optimized for edge computing devices with advanced image recognition capabilities.",
    category: "Computer Vision",
    pdfUrl: "#",
    featured: true,
  },
  {
    id: 6,
    type: "Patent",
    title: "Quantum-Safe Encryption Protocol",
    registrationId: "US11,567,890",
    date: "2022-07-22",
    status: "Pending",
    description:
      "Novel encryption protocol designed to be resistant to quantum computing attacks while maintaining high performance.",
    category: "Cryptography",
    pdfUrl: "#",
    featured: false,
  },
]

const getStatusColor = (status: string) => {
  switch (status) {
    case "Granted":
    case "Registered":
      return "bg-green-500"
    case "Pending":
      return "bg-yellow-500"
    default:
      return "bg-gray-500"
  }
}

const getTypeIcon = (type: string) => {
  return type === "Patent" ? Shield : Copyright
}

export default function PatentsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const patents = intellectualProperty.filter((ip) => ip.type === "Patent")
  const copyrights = intellectualProperty.filter((ip) => ip.type === "Copyright")

  return (
    <section id="patents" className="py-20 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Patents & Intellectual Property
          </h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
            Innovation and creativity protected through patents and copyrights. These represent original contributions
            to technology and software development, showcasing my commitment to advancing the field.
          </p>
        </motion.div>

        {/* Featured IP */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >
          <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <Lightbulb className="w-6 h-6 text-yellow-500" />
            Featured Innovations
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {intellectualProperty
              .filter((ip) => ip.featured)
              .map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="bg-card rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border-2 border-yellow-500/20"
                  whileHover={{ y: -5 }}
                >
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-2">
                        {(() => {
                          const Icon = getTypeIcon(item.type)
                          return <Icon className="w-5 h-5 text-blue-500" />
                        })()}
                        <Badge variant="outline">{item.type}</Badge>
                      </div>
                      <Badge className="bg-yellow-500 text-yellow-900">FEATURED</Badge>
                    </div>

                    <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                    <p className="text-foreground/60 text-sm mb-2">{item.registrationId}</p>

                    <div className="flex items-center gap-2 mb-3">
                      <Calendar className="w-4 h-4 text-foreground/50" />
                      <span className="text-sm text-foreground/70">{item.date}</span>
                      <Badge className={`${getStatusColor(item.status)} text-white ml-auto`}>{item.status}</Badge>
                    </div>

                    <p className="text-sm text-foreground/70 mb-4 line-clamp-3">{item.description}</p>

                    <div className="mb-4">
                      <Badge variant="secondary">{item.category}</Badge>
                    </div>

                    <Button size="sm" variant="outline" asChild className="w-full">
                      <a href={item.pdfUrl} className="flex items-center justify-center gap-2">
                        <Download className="w-4 h-4" />
                        Download PDF
                      </a>
                    </Button>
                  </div>
                </motion.div>
              ))}
          </div>
        </motion.div>

        {/* Patents Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-12"
        >
          <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <Shield className="w-6 h-6 text-blue-500" />
            Patents
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {patents.map((patent, index) => (
              <motion.div
                key={patent.id}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="bg-card rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-6"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-blue-500" />
                    <Badge variant="outline">Patent</Badge>
                  </div>
                  <Badge className={`${getStatusColor(patent.status)} text-white`}>{patent.status}</Badge>
                </div>

                <h4 className="font-semibold text-lg mb-2">{patent.title}</h4>
                <p className="text-foreground/60 text-sm mb-2">{patent.registrationId}</p>

                <div className="flex items-center gap-2 mb-3">
                  <Calendar className="w-4 h-4 text-foreground/50" />
                  <span className="text-sm text-foreground/70">Filed: {patent.date}</span>
                </div>

                <p className="text-sm text-foreground/70 mb-4">{patent.description}</p>

                <div className="flex items-center justify-between">
                  <Badge variant="secondary">{patent.category}</Badge>
                  <Button size="sm" variant="outline" asChild>
                    <a href={patent.pdfUrl} className="flex items-center gap-2">
                      <FileText className="w-4 h-4" />
                      View
                    </a>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Copyrights Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-12"
        >
          <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <Copyright className="w-6 h-6 text-purple-500" />
            Copyrights
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {copyrights.map((copyright, index) => (
              <motion.div
                key={copyright.id}
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                className="bg-card rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-6"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Copyright className="w-5 h-5 text-purple-500" />
                    <Badge variant="outline">Copyright</Badge>
                  </div>
                  <Badge className={`${getStatusColor(copyright.status)} text-white`}>{copyright.status}</Badge>
                </div>

                <h4 className="font-semibold text-lg mb-2">{copyright.title}</h4>
                <p className="text-foreground/60 text-sm mb-2">{copyright.registrationId}</p>

                <div className="flex items-center gap-2 mb-3">
                  <Calendar className="w-4 h-4 text-foreground/50" />
                  <span className="text-sm text-foreground/70">Registered: {copyright.date}</span>
                </div>

                <p className="text-sm text-foreground/70 mb-4">{copyright.description}</p>

                <div className="flex items-center justify-between">
                  <Badge variant="secondary">{copyright.category}</Badge>
                  <Button size="sm" variant="outline" asChild>
                    <a href={copyright.pdfUrl} className="flex items-center gap-2">
                      <FileText className="w-4 h-4" />
                      View
                    </a>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* IP Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg p-8"
        >
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-500 mb-2">{patents.length}</div>
              <div className="text-foreground/70">Patents</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-500 mb-2">{copyrights.length}</div>
              <div className="text-foreground/70">Copyrights</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-500 mb-2">
                {intellectualProperty.filter((ip) => ip.status === "Granted" || ip.status === "Registered").length}
              </div>
              <div className="text-foreground/70">Approved</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-500 mb-2">
                {intellectualProperty.filter((ip) => ip.status === "Pending").length}
              </div>
              <div className="text-foreground/70">Pending</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
