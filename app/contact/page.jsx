import React from "react";
import "../css/contact.css";
import StartProjectContact from "../Component/StartProjectContact";

const contactHighlights = [
  {
    id: "location",
    title: "Location",
    description: "3900 Pelican Drive, Suite 213, Tyler, TX 75701",
    icon: "📍",
  },
  {
    id: "email",
    title: "Email Address",
    description: "info@domyaio.com",
    icon: "✉️",
  },
  {
    id: "phone",
    title: "Phone No",
    description: "+18885811741",
    icon: "📞",
  },
];
const Contact = () => {
  return (
    <main className="contact-page">
      <section className="contact-hero">
        <div className="contact-hero-container">
          <div className="contact-hero-left">
            <h1>Find Us With Our Updated Contact Options</h1>
            <p>
              Discover our streamlined improved ways to get in touch with us.
              Explore our updated contact options today!
            </p>
            <div className="contact-hero-actions">
              <button type="button" className="contact-call-btn">
                Call Now <span>→</span>
              </button>
              <a href="#" className="contact-crumb-btn">
                Home <span>&gt;</span> Contact Us
              </a>
            </div>
          </div>

          <div className="contact-hero-art" aria-hidden="true">
            <div className="contact-hero-orb"></div>
          </div>
        </div>
      </section>

      <section className="contact-ready-section">
        <div className="contact-ready-container">
          <h2>Ready to Get Started</h2>
          <div className="contact-info-grid">
            {contactHighlights.map((item) => (
              <article key={item.id} className="contact-info-card">
                <div className="contact-info-icon" aria-hidden="true">
                  {item.icon}
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-details-section">
        <div className="contact-details-container">
          <div className="contact-details-copy">
            <h2>Get in Touch for any Information!</h2>
            <p>
              Feel free to contact us if you have any inquiries, or need more
              information.
            </p>
          </div>

          <form className="contact-details-form">
            <h3>Let&apos;s Get Started</h3>
            <div className="contact-details-grid">
              <label>
                First Name
                <input type="text" name="firstName" placeholder="e.g. John" />
              </label>
              <label>
                Last Name
                <input type="text" name="lastName" placeholder="e.g. Smith" />
              </label>
              <label>
                Mail
                <input type="email" name="mail" placeholder="example@gmail.com" />
              </label>
              <label>
                Project Package
                <select name="package">
                  <option>Basic Package</option>
                  <option>Standard Package</option>
                  <option>Premium Package</option>
                </select>
              </label>
            </div>
            <label className="contact-details-message">
              Comment
              <textarea name="comment" rows={3} placeholder="Write your comment here..." />
            </label>
            <button type="submit" className="contact-submit-btn">
              Submit Now <span>→</span>
            </button>
          </form>
        </div>
      </section>

      <StartProjectContact />
    </main>
  );
};

export default Contact;
