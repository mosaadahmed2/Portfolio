import "./App.css";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import LeetCodeStats from "../components/LeetCode";

import React from 'react';

export default function App() {
  return (
    <div className="font-sans scroll-smooth">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <LeetCodeStats/>
      <Contact />
    </div>
  );
}
