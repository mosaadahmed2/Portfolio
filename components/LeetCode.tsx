import React, { useEffect, useState } from "react";
import "../style.css";

export default function LeetCode() {
  const [stats, setStats] = useState<any>(null);

  useEffect(() => {
    fetch("https://leetcode-stats-api.herokuapp.com/0JMfwclDko")
      .then(res => res.json())
      .then(data => setStats(data));
  }, []);

  if (!stats) return null;

  return (
    <section className="leetcode-section" id="leetcode">

      {/* ===== FLOATING ICONS (AROUND CARD) ===== */}

      {/* TOP */}
      <div className="lc-icons lc-top">
        <span className="f-icon cpp">C++</span>
        <span className="f-icon html">HTML</span>
        <span className="f-icon react">React</span>
        <span className="f-icon js">JS</span>
      </div>

      {/* LEFT */}
      <div className="lc-icons lc-left">
        <span className="f-icon python">Python</span>
        <span className="f-icon css">CSS</span>
        <span className="f-icon git">Git</span>
      </div>

      {/* RIGHT */}
      <div className="lc-icons lc-right">
        <span className="f-icon java">Java</span>
        <span className="f-icon aws">AWS</span>
        <span className="f-icon docker">Docker</span>
      </div>

      {/* BOTTOM */}
      <div className="lc-icons lc-bottom">
        <span className="f-icon sql">SQL</span>
        <span className="f-icon linux">Linux</span>
      </div>

      {/* ===== MAIN CARD ===== */}
      <div className="leetcode-wrapper">
        <div className="leetcode-card">

          <div className="leetcode-header">
            <h2>LeetCode Activity</h2>
            <a
              href="https://leetcode.com/0JMfwclDko/"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Profile →
            </a>
          </div>

          <div className="leetcode-main">
  {/* LEFT */}
  <div className="leetcode-total">
    <span className="total-number">{stats.totalSolved}</span>
    <span className="total-label">Problems Solved</span>
  </div>

  {/* RIGHT */}
  <div className="leetcode-difficulty">
  <div className="difficulty-item">
    <div className="difficulty-box easy">
      <strong>{stats.easySolved}</strong>
    </div>
    <span className="difficulty-label">Easy</span>
  </div>

  <div className="difficulty-item">
    <div className="difficulty-box medium">
      <strong>{stats.mediumSolved}</strong>
    </div>
    <span className="difficulty-label">Medium</span>
  </div>

  <div className="difficulty-item">
    <div className="difficulty-box hard">
      <strong>{stats.hardSolved}</strong>
    </div>
    <span className="difficulty-label">Hard</span>
  </div>
</div>

</div>


        </div>
      </div>

    </section>
  );
}
