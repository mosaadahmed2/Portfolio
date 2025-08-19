import React from 'react';
import { Github } from 'lucide-react';

const projects = [
  { 
    title: "Sign Language Recognition", 
    desc: "Conducted an extensive review of research papers on Sign Language Recognition Systems and developed a novel methodology leveraging Deep Learning and Machine Learning algorithms. Utilized OpenCV to capture hand gestures and accurately display the corresponding sign representations.", 
    link: "https://github.com/Srirag-T/Sign_Language_Recognition_ML_DL" 
  },
  { 
    title: "ETL Data Pipelines", 
    desc: "Designed and implemented ETL data pipelines to extract financial business data from Salesforce, perform necessary transformations and manipulations, and load it into Google BigQuery for analysis and reporting. The solution significantly improved data processing efficiency and reduced manual effort, enabling faster access to reliable financial insights and supporting better business decision making.", 
    link: "https://github.com/mosaadahmed/etl-pipeline" 
  },
  { 
    title: "Earthquake Data Visualization Dashboard", 
    desc: "This interactive visualization platform provides an engaging way to explore global earthquake patterns, offering insights into seismic activity for both experts and enthusiasts. Users can observe earthquake occurrences over time, analyze distributions by magnitude, depth, and duration, and identify high-risk zones through predictive modeling. With added audio cues to represent severity, the dashboard transforms complex seismic data into an intuitive, accessible, and informative storytelling experience.", 
    link: "https://github.com/HethuSriN/Visual-Interfaces-Project-2" 
  },
];

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <h2>Projects</h2>
      <div className="project-grid">
        {projects.map((p) => (
          <div className="project-card" key={p.title}>
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
            <a 
              href={p.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="github-btn"
            >
              <Github size={18} style={{ marginRight: "6px" }} /> GitHub Repo
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
