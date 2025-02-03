import { Users, Facebook, Linkedin, Globe } from "lucide-react";

export default function Volunteering() {
  const roles = [
    {
      title: "President, Computer Society, UoJ",
      year: "2024",
      links: [
        { icon: Facebook, href: "https://web.facebook.com/uojcompsoc/" },
        {
          icon: Linkedin,
          href: "https://www.linkedin.com/company/compsoc-uoj",
        },
        { icon: Globe, href: "https://www.society.jfn.ac.lk/compsoc/" },
      ],
    },
    {
      title: "Vice Chairman, IEEE Computer Society SBC, UoJ",
      year: "2023",
      links: [
        { icon: Facebook, href: "https://web.facebook.com/IEEECSUOJ" },
        { icon: Linkedin, href: "https://www.linkedin.com/company/ieeecsuoj" },
      ],
    },
    {
      title:
        "Public Visibility Team Lead & Video Editor, IEEE Student Branch UoJ",
      year: "2023",
      links: [
        { icon: Facebook, href: "https://web.facebook.com/IEEESBUoJ/" },
        { icon: Linkedin, href: "https://www.linkedin.com/company/ieeesbuoj" },
        { icon: Globe, href: "http://society.jfn.ac.lk/ieee" },
      ],
    },
    {
      title: "Treasurer, IEEE Computer Society SBC, UoJ",
      year: "2022",
      links: [
        { icon: Facebook, href: "https://web.facebook.com/IEEECSUOJ" },
        { icon: Linkedin, href: "https://www.linkedin.com/company/ieeecsuoj" },
      ],
    },
  ];

  return (
    <section id="volunteering" className="section-container">
      <h2 className="text-3xl font-bold mb-6 text-center">
        Volunteering & Leadership
      </h2>
      <div className="card p-6">
        <div className="flex items-center mb-4">
          <Users className="w-8 h-8 text-blue-600 mr-3" />
          <h3 className="text-2xl font-semibold text-blue-600">Roles</h3>
        </div>
        <ul className="space-y-4">
          {roles.map((role, index) => (
            <li
              key={index}
              className="flex flex-col sm:flex-row sm:justify-between sm:items-center border-b pb-2 last:border-b-0"
            >
              <div>
                <span className="text-lg text-slate-700">{role.title}</span>
                <span className="text-blue-500 font-semibold ml-2">
                  {role.year}
                </span>
              </div>
              <div className="flex mt-2 sm:mt-0">
                {role.links.map((link, linkIndex) => (
                  <a
                    key={linkIndex}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-700 mr-2"
                  >
                    <link.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
