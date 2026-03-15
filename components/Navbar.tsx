import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  // Always start at top on reload
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

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        threshold: [0.1, 0.3, 0.5],
        rootMargin: "-60px 0px -35% 0px",
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
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

      <ul className={`nav-links${menuOpen ? " nav-links--open" : ""}`}>
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
    </nav>
  );
}