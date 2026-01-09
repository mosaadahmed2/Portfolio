import React from "react";
import { motion } from "framer-motion";
import "./About.css"; // import CSS file

export default function About() {
  const timeline = [
    {
      year: "2024 - Present",
      title: "Graduate Student (M.E. in Computer Science)",
      points: [
        "Pursuing a Master's degree with a focus on AI, Data Science, Big Data, and Cloud Technologies."
      ],
    },
    {
      year: "2022 - 2024",
      title: "Associate Software Engineer",
      points: [
        "Built scalable ETL pipelines ingesting Salesforce and NetSuite data into Snowflake and BigQuery, enabling near real-time analytics for 50K+ records daily and reducing processing time by 90%.",
        "Automated Salesforce data integrations using Python (Pandas, NumPy), saving 10+ engineering hours per week and ensuring error-free ingestion.",
        "Migrated 5TB+ of enterprise data from Oracle to AWS (S3, Lambda, Redshift) using Informatica and DBT.",
        "Designed and deployed Apache Airflow pipelines on Docker and Kubernetes, reducing processing time by 40%.",
        "Led CI/CD automation using Jenkins and Git across Dev, UAT, and Production environments.",
        "Developed a real-time Employee Achievement Recognition platform using React and Socket.IO, enabling employees to share achievements, receive live updates, and engage through likes and reactions."
      ],
    },
    {
      year: "2021 - 2022",
      title: "Software Intern",
      points: [
        "Built and orchestrated Apache Airflow ETL pipelines to extract Salesforce financial and sales data into Snowflake, improving data consistency and increasing pipeline reliability by 30%.",
        "Designed interactive Superset dashboards to visualize financial and sales KPIs, cutting manual reporting effort by 50% and enabling near real-time business insights.",
        "Collaborated cross-functionally to troubleshoot data workflows and implement monitoring and alerting, significantly improving pipeline uptime and operational stability."
      ],
    },
    {
      year: "2018 - 2022",
      title: "Bachelor's in Computer Science",
      points: [
        "Completed B.Tech in Computer Science with a strong foundation in programming, databases, and systems."
      ],
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
              <ul className="timeline-points">
    {item.points.map((point, i) => (
      <li key={i}>{point}</li>
    ))}
  </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
