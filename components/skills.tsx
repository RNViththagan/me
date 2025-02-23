"use client";
import {
  IconCode,
  IconDatabase,
  IconDeviceLaptop,
  IconVideo,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import ScrollAnimation from "./ScrollAnimation";

export default function Skills() {
  const skills = [
    {
      category: "Programming Languages",
      items: ["Java", "Python", "PHP", "JavaScript", "PERL"],
      icon: IconCode,
    },
    {
      category: "Web Development",
      items: ["React.js", "Node.js", "Express.js"],
      icon: IconDeviceLaptop,
    },
    {
      category: "Database Management",
      items: ["MySQL (Sequelize ORM)", "MongoDB"],
      icon: IconDatabase,
    },
    {
      category: "Video Editing & Graphic Designing",
      items: ["Adobe Premiere Pro", "Adobe After Effects", "Adobe Photoshop"],
      icon: IconVideo,
    },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="gradient-bg">
        <div />
        <div />
        <div />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollAnimation>
          <h2 className="text-3xl font-bold mb-12 text-center text-blue-400">
            Skills
          </h2>
        </ScrollAnimation>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map(({ category, items, icon: Icon }, index) => (
            <ScrollAnimation key={index}>
              <motion.div
                className="glass-card rounded-xl p-6 h-full"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
              >
                <div className="flex items-center mb-4">
                  <Icon className="w-8 h-8 text-blue-400 mr-3" />
                  <h3 className="text-xl font-semibold text-blue-300 ml-3">
                    {category}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {items.map((item, itemIndex) => (
                    <motion.li
                      key={itemIndex}
                      className="text-slate-300 flex items-center"
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{
                        delay: 0.5 + itemIndex * 0.1,
                        duration: 0.3,
                      }}
                    >
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
