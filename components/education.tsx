import { GraduationCap, School } from "lucide-react";

export default function Education() {
  const educationData = [
    {
      institution: "University of Jaffna",
      degree: "Bachelor of Science Honours in Computer Science",
      period: "2021 - 2025",
      //gpa: "4.00 / 4.00",
      //credits: "68 credits",
      icon: GraduationCap,
    },
    {
      institution: "Jaffna Hindu College",
      degree: "G.C.E. A/L (Mathematics Stream)",
      period: "2009 - 2018",
      //details: "Z-score: 1.1861 (2019)",
      icon: School,
    },
  ];

  return (
    <section id="education" className="py-20  px-10 bg-slate-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-blue-400">
          Education
        </h2>
        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-blue-500/10 transition-shadow duration-300 flex items-start"
            >
              <edu.icon className="w-12 h-12 text-blue-400 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-blue-300">
                  {edu.institution}
                </h3>
                <p className="text-lg text-slate-300">{edu.degree}</p>
                <p className="text-slate-400">{edu.period}</p>
                {edu.details && <p className="text-slate-300">{edu.details}</p>}
                {edu.gpa && (
                  <div className="mt-2 bg-blue-900/50 text-blue-200 text-sm font-semibold py-1 px-2 rounded-full inline-block">
                    GPA: {edu.gpa} ({edu.credits})
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
