import { Code, Database, Monitor, Video } from "lucide-react"

export default function Skills() {
  const skills = [
    {
      category: "Programming Languages",
      items: ["Java", "Python", "PHP", "JavaScript", "PERL"],
      icon: Code,
    },
    {
      category: "Web Development",
      items: ["React.js", "Node.js", "Express.js"],
      icon: Monitor,
    },
    {
      category: "Database Management",
      items: ["MySQL (Sequelize ORM)", "MongoDB"],
      icon: Database,
    },
    {
      category: "Video Editing & Graphic Designing",
      items: ["Adobe Premiere Pro", "Adobe After Effects", "Adobe Photoshop"],
      icon: Video,
    },
  ];

  return (
    <section id="skills" className="py-20 px-6 px-10 bg-slate-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-blue-400">
          Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map(({ category, items, icon: Icon }, index) => (
            <div
              key={index}
              className="bg-slate-900 rounded-xl p-6 shadow-lg hover:shadow-blue-500/10 hover:scale-105 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <Icon className="w-8 h-8 text-blue-400 mr-3" />
                <h3 className="text-xl font-semibold text-blue-300">
                  {category}
                </h3>
              </div>
              <ul className="space-y-2">
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
          ))}
        </div>
      </div>
    </section>
  )
}

