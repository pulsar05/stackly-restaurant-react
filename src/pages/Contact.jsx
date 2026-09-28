import { useState } from "react";

function Contact() {

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {

    e.preventDefault();

    setSubmitted(true);

  };

  return (
    <section className="form-page">

      <div className="section-title">

        <span>GET IN TOUCH</span>

        <h1>
          Contact Us
        </h1>

        <p>
          We'd love to hear from you.
        </p>

      </div>

      <div className="contact-grid">

        <div className="contact-info">

          <h2>
            Visit Us
          </h2>

          <p>
            📍 RS Puram, Coimbatore,
            Tamil Nadu
          </p>

          <p>
            📞 +91 98765 43210
          </p>

          <p>
            ✉️ hello@spiceandsavor.com
          </p>

          <p>
            🕐 11:00 AM - 11:00 PM
          </p>

        </div>

        <form
          className="restaurant-form"
          onSubmit={handleSubmit}
        >

          <input
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            placeholder="Your Email"
            required
          />

          <textarea
            placeholder="Your Message"
            required
          />

          <button className="primary-btn">
            Send Message
          </button>

          {submitted && (
            <p className="form-message">
              Message sent successfully!
            </p>
          )}

        </form>

      </div>

    </section>
  );
}

export default Contact;