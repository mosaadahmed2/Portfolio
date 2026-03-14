import React, { useRef } from 'react';
import emailjs from "@emailjs/browser";
import { Linkedin, Github, Send } from "lucide-react";


export default function Contact() {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;

    emailjs
      .sendForm(
        "service_5giqgy4",
        "template_31hgfze",
        form.current,
        "2Flasasaw_YkEqx3Q"
      )
      .then(
        (result) => {
          alert("✅ Message sent successfully!");
          console.log(result.text);
        },
        (error) => {
          alert("❌ Failed to send message, try again.");
          console.error(error.text);
        }
      );
  };

  return (
    <section className="contact" id="contact">
      <div className="particles"></div>
      <h2 className="contact-title">Contact Me</h2>

      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <input type="text" name="from_name" placeholder="Your Name" required />
        <input type="email" name="user_email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" rows={5} required />
        <button type="submit" className="send-btn">
          <Send size={16} />
          Send Message
        </button>
      </form>

      <div className="socials">
        <a
          href="https://www.linkedin.com/in/mosaadahmedmohammed/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-btn linkedin"
        >
          <span className="social-btn-icon">
            <Linkedin size={18} />
          </span>
          <span className="social-btn-label">LinkedIn</span>
        </a>

        <a
          href="https://github.com/mosaadahmed2"
          target="_blank"
          rel="noopener noreferrer"
          className="social-btn github"
        >
          <span className="social-btn-icon">
            <Github size={18} />
          </span>
          <span className="social-btn-label">GitHub</span>
        </a>
      </div>
    </section>
  );
}