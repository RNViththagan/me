import { MapPin, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 to-blue-900 text-white overflow-hidden shadow-2xl">
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
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
              Viththagan
            </span>
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
          <div className="relative w-56 h-56 lg:w-72 lg:h-72 animate-float">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full animate-spin-slow"></div>
            <div className="absolute inset-1 bg-slate-900 rounded-full"></div>
            <div className="absolute inset-2 rounded-full overflow-hidden border-4 border-white/50">
              <Image
                style={{ objectPosition: "bottom" }}
                src="./Viththagan.jpeg"
                alt="Viththagan"
                layout="fill"
                objectFit="cover"
                className="rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
