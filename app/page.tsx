import Header from "@/components/header";
import Hero from "@/components/hero";
import About from "@/components/about";
import Skills from "@/components/skills";
import Projects from "@/components/projects";
import VideoPortfolio from "@/components/video-portfolio";
import Achievements from "@/components/achievements";
import Education from "@/components/education";
import Volunteering from "@/components/volunteering";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen  bg-slate-900">
      <Header />
      <main className="w-full">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <VideoPortfolio />
        <Achievements />
        <Education />
        <Volunteering />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
