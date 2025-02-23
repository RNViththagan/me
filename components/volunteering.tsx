"use client";
import { IconUsers, IconBrandFacebook, IconBrandLinkedin, IconWorld } from "@tabler/icons-react"
import { motion } from "framer-motion"
import ScrollAnimation from "./ScrollAnimation"

export default function Volunteering() {
  const roles = [
    {
      title: "President, Computer Society, UoJ",
      year: "2024",
      links: [
        { icon: IconWorld, href: "https://www.society.jfn.ac.lk/compsoc/" },
        { icon: IconBrandFacebook, href: "https://web.facebook.com/uojcompsoc/" },
        {
          icon: IconBrandLinkedin,
          href: "https://www.linkedin.com/company/compsoc-uoj",
        },
      ],
    },
    {
      title: "Vice Chairman, IEEE Computer Society SBC, UoJ",
      year: "2023",
      links: [
        { icon: IconBrandFacebook, href: "https://web.facebook.com/IEEECSUOJ" },
        { icon: IconBrandLinkedin, href: "https://www.linkedin.com/company/ieeecsuoj" },
      ],
    },
    {
      title: "Public Visibility Team Lead & Video Editor, IEEE Student Branch UoJ",
      year: "2023",
      links: [
        { icon: IconWorld, href: "http://society.jfn.ac.lk/ieee" },
        { icon: IconBrandFacebook, href: "https://web.facebook.com/IEEESBUoJ/" },
        { icon: IconBrandLinkedin, href: "https://www.linkedin.com/company/ieeesbuoj" },
      ],
    },
    {
      title: "Treasurer, IEEE Computer Society SBC, UoJ",
      year: "2022",
      links: [
        { icon: IconBrandFacebook, href: "https://web.facebook.com/IEEECSUOJ" },
        { icon: IconBrandLinkedin, href: "https://www.linkedin.com/company/ieeecsuoj" },
      ],
    },
  ]

  return (
    <motion.section
      id="volunteering"
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
            Volunteering & Leadership
          </motion.h2>
        </ScrollAnimation>
        <ScrollAnimation>
          <motion.div
            className="bg-slate-800 border border-slate-700 rounded-xl p-6 shadow-lg hover:shadow-blue-500/10 hover:border-blue-500/50 transition-all duration-300"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <div className="flex items-center mb-6">
              <IconUsers className="w-8 h-8 text-blue-400 mr-3" />
              <h3 className="text-2xl font-semibold text-blue-300">Roles</h3>
            </div>
            <ul className="space-y-6">
              {roles.map((role, index) => (
                <motion.li
                  key={index}
                  className="flex flex-col sm:flex-row sm:justify-between sm:items-center border-b border-slate-700 pb-4 last:border-b-0"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.3 }}
                >
                  <div>
                    <span className="text-lg text-slate-300">{role.title}</span>
                    <span className="text-blue-400 font-semibold ml-2">{role.year}</span>
                  </div>
                  <div className="flex mt-2 sm:mt-0">
                    {role.links.map((link, linkIndex) => (
                      <motion.a
                        key={linkIndex}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 transition-colors mr-3"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <link.icon className="w-5 h-5" />
                      </motion.a>
                    ))}
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </ScrollAnimation>
      </div>
    </motion.section>
  )
}

