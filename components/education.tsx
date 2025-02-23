"use client";
import { IconSchool, IconBuildingSkyscraper } from "@tabler/icons-react"
import { motion } from "framer-motion"
import ScrollAnimation from "./ScrollAnimation"

export default function Education() {
  const educationData = [
    {
      institution: "University of Jaffna",
      degree: "Bachelor of Science Honours in Computer Science",
      period: "2021 - 2025",
      icon: IconSchool,
    },
    {
      institution: "Jaffna Hindu College",
      degree: "G.C.E. A/L (Mathematics Stream)",
      period: "2009 - 2018",
      icon: IconBuildingSkyscraper,
    },
  ]

  return (
    <motion.section
      id="education"
      className="py-20 bg-gradient-to-b from-slate-900 to-slate-800 w-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <motion.h2
            className="text-3xl font-bold mb-12 text-center text-blue-400"
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
          >
            Education
          </motion.h2>
        </ScrollAnimation>
        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <ScrollAnimation key={index}>
              <motion.div
                className="bg-slate-800 border border-slate-700 rounded-xl p-6 shadow-lg hover:shadow-blue-500/10 hover:border-blue-500/50 transition-all duration-300 flex items-start"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
              >
                <edu.icon className="w-12 h-12 text-blue-400 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-blue-300">{edu.institution}</h3>
                  <p className="text-lg text-slate-300">{edu.degree}</p>
                  <p className="text-slate-400">{edu.period}</p>
                </div>
              </motion.div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

