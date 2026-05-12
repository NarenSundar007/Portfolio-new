import Navbar from '@/components/navbar';
import Hero from '@/components/sections/hero';
import About from '@/components/sections/about';
import Skills from '@/components/sections/skills';
import Projects from '@/components/sections/projects';
import Experience from '@/components/sections/experience';
import Publications from '@/components/sections/publications';
import Resume from '@/components/sections/resume';
import Contact from '@/components/sections/contact';
import Footer from '@/components/sections/footer';

export default function Home() {
  return (
    <main className="bg-background text-foreground">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Publications />
      <Resume />
      <Contact />
      <Footer />
    </main>
  );
}
