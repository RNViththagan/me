import { MapPin } from "lucide-react"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="py-20 rounded-3xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0 ml-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Viththagan</h1>
          <h2 className="text-2xl md:text-3xl mb-6 text-white">Computer Science Undergraduate</h2>
          <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 w-fit">
            <MapPin className="h-5 w-5 mr-2" />
            <span>Jaffna, Sri Lanka</span>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-white shadow-lg animate-float">
            <Image   style={{ objectPosition: "bottom" }}  src="./Viththagan.jpeg" alt="Viththagan" layout="fill" objectFit="cover" />
          </div>
        </div>
      </div>
    </section>
  )
}

