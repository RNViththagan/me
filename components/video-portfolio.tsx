"use client";
import { ChevronDown } from "lucide-react";
import { useState, useRef } from "react";
import VideoCard from "./VideoCard";

interface Video {
  title: string;
  description: string;
  videoId: string;
  link: string;
}

export default function VideoPortfolio() {
  const [showAllShortFilms, setShowAllShortFilms] = useState(false);
  const [showAllPromos, setShowAllPromos] = useState(false);
  const shortFilmScrollRef = useRef<HTMLDivElement>(null);
  const promoScrollRef = useRef<HTMLDivElement>(null);

  const shortFilms: Video[] = [
    {
      title: "Narumugaye Album song",
      description: "VFX : After Effects, Premiere Pro, Cinema 4D",
      videoId: "mI18BF2XiWc",
      link: "https://www.youtube.com/watch?v=mI18BF2XiWc",
    },
    {
      title: "Narumugaye VFX Breakdown",
      description: "After Effects, Premiere Pro",
      videoId: "376460227847936",
      link: "https://web.facebook.com/watch/?v=376460227847936",
    },
    {
      title: "Pause short film Teaser",
      description: "Edit and VFX",
      videoId: "eKCpk4zPdUc",
      link: "https://www.youtube.com/watch?v=eKCpk4zPdUc",
    },
    {
      title: "Pause short film",
      description: "Edit and VFX",
      videoId: "w__sDAwdB4o",
      link: "https://www.youtube.com/watch?v=w__sDAwdB4o",
    },
    {
      title: "Poimaiyum Vaaimaiyidaththu Short Film Teaser",
      description: "DoP, Edit and VFX",
      videoId: "cZ-fiEeyThw",
      link: "https://www.youtube.com/watch?v=cZ-fiEeyThw",
    },
    {
      title: "Poimaiyum Vaaimaiyidaththu Short Film",
      description: "DoP, Edit and VFX",
      videoId: "TN3ERlsGJ1s",
      link: "https://www.youtube.com/watch?v=TN3ERlsGJ1s",
    },
  ];

  const promos: Video[] = [
    {
      title: "UoJCoders V3",
      description: "After Effects, Premiere Pro",
      videoId: "1038582524579937",
      link: "https://web.facebook.com/watch/?v=1038582524579937",
    },
    {
      title: "React With Node ",
      description: "After Effects, Premiere Pro",
      videoId: "7485821748167332",
      link: "https://web.facebook.com/watch/?v=7485821748167332",
    },
    {
      title: "React With Node",
      description: "After Effects, Premiere Pro",
      videoId: "771632348224488",
      link: "https://web.facebook.com/watch/?v=771632348224488",
    },
    {
      title: "Promo",
      description: "After Effects, Premiere Pro",
      videoId: "880471586381393",
      link: "https://web.facebook.com/watch/?v=880471586381393",
    },
    {
      title: "Promo",
      description: "After Effects, Premiere Pro",
      videoId: "246593924826291",
      link: "https://web.facebook.com/watch/?v=246593924826291",
    },
    {
      title: "Promo",
      description: "After Effects, Premiere Pro",
      videoId: "241112372029732",
      link: "https://web.facebook.com/watch/?v=241112372029732",
    },
    {
      title: "Promo",
      description: "After Effects, Premiere Pro",
      videoId: "556851123327924",
      link: "https://web.facebook.com/watch/?v=556851123327924",
    },
    {
      title: "Promo",
      description: "After Effects, Premiere Pro",
      videoId: "1236478127002120",
      link: "https://web.facebook.com/watch/?v=1236478127002120",
    },
    {
      title: "Promo",
      description: "After Effects, Premiere Pro",
      videoId: "3457050581246410",
      link: "https://web.facebook.com/watch/?v=3457050581246410",
    },
    {
      title: "Promo",
      description: "After Effects, Premiere Pro",
      videoId: "905187500609495",
      link: "https://web.facebook.com/watch/?v=905187500609495",
    },
    {
      title: "Promo",
      description: "After Effects, Premiere Pro",
      videoId: "777964400199802",
      link: "https://web.facebook.com/watch/?v=777964400199802",
    },
    {
      title: "Promo",
      description: "After Effects, Premiere Pro",
      videoId: "712134146680534",
      link: "https://web.facebook.com/watch/?v=712134146680534",
    },
    {
      title: "Promo",
      description: "After Effects, Premiere Pro",
      videoId: "376553664444056",
      link: "https://web.facebook.com/watch/?v=376553664444056",
    },
    {
      title: "Promo",
      description: "After Effects, Premiere Pro",
      videoId: "918796572694511",
      link: "https://web.facebook.com/watch/?v=918796572694511",
    },
    {
      title: "Promo",
      description: "After Effects, Premiere Pro",
      videoId: "796017478891993", // Duplicate ID as previously
      link: "https://web.facebook.com/watch/?v=796017478891993",
    },
  ];

  const scroll = (
    direction: "left" | "right",
    ref: React.RefObject<HTMLDivElement>,
  ) => {
    if (ref.current) {
      const cardWidth = ref.current.firstChild
        ? (ref.current.firstChild as HTMLElement).getBoundingClientRect().width
        : 0;
      const scrollLeft = ref.current.scrollLeft;
      const scrollTo =
        direction === "left" ? scrollLeft - cardWidth : scrollLeft + cardWidth;

      ref.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  const VideoSection = ({
    title,
    videos,
    showAll,
    setShowAll,
    scrollRef,
  }: {
    title: string;
    videos: Video[];
    showAll: boolean;
    setShowAll: React.Dispatch<React.SetStateAction<boolean>>;
    scrollRef: React.RefObject<HTMLDivElement>;
  }) => (
    <div className="mb-16">
      <h3 className="text-2xl font-semibold mb-8 text-blue-300">{title}</h3>
      <div className="relative">
        <div
          ref={scrollRef}
          className={`flex  mx-10 ${showAll ? "flex-wrap justify-center" : " space-x-6 overflow-x-auto pb-6 hide-scrollbar"}`}
          style={{ scrollSnapType: "x mandatory" }}
        >
          {videos.map((video, index) => (
            <div
              key={index}
              className={`${showAll ? "w-full sm:w-1/2 lg:w-1/3 p-4" : "w-80 sm:w-96 flex-shrink-0"}`}
              style={{ scrollSnapAlign: "start" }}
            >
              <VideoCard {...video} />
            </div>
          ))}
        </div>
        {!showAll && videos.length > 1 && (
          <>
            <button
              onClick={() => scroll("left", scrollRef)}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-2 focus:outline-none"
              aria-label="Scroll left"
            >
              <ChevronDown className="w-6 h-6 rotate-90" />
            </button>
            <button
              onClick={() => scroll("right", scrollRef)}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-2 focus:outline-none"
              aria-label="Scroll right"
            >
              <ChevronDown className="w-6 h-6 -rotate-90" />
            </button>
          </>
        )}
      </div>
      {videos.length > 3 && (
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setShowAll(!showAll)}
            className="bg-blue-600 hover:bg-blue-700 text-white rounded-full p-2 focus:outline-none transition-transform duration-300 ease-in-out transform hover:scale-110"
            aria-label={showAll ? "Show less" : "View all"}
          >
            <ChevronDown
              className={`w-6 h-6 transition-transform duration-300 ${showAll ? "rotate-180" : ""}`}
            />
          </button>
        </div>
      )}
    </div>
  );

  return (
    <section id="video-portfolio" className="py-20 md:px-6 bg-slate-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-blue-400">
          Video Portfolio
        </h2>
        <VideoSection
          title="Short Films & Songs"
          videos={shortFilms}
          showAll={showAllShortFilms}
          setShowAll={setShowAllShortFilms}
          scrollRef={shortFilmScrollRef}
        />
        <VideoSection
          title="Promo Videos"
          videos={promos}
          showAll={showAllPromos}
          setShowAll={setShowAllPromos}
          scrollRef={promoScrollRef}
        />
      </div>
    </section>
  );
}
