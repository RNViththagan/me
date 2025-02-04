import Header from "@/components/header";
import Hero from "@/components/hero";
import About from "@/components/about";
import Skills from "@/components/skills";
import Projects from "@/components/projects";
import Achievements from "@/components/achievements";
import Education from "@/components/education";
import Volunteering from "@/components/volunteering";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-400">
      <Header />
      <main className="container mx-auto py-8">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Education />
        <Volunteering />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
