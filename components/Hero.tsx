import React, { useEffect, useState } from "react";


function Hero() {
  const titles = ["Software Engineer", "Cloud Enthusiast", "Problem Solver"];
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [back, setBack] = useState(false);

  useEffect(() => {
    if (index === titles.length) return;

    if (subIndex === titles[index].length + 1 && !back) {
      setTimeout(() => setBack(true), 1000);
      return;
    }

    if (subIndex === 0 && back) {
      setBack(false);
      setIndex((prev) => (prev + 1) % titles.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (back ? -1 : 1));
    }, back ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [subIndex, index, back]);

  useEffect(() => {
    setText(titles[index].substring(0, subIndex));
  }, [subIndex, index]);

  return (
    <section className="hero">
      <div className="particles"></div>
      <div className="hero-container">
        <div className="hero-text">
          <h1>
            Hello, I'm <span>Mosaad Ahmed</span>
          </h1>
          <h2>
            {text}
            <span className="cursor">|</span>
          </h2>
          <a href="#projects" className="btn">
            See My Work
          </a>
        </div>
        <div className="hero-image">
          <img src="./mosaad.jpeg" alt="Mosaad Ahmed" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
