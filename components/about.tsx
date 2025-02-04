import { BookOpen, Code, Lightbulb } from "lucide-react";

export default function About() {
  const traits = [
    { icon: BookOpen, text: "Passionate Learner" },
    { icon: Code, text: "Full-Stack Developer" },
    { icon: Lightbulb, text: "AI Enthusiast" },
  ];

  return (
    <section id="about" className="py-20 px-6 bg-slate-900">
      <div className="container mx-auto px-8 text-justify">
        <h2 className="text-3xl font-bold mb-8 text-center text-blue-400">
          About Me
        </h2>
        <p className="text-lg text-slate-300 leading-relaxed mb-12 max-w-3xl mx-auto">
          A highly motivated Computer Science undergraduate with a passion for
          full-stack development, leadership, and a growing interest in Machine
          Learning and Deep Learning. Skilled in building scalable web
          applications and integrating AI techniques into real-world problems.
        </p>
        <div className="flex flex-wrap justify-center gap-8">
          {traits.map(({ icon: Icon, text }, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-blue-900/50 flex items-center justify-center mb-4">
                <Icon className="w-8 h-8 text-blue-400" />
              </div>
              <span className="text-slate-300">{text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
