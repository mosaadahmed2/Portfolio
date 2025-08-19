import { i } from "framer-motion/client";

import React from 'react';
export default function Hero() {
  return (
    <section className="hero" id="hero">
      <h1>Hello, I'm <span>Mosaad Ahmed</span></h1>
      <p>Data Engineer | Python | SQL | Cloud (AWS, GCP, Azure)</p>
      <a href="#contact" className="btn">Get in Touch</a>
    </section>
  );
}
