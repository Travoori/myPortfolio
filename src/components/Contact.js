import React from "react";

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2>Contact</h2>
      <p>
        Email:{" "}
        <a href="mailto:tharuniravoori1999@gmail.com">
          tharuniravoori1999@gmail.com
        </a>
      </p>
      <p>
        LinkedIn:{" "}
        <a
          href="https://www.linkedin.com/in/tharuni-ravoori/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Tharuni Ravoori
        </a>
      </p>
      <p>
        GitHub:{" "}
        <a
          href="https://github.com/Travoori"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub Profile
        </a>
      </p>
    </section>
  );
}

export default Contact;
