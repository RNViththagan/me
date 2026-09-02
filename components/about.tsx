"use client";
import { IconUsers, IconCode, IconBulb } from "@tabler/icons-react";
import { motion } from "framer-motion";
import ScrollAnimation from "./ScrollAnimation";

export default function About() {
  const traits = [
    { icon: IconCode, text: "AI Agent Engineer" },
    { icon: IconBulb, text: "AI & ML Research" },
    { icon: IconUsers, text: "Community & Mentorship" },
  ];

  return (
    <motion.section
      id="about"
      className="py-20 px-6 bg-gradient-to-b from-slate-900 to-slate-800"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-8 text-justify">
        <ScrollAnimation>
          <motion.h2
            className="text-3xl font-bold mb-8 text-center text-blue-400"
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
          >
            About Me
          </motion.h2>
        </ScrollAnimation>
        <ScrollAnimation>
          <motion.p
            className="text-lg text-slate-300 leading-relaxed mb-12 max-w-3xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            I build AI agent systems, focused on the agent harness that turns a
            language model into a dependable coding agent. At WSO2, I work on the
            agent architecture behind WSO2 Integrator Copilot, an AI coding
            assistant for Ballerina integration development, along with the
            open-source developer tooling around it. My background spans applied
            AI engineering and machine learning research, and I stay active in
            the developer community through speaking, writing, and mentoring.
          </motion.p>
        </ScrollAnimation>
        <div className="flex flex-wrap justify-center gap-8">
          {traits.map(({ icon: Icon, text }, index) => (
            <ScrollAnimation key={index}>
              <motion.div
                className="flex flex-col items-center"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  delay: 0.4 + index * 0.1,
                  type: "spring",
                  stiffness: 100,
                }}
              >
                <div className="w-16 h-16 rounded-full bg-blue-900/50 flex items-center justify-center mb-4">
                  <Icon className="w-8 h-8 text-blue-400" />
                </div>
                <span className="text-slate-300">{text}</span>
              </motion.div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
