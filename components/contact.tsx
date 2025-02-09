"use client";
import {
  IconBrandLinkedin,
  IconBrandGithub,
  IconSend,
  IconBrandFacebook,
} from "@tabler/icons-react";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast"; // Import toast

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const scriptURL =
      "https://script.google.com/macros/s/AKfycbx8XSK08bfVPeMitIliiJd5ANgXvvJ1IKtat4IcxaAKcs8AMdQ5m8voHCpN7ny6w2ky/exec"; // Replace with your actual Apps Script URL

    try {
      await fetch(scriptURL, {
        method: "POST",
        mode: "no-cors", // Temporary workaround
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      toast.success("Message sent successfully!"); // Success Toast
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error:", error);
      toast.error("Error sending message."); // Error Toast
    }
  };

  return (
    <section id="contact" className="py-20 px-6 bg-slate-900">
      <Toaster position="top-right" reverseOrder={false} />
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-blue-400">
          Contact
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            {[
              // {
              //   icon: Mail,
              //   text: "viththagan.rn@gmail.com",
              //   href: "mailto:viththagan.rn@gmail.com",
              // },
              {
                icon: IconBrandGithub,
                text: "GitHub",
                href: "https://github.com/RNViththagan",
              },
              {
                icon: IconBrandLinkedin,
                text: "LinkedIn",
                href: "https://linkedin.com/in/viththagan-roy-nesarajah",
              },
              {
                icon: IconBrandFacebook,
                text: "Facebook",
                href: "https://web.facebook.com/viththagan.roynesarajah/",
              },
            ].map(({ icon: Icon, text, href }, index) => (
              <a
                key={index}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-800 rounded-xl flex items-center p-4 hover:bg-slate-700 transition-colors duration-300"
              >
                <Icon className="h-6 w-6 mr-4 text-blue-400" />
                <span className="text-lg text-slate-300 hover:text-blue-300 transition-colors">
                  {text}
                </span>
              </a>
            ))}
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 bg-slate-800 border border-slate-700 rounded text-slate-300 focus:border-blue-500 focus:outline-none"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 bg-slate-800 border border-slate-700 rounded text-slate-300 focus:border-blue-500 focus:outline-none"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2 bg-slate-800 border border-slate-700 rounded text-slate-300 focus:border-blue-500 focus:outline-none"
              rows="4"
              required
            ></textarea>
            <button
              type="submit"
              className="btn bg-blue-600 hover:bg-blue-700 text-white inline-flex items-center"
            >
              Send Message
              <IconSend className="ml-2 h-4 w-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
