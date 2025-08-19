import React from 'react';

export default function About() {
  return (
    <section className="about" id="about">
      <h2>About Me</h2>
      <div className="about-content">
        <img src="/profile.jpg" alt="Profile" />
        <p>
          I’m a technology-driven Software Engineer with 2+ years of experience in 
          building data pipelines, ETL processes, and cloud solutions. I specialize 
          in Python, SQL, and BigQuery with hands-on experience in Informatica and AWS.
        </p>
      </div>
    </section>
  );
}
