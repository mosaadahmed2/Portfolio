import React from "react";
import { motion } from "framer-motion";
import "./About.css";

const timelineSkills: Record<number, string[]> = {
  1: [
    "Python", "Pandas", "NumPy", "Snowflake", "BigQuery",
    "Salesforce", "AWS S3", "Lambda", "Redshift", "Informatica",
    "DBT", "Airflow", "Docker", "Kubernetes", "Jenkins",
    "Git", "React", "Socket.IO", "ETL", "CI/CD",
  ],
  2: [
    "Apache Airflow", "Snowflake", "ETL Pipelines",
    "Salesforce", "Apache Superset", "SQL",
    "Pipeline Monitoring", "Data Visualization",
  ],
};

export default function About() {
  const timeline = [
    {
      year: "2024 – Present",
      title: "Graduate Student — M.E. in Computer Science",
      points: [
        "Pursuing a Master's degree with a focus on AI, Data Science, Big Data, and Cloud Technologies.",
      ],
    },
    {
      year: "2022 – 2024",
      title: "Associate Software Engineer",
      points: [
        "Built scalable ETL pipelines ingesting Salesforce and NetSuite data into Snowflake and BigQuery, enabling near real-time analytics for 50K+ records daily and reducing processing time by 90%.",
        "Automated Salesforce data integrations using Python (Pandas, NumPy), saving 10+ engineering hours per week and ensuring error-free ingestion.",
        "Migrated 5TB+ of enterprise data from Oracle to AWS (S3, Lambda, Redshift) using Informatica and DBT.",
        "Deployed Apache Airflow pipelines on Docker and Kubernetes, reducing processing time by 40%.",
        "Led CI/CD automation using Jenkins and Git across Dev, UAT, and Production environments.",
        "Built a real-time Employee Achievement Recognition platform using React and Socket.IO.",
      ],
    },
    {
      year: "2021 – 2022",
      title: "Software Engineering Intern",
      points: [
        "Orchestrated Apache Airflow ETL pipelines to extract Salesforce financial and sales data into Snowflake, improving pipeline reliability by 30%.",
        "Designed Superset dashboards to visualize financial and sales KPIs, cutting manual reporting by 50%.",
        "Implemented monitoring and alerting to improve pipeline uptime and operational stability.",
      ],
    },
    {
      year: "2018 – 2022",
      title: "B.Tech in Computer Science",
      points: [
        "Completed undergraduate degree with a strong foundation in programming, databases, and systems.",
      ],
    },
  ];

  return (
    <section className="about" id="about">
      <div className="particles" />

      <motion.h2
        className="about-title"
        initial={{ opacity: 0, y: -24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        About Me
      </motion.h2>

      <div className="timeline">
        {timeline.map((item, idx) => (
          <motion.div
            key={idx}
            className="timeline-item"
            initial={{ opacity: 0, x: idx % 2 === 0 ? -60 : 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: idx * 0.15, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="timeline-marker" />

            <div className="timeline-content">
              <h3>{item.title}</h3>
              <span className="year">{item.year}</span>
              <ul className="timeline-points">
                {item.points.map((point, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: idx * 0.15 + i * 0.07 }}
                    viewport={{ once: true }}
                  >
                    {point}
                  </motion.li>
                ))}
              </ul>

              {/* Skills chips — only for experience entries */}
              {timelineSkills[idx] && (
                <motion.div
                  className="timeline-skills"
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.15 + 0.3 }}
                  viewport={{ once: true }}
                >
                  {timelineSkills[idx].map((skill) => (
                    <span key={skill} className="skill-chip">{skill}</span>
                  ))}
                </motion.div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}