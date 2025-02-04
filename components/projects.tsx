import { ExternalLink } from "lucide-react";
import Image from "next/image";

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
      image: "./prj/ers-fos.png",
    },
    {
      title: "E-commerce Platform",
      year: "2020",
      role: "",
      technologies: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
      description:
        "Platform for browsing products, cart management, and payments.",
      link: "http://vkqube.wuaze.com/",
      image: "./prj/vkqube.jpeg",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-blue-400">
          Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:shadow-blue-500/10 transition-shadow duration-300"
            >
              <div className="relative h-48">
                <Image
                  style={{ objectPosition: "top" }}
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-blue-300">
                  {project.title} {project.year && `(${project.year})`}
                </h3>
                {project.role && (
                  <p className="text-md font-medium text-slate-400 mb-2">
                    {project.role}
                  </p>
                )}
                <p className="text-slate-300 mb-4">{project.description}</p>
                <p className="text-slate-400 mb-4 text-sm">
                  Technologies: {project.technologies.join(", ")}
                </p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn bg-blue-600 hover:bg-blue-700 text-white inline-flex items-center text-sm"
                >
                  View Project
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
