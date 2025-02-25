"use client";
import { MapPin, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 to-blue-900 text-white overflow-hidden md:rounded-t-xl shadow-2xl">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 py-16 md:py-24 flex flex-col lg:flex-row items-center justify-between relative z-10">
        <div className="lg:w-1/2 mb-12 lg:ml-12 lg:mb-0 text-center lg:text-left">
          <h1 className="text-4xl lg:text-6xl font-extrabold mb-4 leading-tight">
            Hi, I'm{" "}
            <motion.span
              className="text-transparent bg-clip-text bg-gradient-to-r"
              style={{
                backgroundImage:
                  "linear-gradient(to right, var(--gradient-from), var(--gradient-to))",
                "--gradient-from": "rgb(96, 165, 250)",
                "--gradient-to": "rgb(147, 51, 234)",
              }}
              animate={{
                "--gradient-from": [
                  "rgb(96, 165, 250)", // blue-400
                  "rgb(139, 92, 246)", // violet-500
                  "rgb(236, 72, 153)", // pink-500
                  "rgb(59, 130, 246)", // blue-500
                  "rgb(96, 165, 250)", // back to blue-400
                ],
                "--gradient-to": [
                  "rgb(147, 51, 234)", // purple-600
                  "rgb(236, 72, 153)", // pink-500
                  "rgb(139, 92, 246)", // violet-500
                  "rgb(147, 51, 234)", // purple-600
                  "rgb(147, 51, 234)", // stay at purple-600
                ],
              }}
              transition={{
                duration: 6,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            >
              Viththagan
            </motion.span>
          </h1>
          <h2 className="text-xl lg:text-2xl mb-6 text-blue-200">
            Computer Science Undergraduate
          </h2>
          <div className="flex items-center justify-center lg:justify-start bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 w-fit mb-8 mx-auto lg:mx-0">
            <MapPin className="h-5 w-5 mr-2 text-blue-300" />
            <span className="text-blue-100">Jaffna, Sri Lanka</span>
          </div>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center lg:justify-start">
            <Link
              href="#contact"
              className="btn bg-blue-600 hover:bg-blue-700 text-white transition-colors duration-300 flex items-center justify-center"
            >
              Get in Touch
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="#projects"
              className="btn bg-purple-600 hover:bg-purple-700 text-white transition-colors duration-300 flex items-center justify-center"
            >
              View Projects
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
        <div className="lg:w-1/2 flex justify-center">
          <div className="relative w-64 h-64 lg:w-80 lg:h-80 animate-float">
            {/* Decorative Pattern */}
            <div className="absolute inset-0 animate-spin-slow">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-full h-full origin-center"
                  style={{
                    transform: `rotate(${i * 45}deg)`,
                  }}
                >
                  <div className="absolute top-0 left-1/2 w-1 h-8 bg-gradient-to-b from-blue-500 to-transparent transform -translate-x-1/2 rounded-full" />
                  <div className="absolute bottom-0 left-1/2 w-1 h-8 bg-gradient-to-t from-purple-500 to-transparent transform -translate-x-1/2 rounded-full" />
                </div>
              ))}
            </div>

            {/* Outer Ring */}
            <div className="absolute inset-4 rounded-full border-2 border-blue-500/30 animate-spin-slow" />

            {/* Inner Pattern */}
            <div
              className="absolute inset-8 animate-spin-slow"
              style={{ animationDirection: "reverse" }}
            >
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-full h-full origin-center"
                  style={{
                    transform: `rotate(${i * 60}deg)`,
                  }}
                >
                  <div className="absolute top-0 left-1/2 w-0.5 h-4 bg-purple-500/30 transform -translate-x-1/2" />
                </div>
              ))}
            </div>

            {/* Glass Background */}
            <div className="absolute inset-10 rounded-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20" />

            {/* Image Container */}
            <div className="absolute inset-12 rounded-full overflow-hidden border-2 border-white/50">
              <Image
                src="./Viththagan.jpeg"
                alt="Viththagan"
                layout="fill"
                objectFit="cover"
                className="rounded-full"
                style={{ objectPosition: "center" }}
              />
            </div>

            {/* Glowing Orbs */}
            <div className="absolute top-1/2 left-0 w-3 h-3 bg-blue-500 rounded-full blur-sm animate-float" />
            <div className="absolute bottom-0 right-1/2 w-3 h-3 bg-purple-500 rounded-full blur-sm animate-float animation-delay-2000" />
            <div className="absolute top-0 right-1/4 w-3 h-3 bg-pink-500 rounded-full blur-sm animate-float animation-delay-4000" />
          </div>
        </div>
      </div>
    </section>
  );
}
