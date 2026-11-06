"use client";
import { IconAward, IconCertificate } from "@tabler/icons-react"
import { motion } from "framer-motion"
import ScrollAnimation from "./ScrollAnimation"

export default function Achievements() {
  const achievements = [
    "🥇 Professor Kanthia Kunaratnam Gold Medal - Best overall performance in Pure and Applied Sciences, University of Jaffna (2026)",
    "🏆 Professor Emeritus Kunaratnam Memorial Prize for Computer Science - University of Jaffna (2026)",
    "🎤 Guest Speaker - \"Next-Gen Software Engineering in the Era of Agentic AI\", CSSL GenZ Chapter, University of Jaffna (2026)",
    "📄 Oral Presentation - Self-Supervised Ultrasound Image Denoising, SL-SWCS'25 (2025)",
    "🏅 THALIR Award - 2nd Year Batch Top, David Pieris Group of Companies (2024)",
    "🎓 Dean's List - All four levels, Faculty of Science, University of Jaffna (2020 - 2023)",
    "🏆 2nd Runner-Up - CodeStorm 1.0, Yarl IT Hub (2023)",
  ]

  const certifications = [
    "📜 Python for Beginners - University of Moratuwa (CODL) (2024)",
    "📜 HackerRank - Java, JavaScript, SQL, Problem Solving (Basic)",
    "📜 Microsoft MTA - Networking, Security, Windows OS, Windows Server Admin (2018)",
    "🏅 IEEE Xtreme Participation (16.0 - 19.0)",
    "🏅 CodeRevivor 2.0 Participation - IEEE SB, University of Vavuniya",
  ]

  return (
    <motion.section
      id="achievements"
      className="py-20 bg-gradient-to-b from-slate-800 to-slate-900 w-full"
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
            Achievements & Certifications
          </motion.h2>
        </ScrollAnimation>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ScrollAnimation>
            <motion.div
              className="bg-slate-800 border border-slate-700 rounded-xl p-6 shadow-lg hover:shadow-blue-500/10 hover:border-blue-500/50 transition-all duration-300 h-full"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <div className="flex items-center mb-4">
                <IconAward className="w-8 h-8 text-blue-400 mr-3" />
                <h3 className="text-2xl font-semibold text-blue-300">Achievements</h3>
              </div>
              <ul className="space-y-2">
                {achievements.map((achievement, index) => (
                  <motion.li
                    key={index}
                    className="text-slate-300 flex items-start"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.4 + index * 0.1, duration: 0.3 }}
                  >
                    <span className="w-2 h-2 mt-2 flex-shrink-0 bg-blue-500 rounded-full mr-2"></span>
                    {achievement}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </ScrollAnimation>
          <ScrollAnimation>
            <motion.div
              className="bg-slate-800 border border-slate-700 rounded-xl p-6 shadow-lg hover:shadow-blue-500/10 hover:border-blue-500/50 transition-all duration-300 h-full"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <div className="flex items-center mb-4">
                <IconCertificate className="w-8 h-8 text-blue-400 mr-3" />
                <h3 className="text-2xl font-semibold text-blue-300">Certifications</h3>
              </div>
              <ul className="space-y-2">
                {certifications.map((certification, index) => (
                  <motion.li
                    key={index}
                    className="text-slate-300 flex items-start"
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.4 + index * 0.1, duration: 0.3 }}
                  >
                    <span className="w-2 h-2 mt-2 flex-shrink-0 bg-blue-500 rounded-full mr-2"></span>
                    {certification}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </ScrollAnimation>
        </div>
      </div>
    </motion.section>
  )
}

