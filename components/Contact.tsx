import React from 'react';
import emailjs from "@emailjs/browser";
import { useRef } from 'react';

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        "service_5giqgy4",   // from EmailJS dashboard
        "template_31hgfze",  // from EmailJS dashboard
        form.current,
        "2Flasasaw_YkEqx3Q"    // from EmailJS dashboard
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
      <h2>Contact Me</h2>
      <form ref={form} onSubmit={sendEmail} className="contact-form">
      <input type="text" name="from_name" placeholder="Your Name" required />
        <input type="email" name="user_email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" required />
        <button type="submit">Send</button>
      </form>
      <div className="socials">
        <a href="https://www.linkedin.com/in/mosaadahmedmohammed/" target="_blank">LinkedIn</a>
        <a href="https://github.com/mosaadahmed2" target="_blank">GitHub</a>
      </div>
    </section>
  );
}


