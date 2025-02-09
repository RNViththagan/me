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
    <motion.section
      id="skills"
      className="py-20 bg-gradient-to-b from-slate-800 to-slate-900 w-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <h2 className="text-3xl font-bold mb-12 text-center text-blue-400">
            Skills
          </h2>
        </ScrollAnimation>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map(({ category, items, icon: Icon }, index) => (
            <ScrollAnimation key={index}>
              <div className="p-6 bg-slate-800 border border-slate-700 rounded-xl shadow-lg hover:shadow-blue-500/10 hover:border-blue-500/50 hover:scale-105  transition-all duration-300 h-full flex flex-col">
                <div className="flex items-center mb-4">
                  <Icon className="w-8 h-8 text-blue-400 mr-3" />
                  <h3 className="text-xl font-semibold text-blue-300">
                    {category}
                  </h3>
                </div>
                <ul className="space-y-2 flex-grow">
                  {items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="text-slate-300 flex items-center"
                    >
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
