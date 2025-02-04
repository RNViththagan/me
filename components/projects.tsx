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
    <section id="projects" className="section-container">
      <h2 className="text-3xl font-bold mb-6 text-center">Projects</h2>
      <div className="space-y-12">
        {projects.map((project, index) => (
          <div
            key={index}
            className="card flex flex-col md:flex-row overflow-hidden"
          >
            <div className="md:w-1/3 relative h-48 md:h-auto">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="md:w-2/3 p-6">
              <h3 className="text-2xl font-semibold mb-2 text-blue-600">
                {project.title} {project.year && `(${project.year})`}
              </h3>
              {project.role && (
                <p className="text-lg font-medium text-slate-600 mb-2">
                  {project.role}
                </p>
              )}
              <p className="text-slate-700 mb-2">{project.description}</p>
              <p className="text-slate-600 mb-2">
                Technologies: {project.technologies.join(", ")}
              </p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn inline-flex items-center"
              >
                View Project
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
