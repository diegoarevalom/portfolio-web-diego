'use client'
import React, { useEffect } from "react";
import NavigationMenu from "@/components/ui/navigation-menu";
import intersectionObserver from "@/hooks/intersectionObserver";
import Home from "@/components/ui/home";
import Skills from "@/components/ui/skills";
import Contact from "@/components/ui/contact";
import About from "@/components/ui/About";
import Projects from "@/components/ui/projects";

export default function App() {
  const [activeSection, setActiveSection] = React.useState('home');
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [homeRef, isHomeVisible] = intersectionObserver({ threshold: 0.5 });
  const [skillsRef, isSkillsVisible] = intersectionObserver({ threshold: 0.5 });
  const [contactRef, isContactVisible] = intersectionObserver({ threshold: 0.5 });
  const [aboutRef, isAboutVisible] = intersectionObserver({ threshold: 0.5 });
  const [projectsRef, isProjectsVisible] = intersectionObserver({ threshold: 0.5 });

  useEffect(() => {
    if (isHomeVisible) {
      setActiveSection('home');
      console.log('Active section updated to home');
    } else if (isSkillsVisible) {
      setActiveSection('skills');
      console.log('Active section updated to skills');
    } else if (isContactVisible) {
      console.log('Active section updated to contact');
      setActiveSection('contact');
    } else if (isAboutVisible) {
      console.log('Active section updated to about');
      setActiveSection('about');
    } else if (isProjectsVisible) {
      console.log('Active section updated to projects');
      setActiveSection('projects');
    }

  }, [isHomeVisible, isSkillsVisible, isContactVisible, isAboutVisible, isProjectsVisible]);

  return (
    <>
      <main className="flex min-h-screen flex-col ">
        <NavigationMenu activeSection={activeSection} menuOpen={menuOpen} setMenuOpen={setMenuOpen}></NavigationMenu>
        <Home ref={homeRef} />
        <About ref={aboutRef} />
        <Skills ref={skillsRef} />
        <Projects ref={projectsRef} />
        <Contact ref={contactRef} />
      </main>

    </>
  );
}
