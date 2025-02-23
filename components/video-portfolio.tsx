"use client";
import { useRef, useState, useCallback, useMemo } from "react";
import { motion, AnimatePresence, LayoutGroup, useInView } from "framer-motion";
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
    "films",
  );
  const [currentPage, setCurrentPage] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { width } = useWindowSize();

  // Refs for scroll animations
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const tabsRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const controlsRef = useRef<HTMLDivElement>(null);

  // InView hooks for scroll animations
  const isSectionInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const isTitleInView = useInView(titleRef, { once: true, amount: 0.5 });
  const isTabsInView = useInView(tabsRef, { once: true, amount: 0.5 });
  const isGridInView = useInView(gridRef, { once: true, amount: 0.2 });
  const isControlsInView = useInView(controlsRef, { once: true, amount: 0.5 });

  const videos = activeSection === "films" ? shortFilms : promos;

  const getItemsPerPage = useCallback(() => {
    if (isExpanded) {
      return videos.length;
    } else {
      if (width >= 1280) return 3;
      if (width >= 1024) return 3;
      if (width >= 768) return 2;
      return 1;
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
    setIsExpanded((prev) => {
      if (prev) {
        document
          .getElementById("videos")
          ?.scrollIntoView({ behavior: "smooth" });
      }
      return !prev;
    });
    setCurrentPage(0);
  };

  const currentVideos = isExpanded
    ? videos
    : videos.slice(
        currentPage * itemsPerPage,
        (currentPage + 1) * itemsPerPage,
      );

  const getVisiblePages = useCallback(() => {
    if (totalPages <= 5) return [...Array(totalPages).keys()];

    if (currentPage <= 2) return [0, 1, 2, 3, 4];
    if (currentPage >= totalPages - 3)
      return [
        totalPages - 5,
        totalPages - 4,
        totalPages - 3,
        totalPages - 2,
        totalPages - 1,
      ];

    return [
      currentPage - 2,
      currentPage - 1,
      currentPage,
      currentPage + 1,
      currentPage + 2,
    ];
  }, [totalPages, currentPage]);

  return (
    <motion.section
      ref={sectionRef}
      id="videos"
      className="py-20 bg-slate-900 w-full relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: isSectionInView ? 1 : 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="gradient-bg">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            delay: 1,
          }}
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            delay: 2,
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.h2
          ref={titleRef}
          className="text-3xl font-bold mb-12 text-center text-blue-400"
          initial={{ y: 20, opacity: 0 }}
          animate={{
            y: isTitleInView ? 0 : 20,
            opacity: isTitleInView ? 1 : 0,
          }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Visual Creations
        </motion.h2>

        {/* Section Tabs */}
        <motion.div
          ref={tabsRef}
          className="flex justify-center mb-8"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: isTabsInView ? 0 : 20, opacity: isTabsInView ? 1 : 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="glass-card rounded-full p-1 flex space-x-2">
            <motion.button
              onClick={() => {
                setActiveSection("films");
                setCurrentPage(0);
                setIsExpanded(false);
              }}
              className={`px-6 py-2 rounded-full transition-colors duration-300 ${
                activeSection === "films"
                  ? "bg-blue-500 text-white"
                  : "text-blue-300 hover:bg-white/5"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Short Films & Songs
            </motion.button>
            <motion.button
              onClick={() => {
                setActiveSection("promos");
                setCurrentPage(0);
                setIsExpanded(false);
              }}
              className={`px-6 py-2 rounded-full transition-colors duration-300 ${
                activeSection === "promos"
                  ? "bg-blue-500 text-white"
                  : "text-blue-300 hover:bg-white/5"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Promotional Videos
            </motion.button>
          </div>
        </motion.div>

        {/* Video Grid */}
        <motion.div
          ref={gridRef}
          className="relative"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: isGridInView ? 0 : 40, opacity: isGridInView ? 1 : 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="overflow-hidden">
            <LayoutGroup>
              <motion.div
                layout
                className={`grid gap-6 md:m-5  ${
                  isExpanded
                    ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3"
                    : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                }`}
              >
                <AnimatePresence mode="wait">
                  {currentVideos.map((video, index) => (
                    <motion.div
                      key={video.videoId}
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{
                        duration: 0.08,
                      }}
                    >
                      <VideoCard {...video} />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>
            </LayoutGroup>
          </div>

          {/* Navigation Controls */}
          <motion.div
            ref={controlsRef}
            className="flex justify-center items-center mt-8 space-x-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{
              y: isControlsInView ? 0 : 20,
              opacity: isControlsInView ? 1 : 0,
            }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {!isExpanded && (
              <>
                <motion.button
                  onClick={handlePrev}
                  className="glass-card p-3 rounded-full text-blue-300 hover:text-blue-100 disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  disabled={currentPage === 0}
                >
                  <IconArrowLeft className="w-6 h-6" />
                </motion.button>

                {/* Page Indicators */}
                <div className="flex items-center space-x-2">
                  {getVisiblePages().map((i) => (
                    <motion.button
                      key={i}
                      onClick={() => setCurrentPage(i)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        i === currentPage
                          ? "bg-blue-500 w-6"
                          : "bg-blue-500/30 w-2 hover:bg-blue-500/50"
                      }`}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.8 }}
                    />
                  ))}
                </div>

                <motion.button
                  onClick={handleNext}
                  className="glass-card p-3 rounded-full text-blue-300 hover:text-blue-100 disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: 1.1 }}
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
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isExpanded ? (
                <IconMinimize className="w-6 h-6" />
              ) : (
                <IconMaximize className="w-6 h-6" />
              )}
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
