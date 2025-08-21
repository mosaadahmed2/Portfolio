import React from "react";
import { motion } from "framer-motion";
import "./About.css"; // import CSS file

export default function About() {
  const timeline = [
    {
      year: "2024 - Present",
      title: "Graduate Student (M.E. in Computer Science)",
      desc: "Currently pursuing my Master's, focusing on AI, Data Science, Big Data, and Cloud Technologies.",
    },
    {
      year: "2022 - 2024",
      title: "Associate Software Engineer",
      desc: "Developed and optimized ETL pipelines using Informatica, Python, and Airflow. Integrated data from Salesforce and NetSuite into Snowflake/BigQuery.",
    },
    {
      year: "2021 - 2022",
      title: "Software Intern",
      desc: "Worked on designing scalable ETL solutions and supporting deployments across multiple environments using Jenkins and Git.",
    },
    {
      year: "2018 - 2022",
      title: "Bachelor's in Computer Science",
      desc: "Earned my B.Tech in Computer Science, building a strong foundation in programming, databases, and systems.",
    },
  ];

  return (
    <section className="about" id="about">
      <h2 className="about-title">About Me</h2>
      <div className="timeline">
        {timeline.map((item, idx) => (
          <motion.div
            key={idx}
            className="timeline-item"
            initial={{ opacity: 0, x: idx % 2 === 0 ? -80 : 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <h3>{item.title}</h3>
              <span className="year">{item.year}</span>
              <p>{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
