"use client";
import { Mail, Linkedin, Github, Send } from "lucide-react"
import { useState } from "react"

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the form data to a server
    console.log("Form submitted:", formData)
    // Reset form after submission
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <section id="contact" className="section-container">
      <h2 className="text-3xl font-bold mb-6 text-center">Contact</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          {[
            { icon: Mail, text: "viththagan.rn@gmail.com", href: "mailto:viththagan.rn@gmail.com" },
            { icon: Linkedin, text: "LinkedIn", href: "https://linkedin.com/in/viththagan-roy-nesarajah" },
            { icon: Github, text: "GitHub", href: "https://github.com/RNViththagan" },
          ].map(({ icon: Icon, text, href }, index) => (
            <a
              key={index}
              href={href}
              className="card flex items-center p-4 hover:bg-blue-50 transition-colors duration-300"
            >
              <Icon className="h-6 w-6 mr-4 text-blue-500" />
              <span className="text-lg text-slate-700 hover:text-blue-600 transition-colors">{text}</span>
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
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            rows="4"
            required
          ></textarea>
          <button type="submit" className="btn inline-flex items-center">
            Send Message
            <Send className="ml-2 h-4 w-4" />
          </button>
        </form>
      </div>
    </section>
  )
}

