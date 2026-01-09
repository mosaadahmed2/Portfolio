import React from "react";
import "../style.css";

export default function Resume() {
  return (
    <section className="resume-section" id="resume">
      <div className="resume-container">
        <h2>Resume</h2>
        <p>
          A snapshot of my experience in Data Engineering, Cloud Technologies,
          and building scalable systems.
        </p>

        <div className="resume-actions">
          <a
            href="Public/Mosaad-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="resume-btn primary"
          >
            View Resume
          </a>

          <a
            href="Public/Mosaad-Resume.pdf"
            download
            className="resume-btn secondary"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
