"use client";
import { useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  IconArrowLeft,
  IconArrowRight,
  IconMaximize,
  IconMinimize,
} from "@tabler/icons-react";
import VideoCard from "./VideoCard";
import { shortFilms, promos } from "@/data/video-projects";
import { useWindowSize } from "@/app/hooks/useWindowSize";

export default function VideoPortfolio() {
  const [activeSection, setActiveSection] = useState<"films" | "promos">(
    "promos",
  );
  const [currentPage, setCurrentPage] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { width } = useWindowSize();

  const videos = activeSection === "films" ? shortFilms : promos;

  // Dynamic items per page based on screen size and expanded state
  const getItemsPerPage = useCallback(() => {
    if (isExpanded) {
      return videos.length; // Show all videos when expanded
    } else {
      if (width >= 1280) return 3; // xl
      if (width >= 1024) return 3; // lg
      if (width >= 768) return 2; // md
      return 1; // sm and below
    }
  }, [width, isExpanded, videos.length]);

  const itemsPerPage = getItemsPerPage();
  const totalPages = Math.ceil(videos.length / itemsPerPage);

  const handleNext = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const handlePrev = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
    setCurrentPage(0); // Reset to first page when toggling view
  };

  const currentVideos = isExpanded
    ? videos // Show all videos when expanded
    : videos.slice(
        currentPage * itemsPerPage,
        (currentPage + 1) * itemsPerPage,
      );

  return (
    <motion.section
      id="videos"
      className="py-20 bg-slate-900 w-full relative overflow-hidden"
    >
      <div className="gradient-bg">
        <div />
        <div />
        <div />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-3xl font-bold mb-12 text-center text-blue-400">
          Visual Creations
        </h2>

        {/* Section Tabs */}
        <div className="flex justify-center mb-8">
          <div className="glass-card rounded-full p-1 flex space-x-2">
            <motion.button
              onClick={() => {
                setActiveSection("films");
                setCurrentPage(0);
              }}
              className={`px-6 py-2 rounded-full transition-colors duration-300 ${
                activeSection === "films"
                  ? "bg-blue-500 text-white"
                  : "text-blue-300 hover:bg-white/5"
              }`}
              whileTap={{ scale: 0.97 }}
            >
              Short Films & Songs
            </motion.button>
            <motion.button
              onClick={() => {
                setActiveSection("promos");
                setCurrentPage(0);
              }}
              className={`px-6 py-2 rounded-full transition-colors duration-300 ${
                activeSection === "promos"
                  ? "bg-blue-500 text-white"
                  : "text-blue-300 hover:bg-white/5"
              }`}
              whileTap={{ scale: 0.97 }}
            >
              Promotional Videos
            </motion.button>
          </div>
        </div>

        {/* Video Grid */}
        <div className="relative" ref={containerRef}>
          <div className="overflow-hidden">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={`${activeSection}-${currentPage}-${isExpanded}`}
                className={`grid gap-6 ${
                  isExpanded
                    ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3"
                    : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                }`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                {currentVideos.map((video) => (
                  <VideoCard key={video.videoId} {...video} />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center items-center mt-8 space-x-4">
            {!isExpanded && (
              <>
                <motion.button
                  onClick={handlePrev}
                  className="glass-card p-3 rounded-full text-blue-300 hover:text-blue-100 disabled:opacity-50 disabled:cursor-not-allowed"
                  whileTap={{ scale: 0.9 }}
                  disabled={currentPage === 0}
                >
                  <IconArrowLeft className="w-6 h-6" />
                </motion.button>

                {/* Page Indicators */}
                <div className="flex items-center space-x-2">
                  {[...Array(totalPages)].map((_, i) => (
                    <motion.button
                      key={i}
                      onClick={() => setCurrentPage(i)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        i === currentPage
                          ? "bg-blue-500 w-6"
                          : "bg-blue-500/30 w-2 hover:bg-blue-500/50"
                      }`}
                      whileTap={{ scale: 0.9 }}
                    />
                  ))}
                </div>

                <motion.button
                  onClick={handleNext}
                  className="glass-card p-3 rounded-full text-blue-300 hover:text-blue-100 disabled:opacity-50 disabled:cursor-not-allowed"
                  whileTap={{ scale: 0.9 }}
                  disabled={currentPage === totalPages - 1}
                >
                  <IconArrowRight className="w-6 h-6" />
                </motion.button>
              </>
            )}

            <motion.button
              onClick={toggleExpand}
              className="glass-card p-3 rounded-full text-blue-300 hover:text-blue-100"
              whileTap={{ scale: 0.9 }}
            >
              {isExpanded ? (
                <IconMinimize className="w-6 h-6" />
              ) : (
                <IconMaximize className="w-6 h-6" />
              )}
            </motion.button>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
