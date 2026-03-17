import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    window.history.scrollRestoration = "manual";
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sectionIds = ["hero", "about", "projects", "leetcode", "resume", "contact"];

    const handleScroll = () => {
      // Find the section whose top is closest to (but still above) the middle of the viewport
      const mid = window.innerHeight / 2;
      let current = "hero";
      let closestDist = Infinity;

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        // Distance from top of section to middle of screen
        const dist = Math.abs(rect.top - mid);
        // Section must have entered the top half of the screen
        if (rect.top <= mid + 80 && dist < closestDist) {
          closestDist = dist;
          current = id;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
    setMenuOpen(false);
  };

  const links = [
    { href: "#hero",     label: "Home" },
    { href: "#about",    label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#leetcode", label: "LeetCode" },
    { href: "#resume",   label: "Resume" },
    { href: "#contact",  label: "Contact" },
  ];

  return (
    <nav className={`navbar${scrolled ? " navbar--scrolled" : ""}`}>
      <a href="#hero" className="navbar-logo" onClick={(e) => handleNavClick(e, "#hero")}>
        <span className="navbar-logo-first">Mosaad</span>
        <span className="navbar-logo-last"> Ahmed</span>
      </a>

      <div className="status-badge">
        <span className="status-dot" />
        Open to Full-Time Opportunities
      </div>

      <ul className="nav-links nav-links--desktop">
        {links.map(({ href, label }) => (
          <li key={href}>
            <a
              href={href}
              className={`nav-link${activeSection === href.replace("#", "") ? " active" : ""}`}
              onClick={(e) => handleNavClick(e, href)}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>

      <button
        className={`nav-burger${menuOpen ? " nav-burger--open" : ""}`}
        onClick={() => setMenuOpen((o) => !o)}
        aria-label="Toggle menu"
      >
        <span /><span /><span />
      </button>

      {menuOpen && (
        <div className="nav-mobile-menu">
          {links.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className={`nav-mobile-link${activeSection === href.replace("#", "") ? " active" : ""}`}
              onClick={(e) => handleNavClick(e, href)}
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}