import { Code, Database, Monitor, Video } from "lucide-react"

export default function Skills() {
  const skills = [
    { category: "Programming Languages", items: ["Java", "Python", "PHP", "JavaScript", "PERL"], icon: Code },
    { category: "Web Development", items: ["React.js", "Node.js", "Express.js", "MySQL"], icon: Monitor },
    { category: "Database Management", items: ["MySQL (Sequelize ORM)"], icon: Database },
    { category: "Video Editing", items: ["Adobe Premiere Pro", "Adobe After Effects"], icon: Video },
  ]

  return (
    <section id="skills" className="section-container">
      <h2 className="text-3xl font-bold mb-6 text-center">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skills.map(({ category, items, icon: Icon }, index) => (
          <div key={index} className="card p-6 hover:scale-105 transition-transform duration-300">
            <div className="flex items-center mb-4">
              <Icon className="w-8 h-8 text-blue-600 mr-3" />
              <h3 className="text-xl font-semibold text-blue-600">{category}</h3>
            </div>
            <ul className="space-y-2">
              {items.map((item, itemIndex) => (
                <li key={itemIndex} className="text-slate-700 flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

