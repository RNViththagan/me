"use client"
import { ChevronDown } from "lucide-react"
import { useState, useRef } from "react"
import VideoCard from "./VideoCard"
import { shortFilms, promos } from "@/data/video-projects"
import { motion } from "framer-motion"
import ScrollAnimation from "./ScrollAnimation"

interface Video {
  title: string
  description: string
  videoId: string
  link: string
}

export default function VideoPortfolio() {
  const [showAllShortFilms, setShowAllShortFilms] = useState(false)
  const [showAllPromos, setShowAllPromos] = useState(false)
  const shortFilmScrollRef = useRef<HTMLDivElement>(null)
  const promoScrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right", ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      const cardWidth = ref.current.firstChild
        ? (ref.current.firstChild as HTMLElement).getBoundingClientRect().width
        : 0
      const scrollLeft = ref.current.scrollLeft
      const scrollTo = direction === "left" ? scrollLeft - cardWidth : scrollLeft + cardWidth

      ref.current.scrollTo({ left: scrollTo, behavior: "smooth" })
    }
  }

  const VideoSection = ({
    title,
    videos,
    showAll,
    setShowAll,
    scrollRef,
  }: {
    title: string
    videos: Video[]
    showAll: boolean
    setShowAll: React.Dispatch<React.SetStateAction<boolean>>
    scrollRef: React.RefObject<HTMLDivElement>
  }) => (
    <ScrollAnimation>
      <div className="mb-16">
        <h3 className="text-2xl font-semibold mb-8 text-blue-300">{title}</h3>
        <div className="relative">
          <motion.div
            ref={scrollRef}
            className={`flex ${
              showAll ? "flex-wrap justify-center" : "mx-10 space-x-6 overflow-x-auto pb-6 hide-scrollbar"
            }`}
            style={{ scrollSnapType: "x mandatory" }}
          >
            {videos.map((video, index) => (
              <motion.div
                key={index}
                className={`${showAll ? "w-full sm:w-1/2 lg:w-1/3 p-4" : "w-80 sm:w-96 flex-shrink-0"}`}
                style={{ scrollSnapAlign: "start" }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <VideoCard {...video} />
              </motion.div>
            ))}
          </motion.div>
          {!showAll && videos.length > 1 && (
            <>
              <motion.button
                onClick={() => scroll("left", scrollRef)}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-2 focus:outline-none"
                aria-label="Scroll left"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronDown className="w-6 h-6 rotate-90" />
              </motion.button>
              <motion.button
                onClick={() => scroll("right", scrollRef)}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-2 focus:outline-none"
                aria-label="Scroll right"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronDown className="w-6 h-6 -rotate-90" />
              </motion.button>
            </>
          )}
        </div>
        {videos.length > 3 && (
          <div className="flex justify-center mt-8">
            <motion.button
              onClick={() => setShowAll(!showAll)}
              className="bg-blue-600 hover:bg-blue-700 text-white rounded-full p-2 focus:outline-none transition-transform duration-300 ease-in-out transform hover:scale-110"
              aria-label={showAll ? "Show less" : "View all"}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronDown className={`w-6 h-6 transition-transform duration-300 ${showAll ? "rotate-180" : ""}`} />
            </motion.button>
          </div>
        )}
      </div>
    </ScrollAnimation>
  )

  return (
    <motion.section
      id="video-portfolio"
      className="py-20 bg-slate-900 w-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <h2 className="text-3xl font-bold mb-12 text-center text-blue-400">Visual Creations</h2>
        </ScrollAnimation>
        <VideoSection
          title="Short Films & Songs"
          videos={shortFilms}
          showAll={showAllShortFilms}
          setShowAll={setShowAllShortFilms}
          scrollRef={shortFilmScrollRef}
        />
        <VideoSection
          title="Promotional Videos"
          videos={promos}
          showAll={showAllPromos}
          setShowAll={setShowAllPromos}
          scrollRef={promoScrollRef}
        />
      </div>
    </motion.section>
  )
}

