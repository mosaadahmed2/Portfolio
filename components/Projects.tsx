import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Github } from "lucide-react";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";


const projects = [
  {
    title: "Sign Language Recognition",
    desc: "ML/DL system to recognize hand gestures for alphabetic sign language letters. Trained on the MNIST Sign Language dataset with 27K+ labeled images. Implements KNN, Random Forest, SVM, MLP, CNN, and Ensemble classifiers. Aimed at improving communication accessibility for the hearing-impaired. ",
    github: "https://github.com/Srirag-T/Sign_Language_Recognition_ML_DL",
  },
  {
    title: "Compressible Flow Toolbox",
    desc: "Web-based engineering app for solving compressible gas dynamics problems. Supports Isentropic, Normal Shock, Oblique Shock, Fanno, and Rayleigh flow models. Built with React frontend, FastAPI backend, and NumPy/SciPy solvers. Fully containerized with Docker for reproducible deployment.",
    github: "https://github.com/mosaadahmed2/compressible-flow-toolbox",
  },
  {
    title: "Earthquake Data Visualization",
    desc: "Interactive platform to explore global seismic activity with real-time visualizations. Analyze earthquakes by magnitude, depth, and duration across high-risk zones. Features predictive modeling and audio cues for earthquake severity. Built to make complex seismic data intuitive and engaging.",
    github: "https://github.com/HethuSriN/Visual-Interfaces-Project-2",
  },
  {
    title: "Employee Recognition App",
    desc: "Real-time React + Socket.IO app for employee achievements.",
    github: "https://github.com/yourusername/employee-recognition",
  },
  {
    title: "LeetCode Tracker",
    desc: "Personal dashboard showing LeetCode stats and progress.",
    github: "https://github.com/yourusername/leetcode-tracker",
  },
  {
    title: "Cloud Data Migration",
    desc: "Oracle → AWS (S3, Redshift) migration using Informatica & DBT.",
    github: "https://github.com/yourusername/cloud-migration",
  },
];

export default function Projects() {
  const swiperRef = useRef<SwiperType | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  return (
    <section className="projects-section" id="projects">
      <h2 className="projects-title">Projects</h2>

      <div className="projects-slider-wrapper">
        {/* Slide area with vertical padding so hover lift isn't clipped */}
        <div className="projects-swiper-outer">
          <Swiper
            modules={[Navigation]}
            onSwiper={(swiper: SwiperType) => { swiperRef.current = swiper; }}
            onSlideChange={(swiper: SwiperType) => {
              setIsBeginning(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
            }}
            spaceBetween={24}
            slidesPerView={3}
            breakpoints={{
              0:    { slidesPerView: 1 },
              768:  { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {projects.map((project, index) => (
              <SwiperSlide key={index}>
                <div className="project-card">
                  <h3>{project.title}</h3>
                  <p>{project.desc}</p>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="github-btn"
                  >
                    <Github size={16} />
                    <span>View on GitHub</span>
                  </a>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Nav buttons — side by side, centered below */}
        <div className="projects-nav">
          <button
            className={`proj-prev${isBeginning ? " disabled" : ""}`}
            onClick={() => swiperRef.current?.slidePrev()}
            aria-label="Previous"
          >
            &#8592;
          </button>
          <button
            className={`proj-next${isEnd ? " disabled" : ""}`}
            onClick={() => swiperRef.current?.slideNext()}
            aria-label="Next"
          >
            &#8594;
          </button>
        </div>
      </div>
    </section>
  );
}