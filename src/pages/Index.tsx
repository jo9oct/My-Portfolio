import { useState, useEffect } from "react";
import { Navigation } from "@/components/navigation/Navbar";
import { HeroSection } from "@/components/section/Home";
import { Skills } from "@/components/section/Skills";
import { Projects } from "@/components/section/Projects";
import { Contact } from "@/components/section/Contact";
import {About} from "@/components/section/About"
import {Footer} from "@/components/layout/Footer"
import {Testimonials} from "@/components/section/Testimonials";

const Index = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check for saved theme preference or default to light
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    // Apply theme to document
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navigation darkMode={darkMode} setDarkMode={setDarkMode} />
      
      <main>
        <HeroSection />
        <About/>
        <Skills />
        <Projects />
        <Testimonials />
        <Contact />
      </main>
      <Footer/>
    </div>
  );
};

export default Index;
