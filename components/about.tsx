import { BookOpen, Code, Lightbulb } from "lucide-react"

export default function About() {
  const traits = [
    { icon: BookOpen, text: "Passionate Learner" },
    { icon: Code, text: "Full-Stack Developer" },
    { icon: Lightbulb, text: "AI Enthusiast" },
  ]

  return (
    <section id="about" className="section-container">
      <h2 className="text-3xl font-bold mb-6 text-center">About Me</h2>
      <p className="text-lg text-slate-700 leading-relaxed mb-8">
        A highly motivated Computer Science undergraduate with a passion for full-stack development, leadership, and a
        growing interest in Machine Learning and Deep Learning. Skilled in building scalable web applications and
        integrating AI techniques into real-world problems.
      </p>
      <div className="flex flex-wrap justify-center gap-8">
        {traits.map(({ icon: Icon, text }, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-2">
              <Icon className="w-8 h-8 text-blue-600" />
            </div>
            <span className="text-slate-700">{text}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

