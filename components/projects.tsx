"use client";
import { IconExternalLink, IconBrandGithub } from "@tabler/icons-react";
import Image from "next/image";
import { motion } from "framer-motion";
import ScrollAnimation from "./ScrollAnimation";

export default function Projects() {
  const projects = [
    {
      title: "Welfare Hostel Management System",
      year: "2024",
      role: "Team Lead",
      technologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "MySQL",
        "Sequelize ORM",
      ],
      description:
        "Web-based system for hostel management at the University of Jaffna. Part of MyUoJ",
      link: "http://www.myuoj.jfn.ac.lk/",
      image: "./prj/myuoj.png",
    },
    {
      title: "Exam Registration System",
      year: "2023",
      role: "Team Lead",
      technologies: ["PHP", "MySQL", "JavaScript", "TailwindCSS"],
      description:
        "Online platform automating student exam registration and scheduling.",
      link: "https://ers-fos.wuaze.com/",
      github: "https://github.com/RNViththagan/ERS-Web_Technologies",
      image: "./prj/ers-fos.png",
    },
    {
      title: "E-commerce Platform",
      year: "2020",
      role: "",
      technologies: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
      description:
        "Platform for browsing products, cart management, and payments.",
      link: "https://vkqube.wuaze.com/",
      github: "https://github.com/RNViththagan/IWT-Group-Project-JAF_01",
      image: "./prj/vkqube.jpeg",
    },
  ];

  return (
    <motion.section
      id="projects"
      className="py-20 bg-gradient-to-b from-slate-900 to-slate-800 w-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <h2 className="text-3xl font-bold mb-12 text-center text-blue-400">
            Projects
          </h2>
        </ScrollAnimation>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ScrollAnimation key={index}>
              <div className="bg-slate-800 border border-slate-700 rounded-xl overflow-hidden shadow-lg hover:shadow-blue-500/10 hover:border-blue-500/50 transition-all duration-300 h-full flex flex-col">
                <div className="relative h-48">
                  <Image
                    style={{ objectPosition: "top" }}
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-semibold mb-2 text-blue-300">
                    {project.title} {project.year && `(${project.year})`}
                  </h3>
                  {project.role && (
                    <p className="text-md font-medium text-slate-400 mb-2">
                      {project.role}
                    </p>
                  )}
                  <p className="text-slate-300 mb-4 flex-grow">
                    {project.description}
                  </p>
                  <p className="text-slate-400 mb-4 text-sm">
                    Technologies: {project.technologies.join(", ")}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn bg-blue-600 hover:bg-blue-700 text-white inline-flex items-center text-sm"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      View Project
                      <IconExternalLink className="ml-2 h-4 w-4" />
                    </motion.a>
                    {project.github && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn bg-gray-700 hover:bg-gray-600 text-white inline-flex items-center text-sm"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        GitHub
                        <IconBrandGithub className="ml-2 h-4 w-4" />
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
