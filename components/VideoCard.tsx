"use client";

import { Play } from "lucide-react";
import { useState, useEffect, useRef } from "react";
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
  const [isLoaded, setIsLoaded] = useState(false);
  const platform = link.includes("youtube") ? "youtube" : "facebook";

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsLoaded(true);
        }
      },
      { threshold: 0.1 },
    );

    const element = document.getElementById(`video-${videoId}`);
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
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
          loading="lazy"
        />
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

  const FacebookVideoEmbed = (videoId: string) => {
    const [embedFailed, setEmbedFailed] = useState(false);
    const [thumbnailUrl, setThumbnailUrl] = useState<string | null>(null);
    const [thumbnailFailed, setThumbnailFailed] = useState(false);
    const iframeRef = useRef<HTMLIFrameElement | null>(null);
    const videoUrl = `https://www.facebook.com/facebook/videos/${videoId}/`;
    const fallbackThumbnail = "/fallback-thumbnail.jpg"; // Replace with your fallback image
    console.log(thumbnailUrl);

    useEffect(() => {
      // Fetch video thumbnail from Facebook Graph API
      const fetchThumbnail = async () => {
        try {
          const response = await fetch(
            `https://graph.facebook.com/v22.0/${videoId}/thumbnails`,
          );
          const data = await response.json();

          if (data?.thumbnails?.length > 0) {
            setThumbnailUrl(data.thumbnails[0].uri); // Use the first thumbnail
          } else {
            setThumbnailFailed(true);
          }
        } catch (error) {
          console.error("Error fetching thumbnail:", error);
          setThumbnailFailed(true);
        }
      };

      fetchThumbnail();
    }, [videoId]);

    useEffect(() => {
      const checkIframeFailure = () => {
        if (!iframeRef.current) return;

        setTimeout(() => {
          if (
            iframeRef.current?.clientHeight &&
            iframeRef.current.clientHeight < 100
          ) {
            setEmbedFailed(true);
          }
        }, 3000);
      };

      checkIframeFailure();
    }, []);

    return (
      <>
        {!embedFailed ? (
          <iframe
            ref={iframeRef}
            src={`https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(videoUrl)}&show_text=false`}
            className="absolute top-0 left-0 w-full h-full border-0"
            scrolling="no"
            frameBorder="0"
            allowFullScreen
            allow="clipboard-write; encrypted-media; picture-in-picture; web-share"
            loading="lazy"
            onError={() => setEmbedFailed(true)}
            onLoad={() => {
              setTimeout(() => {
                if (
                  iframeRef.current?.clientHeight &&
                  iframeRef.current.clientHeight < 100
                ) {
                  setEmbedFailed(true);
                }
              }, 2000);
            }}
          />
        ) : (
          <a
            href={videoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="relative block"
          >
            <img
              src={
                thumbnailFailed
                  ? fallbackThumbnail
                  : thumbnailUrl || fallbackThumbnail
              }
              alt="Facebook Video Thumbnail"
              className="w-full h-auto"
              onError={() => setThumbnailFailed(true)}
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
                viewBox="0 0 24 24"
                width="50"
                height="50"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </a>
        )}
      </>
    );
  };

  return (
    <motion.div
      id={`video-${videoId}`}
      className="glass-card rounded-xl overflow-hidden shadow-lg h-full flex flex-col group"
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      whileHover={{ scale: 1.02 }}
      transition={{
        layout: { duration: 0.09 },
        scale: { duration: 0.08 },
      }}
    >
      <div className="relative pt-[56.25%] h-0 flex-shrink-0 overflow-hidden">
        <div
          className={`absolute inset-0 flex items-center justify-center bg-slate-800 transition-opacity duration-700 ${
            isLoaded ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
        </div>
        {renderVideoEmbed()}
      </div>
      <motion.div
        className="p-4 flex-grow flex flex-col"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <h4 className="text-lg font-semibold mb-2 text-blue-300 line-clamp-1">
          {title}
        </h4>
        <p className="text-sm text-slate-300 mb-4 line-clamp-2 flex-grow">
          {description}
        </p>
        <motion.a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className={`btn ${
            platform === "youtube"
              ? "bg-red-600 hover:bg-red-700"
              : "bg-blue-600 hover:bg-blue-700"
          } text-white inline-flex items-center text-sm group`}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Watch on {platform === "youtube" ? "YouTube" : "Facebook"}
          <motion.span
            className="ml-2"
            initial={{ x: 0 }}
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Play className="h-4 w-4" />
          </motion.span>
        </motion.a>
      </motion.div>
    </motion.div>
  );
}
