"use client";
import { Play } from "lucide-react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface VideoCardProps {
  title: string;
  description: string;
  videoId: string;
  link: string;
}

export default function VideoCard({
  title,
  description,
  videoId,
  link,
}: VideoCardProps) {
  const [isInView, setIsInView] = useState(false);

  const platform = link.includes("youtube") ? "youtube" : "facebook";

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.5 },
    );

    const currentElement = document.getElementById(`video-${videoId}`);
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [videoId]);

  const renderVideoEmbed = () => {
    if (platform === "youtube") {
      return (
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          className="absolute top-0 left-0 w-full h-full border-0"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      );
    } else if (platform === "facebook") {
      return (
        <iframe
          src={`https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Ffacebook%2Fvideos%2F${videoId}%2F&show_text=false`}
          className="absolute top-0 left-0 w-full h-full border-0"
          scrolling="no"
          frameBorder="0"
          allowFullScreen={true}
          allow="clipboard-write; encrypted-media; picture-in-picture; web-share"
        ></iframe>
      );
    }
  };

  return (
    <motion.div
      id={`video-${videoId}`}
      className="bg-slate-800 rounded-xl overflow-hidden shadow-lg h-full flex flex-col"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative pt-[56.25%] h-0 flex-shrink-0">
        {renderVideoEmbed()}
      </div>
      <div className="p-4 flex-grow flex flex-col justify-between">
        <div>
          <motion.h4
            className="text-lg font-semibold mb-2 text-blue-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {title}
          </motion.h4>
          <motion.p
            className="text-sm text-slate-300 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {description}
          </motion.p>
        </div>
        <motion.a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className={`btn ${
            platform === "youtube"
              ? "bg-red-600 hover:bg-red-700"
              : "bg-blue-600 hover:bg-blue-700"
          } text-white inline-flex items-center text-sm mt-auto`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Watch on {platform === "youtube" ? " YouTube" : " Facebook"}
          <Play className="ml-2 h-4 w-4" />
        </motion.a>
      </div>
    </motion.div>
  );
}
