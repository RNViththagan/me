import { Award, BadgeCheck } from "lucide-react";

export default function Achievements() {
  const achievements = ["🏆 2nd Runner-Up - CodeStorm 2023 (Yarl IT Hub)"];

  const certifications = [
    "📜 Python for Beginners - University of Moratuwa (CODL)",
    "🏅 IEEE Xtreme Participation (16.0, 17.0)",
    "🏅 CodeRevivor 2.0 Participation - IEEE SB, University of Vavuniya",
  ];

  return (
    <section id="achievements" className="py-20 px-6 bg-slate-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-blue-400">
          Achievements & Certifications
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-slate-900 rounded-xl p-6 shadow-lg hover:shadow-blue-500/10 transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <Award className="w-8 h-8 text-blue-400 mr-3" />
              <h3 className="text-2xl font-semibold text-blue-300">
                Achievements
              </h3>
            </div>
            <ul className="space-y-2">
              {achievements.map((achievement, index) => (
                <li key={index} className="text-slate-300 flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  {achievement}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-slate-900 rounded-xl p-6 shadow-lg hover:shadow-blue-500/10 transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <BadgeCheck className="w-8 h-8 text-blue-400 mr-3" />
              <h3 className="text-2xl font-semibold text-blue-300">
                Certifications
              </h3>
            </div>
            <ul className="space-y-2">
              {certifications.map((certification, index) => (
                <li key={index} className="text-slate-300 flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  {certification}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
