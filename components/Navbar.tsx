import "../style.css";
import React from 'react';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="particles"></div>
      <h1 className="logo">Mosaad Ahmed</h1>
      <div className="status-badge">
  <span className="status-dot"></span>
  Open to Full-Time Opportunities
</div>
      <ul className="nav-links">
        <li><a href="#hero">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}
