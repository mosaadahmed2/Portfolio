import "./App.css";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import LeetCode from "../components/LeetCode";
import Resume from "../components/Resume";
import { useSectionFadeIn } from "../components/UseSectionFadeIn";

import React, { useEffect, useRef } from "react";

const fadeStyle: React.CSSProperties = {
  opacity: 0,
  transform: "translateY(48px)",
  transition: "opacity 0.75s ease, transform 0.75s ease",
};

export default function App() {
  useSectionFadeIn();

  const navbarRef = useRef<HTMLDivElement>(null);
  const heroRef   = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const navbar = navbarRef.current;
    const hero   = heroRef.current;
    if (!navbar || !hero) return;

    // 1. Instantly set hidden state (no transition yet)
    navbar.style.transition = "none";
    navbar.style.opacity    = "0";
    navbar.style.transform  = "translateY(-20px)";

    hero.style.transition = "none";
    hero.style.opacity    = "0";
    hero.style.transform  = "translateY(32px)";

    // 2. Force browser to paint the hidden state
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    navbar.offsetHeight; // reflow trigger
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    hero.offsetHeight;   // reflow trigger

    // 3. Now apply transitions and animate in
    navbar.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    navbar.style.opacity    = "1";
    navbar.style.transform  = "translateY(0)";

    hero.style.transition = "opacity 0.8s ease 0.3s, transform 0.8s ease 0.3s";
    hero.style.opacity    = "1";
    hero.style.transform  = "translateY(0)";
  }, []);

  return (
    <div className="font-sans scroll-smooth">

      <div ref={navbarRef}>
        <Navbar />
      </div>

      <div ref={heroRef}>
        <Hero />
      </div>

      <div data-fade style={{ ...fadeStyle }}>
        <About />
      </div>

      <div data-fade style={{ ...fadeStyle }}>
        <Projects />
      </div>

      
      <div data-fade style={{ ...fadeStyle }}>
        <Resume />
      </div>
      <div data-fade style={{ ...fadeStyle }}>
        <LeetCode />
      </div>


      <div data-fade style={{ ...fadeStyle }}>
        <Contact />
      </div>

    </div>
  );
}