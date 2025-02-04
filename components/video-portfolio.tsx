"use client";
import { Play, ChevronDown } from "lucide-react";
import { useState, useRef } from "react";

export default function VideoPortfolio() {
  const [showAllPromos, setShowAllPromos] = useState(false);
  const [showAllShortFilms, setShowAllShortFilms] = useState(false);
  const promoScrollRef = useRef<HTMLDivElement>(null);
  const shortFilmScrollRef = useRef<HTMLDivElement>(null);

  const promos = [
    {
      title: "UoJCoders V3",
      description: "After Effects, Premiere Pro",
      fbVideoId: "1038582524579937", // Replace with actual Facebook video ID
      link: "https://web.facebook.com/watch/?v=1038582524579937", // Replace with actual Facebook video link
    },
    {
      title: "React With Node ",
      description: "After Effects, Premiere Pro",
      fbVideoId: "7485821748167332", // Replace with actual Facebook video ID
      link: "https://web.facebook.com/watch/?v=7485821748167332", // Replace with actual Facebook video link
    },
    {
      title: "React With Node",
      description: "After Effects, Premiere Pro",
      fbVideoId: "771632348224488", // Replace with actual Facebook video ID
      link: "https://web.facebook.com/watch/?v=771632348224488", // Replace with actual Facebook video link
    },
    {
      title: "Promo",
      description: "After Effects, Premiere Pro",
      fbVideoId: "880471586381393",
      link: "https://web.facebook.com/watch/?v=880471586381393",
    },
    {
      title: "Promo",
      description: "After Effects, Premiere Pro",
      fbVideoId: "246593924826291",
      link: "https://web.facebook.com/watch/?v=246593924826291",
    },
    {
      title: "Promo",
      description: "After Effects, Premiere Pro",
      fbVideoId: "241112372029732",
      link: "https://web.facebook.com/watch/?v=241112372029732",
    },
    {
      title: "Promo",
      description: "After Effects, Premiere Pro",
      fbVideoId: "556851123327924",
      link: "https://web.facebook.com/watch/?v=556851123327924",
    },
    {
      title: "Promo",
      description: "After Effects, Premiere Pro",
      fbVideoId: "1236478127002120",
      link: "https://web.facebook.com/watch/?v=1236478127002120",
    },
    {
      title: "Promo",
      description: "After Effects, Premiere Pro",
      fbVideoId: "3457050581246410",
      link: "https://web.facebook.com/watch/?v=3457050581246410",
    },
    {
      title: "Promo",
      description: "After Effects, Premiere Pro",
      fbVideoId: "905187500609495",
      link: "https://web.facebook.com/watch/?v=905187500609495",
    },
    {
      title: "Promo",
      description: "After Effects, Premiere Pro",
      fbVideoId: "777964400199802",
      link: "https://web.facebook.com/watch/?v=777964400199802",
    },
    {
      title: "Promo",
      description: "After Effects, Premiere Pro",
      fbVideoId: "712134146680534",
      link: "https://web.facebook.com/watch/?v=712134146680534",
    },
    {
      title: "Promo",
      description: "After Effects, Premiere Pro",
      fbVideoId: "376460227847936",
      link: "https://web.facebook.com/watch/?v=376460227847936",
    },
    {
      title: "Promo",
      description: "After Effects, Premiere Pro",
      fbVideoId: "376553664444056",
      link: "https://web.facebook.com/watch/?v=376553664444056",
    },
    {
      title: "Promo",
      description: "After Effects, Premiere Pro",
      fbVideoId: "918796572694511",
      link: "https://web.facebook.com/watch/?v=918796572694511",
    },
    {
      title: "Promo",
      description: "After Effects, Premiere Pro",
      fbVideoId: "796017478891993", // Duplicate ID as previously
      link: "https://web.facebook.com/watch/?v=796017478891993",
    },
  ];

  const shortFilms = [
    {
      title: "Narumugaye Album song",
      description: "VFX : After Effects, Premiere Pro, Cinema 4D",
      youtubeId: "mI18BF2XiWc", // Replace with actual YouTube video ID
      link: "https://www.youtube.com/watch?v=mI18BF2XiWc", // Replace with actual YouTube video link
    },
    {
      title: "Pause short film Teaser",
      description: "Edit and VFX",
      youtubeId: "eKCpk4zPdUc", // Replace with actual YouTube video ID
      link: "https://www.youtube.com/watch?v=eKCpk4zPdUc", // Replace with actual YouTube video link
    },
    {
      title: "Pause short film",
      description: "Edit and VFX",
      youtubeId: "w__sDAwdB4o", // Replace with actual YouTube video ID
      link: "https://www.youtube.com/watch?v=w__sDAwdB4o", // Replace with actual YouTube video link
    },
    {
      title: "Poimaiyum Vaaimaiyidaththu Short Film Teaser",
      description: "DoP, Edit and VFX",
      youtubeId: "cZ-fiEeyThw", // Replace with actual YouTube video ID
      link: "https://www.youtube.com/watch?v=cZ-fiEeyThw", // Replace with actual YouTube video link
    },
    {
      title: "Poimaiyum Vaaimaiyidaththu Short Film",
      description: "DoP, Edit and VFX",
      youtubeId: "TN3ERlsGJ1s", // Replace with actual YouTube video ID
      link: "https://www.youtube.com/watch?v=TN3ERlsGJ1s", // Replace with actual YouTube video link
    },
  ];

  const scroll = (
    direction: "left" | "right",
    ref: React.RefObject<HTMLDivElement>,
  ) => {
    if (ref.current) {
      const { scrollLeft, clientWidth } = ref.current;
      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;
      ref.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  const VideoSection = ({
    title,
    videos,
    showAll,
    setShowAll,
    renderVideo,
    scrollRef,
  }: {
    title: string;
    videos: any[];
    showAll: boolean;
    setShowAll: React.Dispatch<React.SetStateAction<boolean>>;
    renderVideo: any;
    scrollRef: React.RefObject<HTMLDivElement>;
  }) => (
    <div className="mb-16">
      <h3 className="text-2xl font-semibold mb-8 text-blue-300">{title}</h3>
      <div className="relative">
        <div
          ref={scrollRef}
          className={`flex mx-10 ${showAll ? "flex-wrap justify-center" : " space-x-6 overflow-x-auto pb-6 hide-scrollbar"}`}
        >
          {videos.map((video, index) => (
            <div
              key={index}
              className={`${showAll ? "w-full sm:w-1/2 lg:w-1/3 p-4" : "w-80 flex-shrink-0"}`}
            >
              {renderVideo(video)}
            </div>
          ))}
        </div>
        {videos.length > 2 && !showAll && (
          <>
            <button
              onClick={() => scroll("left", scrollRef)}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-2 focus:outline-none"
              aria-label="Scroll left"
            >
              <ChevronDown className="w-6 h-6 rotate-90" />
            </button>
            <button
              onClick={() => scroll("right", scrollRef)}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-2 focus:outline-none"
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

  const renderPromo = (promo) => (
    <div className="bg-slate-800 rounded-xl overflow-hidden shadow-lg h-full flex flex-col">
      <div className="relative pt-[56.25%] h-0 flex-shrink-0">
        <iframe
          src={`https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Ffacebook%2Fvideos%2F${promo.fbVideoId}%2F&show_text=false`}
          className="absolute top-0 left-0 w-full h-full border-0"
          scrolling="no"
          frameBorder="0"
          allowFullScreen={true}
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        ></iframe>
      </div>
      <div className="p-6 flex-grow flex flex-col justify-between">
        <div>
          <h4 className="text-xl font-semibold mb-2 text-blue-300">
            {promo.title}
          </h4>
          <p className="text-slate-300 mb-4">{promo.description}</p>
        </div>
        <a
          href={promo.link}
          target="_blank"
          rel="noopener noreferrer"
          className="btn bg-blue-600 hover:bg-blue-700 text-white inline-flex items-center text-sm mt-auto"
        >
          Watch on Facebook
          <Play className="ml-2 h-4 w-4" />
        </a>
      </div>
    </div>
  );

  const renderShortFilm = (film) => (
    <div className="bg-slate-800 rounded-xl overflow-hidden shadow-lg h-full flex flex-col">
      <div className="relative pt-[56.25%] h-0 flex-shrink-0">
        <iframe
          src={`https://www.youtube.com/embed/${film.youtubeId}`}
          className="absolute top-0 left-0 w-full h-full border-0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="p-6 flex-grow flex flex-col justify-between">
        <div>
          <h4 className="text-xl font-semibold mb-2 text-blue-300">
            {film.title}
          </h4>
          <p className="text-slate-300 mb-4">{film.description}</p>
        </div>
        <a
          href={film.link}
          target="_blank"
          rel="noopener noreferrer"
          className="btn bg-red-600 hover:bg-red-700 text-white inline-flex items-center text-sm mt-auto"
        >
          Watch on YouTube
          <Play className="ml-2 h-4 w-4" />
        </a>
      </div>
    </div>
  );

  return (
    <section id="video-portfolio" className="py-20 px-6 bg-slate-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-blue-400">
          Video Portfolio
        </h2>
        <VideoSection
          title="Short Films & Songs"
          videos={shortFilms}
          showAll={showAllShortFilms}
          setShowAll={setShowAllShortFilms}
          renderVideo={renderShortFilm}
          scrollRef={shortFilmScrollRef}
        />
        <VideoSection
          title="Promo Videos"
          videos={promos}
          showAll={showAllPromos}
          setShowAll={setShowAllPromos}
          renderVideo={renderPromo}
          scrollRef={promoScrollRef}
        />
      </div>
    </section>
  );
}
