import {GraduationCap, School} from "lucide-react"

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
    ]

    return (
        <section id="education" className="section-container">
            <h2 className="text-3xl font-bold mb-6 text-center">Education</h2>
            <div className="space-y-8">
                {educationData.map((edu, index) => (
                    <div key={index} className="card p-6 hover:scale-105 transition-transform duration-300">
                        <div className="flex items-start">
                            <edu.icon className="w-12 h-12 text-blue-600 mr-4 flex-shrink-0"/>
                            <div className="flex-grow">
                                <h3 className="text-xl font-semibold text-blue-600">{edu.institution}</h3>
                                <p className="text-lg text-slate-700">{edu.degree}</p>
                                <p className="text-slate-600">{edu.period}</p>
                                {edu.details && <p className="text-slate-700">{edu.details}</p>}
                            </div>
                            {edu.gpa && edu.credits && (
                                <div className="ml-4 flex-shrink-0">
                                    <div className="bg-blue-100 text-blue-800 p-3 rounded-lg text-center">
                                        <div className="text-lg font-semibold">GPA: {edu.gpa}</div>
                                        <div className="text-sm mt-1">{edu.credits}</div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

