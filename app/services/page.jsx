import React from "react";
import "../css/service.css";

const serviceItems = [
  "Web Design and Development",
  "Graphic Design and Branding",
  "Social Media Strategy and Marketing",
  "Search Engine Optimization (SEO)",
];

const clients = ["MS", "SMART WORKPLACE", "A", "M", "K", "G", "U"];

const faqs = [
  {
    id: "faq-1",
    question: "What is AIO Services, and how can it help my business?",
    answer:
      "AIO services combine web development, SEO, social media, branding, and creative production into one streamlined package to help you grow faster.",
  },
  {
    id: "faq-2",
    question: "Can I choose specific services or only full packages?",
    answer:
      "Yes, you can choose individual services or a complete plan depending on your project goals and timeline.",
  },
  {
    id: "faq-3",
    question: "How quickly can I launch with your service team?",
    answer:
      "Most businesses begin implementation within a few days after discovery and planning.",
  },
  {
    id: "faq-4",
    question: "Do you provide ongoing support after project delivery?",
    answer:
      "Absolutely. We offer continuous optimization, reporting, and support to keep your growth steady.",
  },
  {
    id: "faq-5",
    question: "Why should I choose Yours AIO Services over one single agency?",
    answer:
      "You receive one collaborative team for every digital touchpoint, reducing delays and improving quality consistency.",
  },
];

const Service = () => {
  return (
    <main className="services-page">
      <section className="services-hero">
        <div className="services-shell">
          <div className="services-hero-copy">
            <h1>Yours AIO Services</h1>
            <p>
              We deliver complete digital growth services designed to scale your
              brand with strategy, creativity, and performance. From websites to
              marketing automation, everything is built to drive real business
              results.
            </p>
            <div className="services-hero-actions">
              <button type="button" className="services-primary-btn">
                Learn More <span>→</span>
              </button>
              <a href="#" className="services-crumb-btn">
                Home <span>&gt;</span> Our Services
              </a>
            </div>
          </div>
          <div className="services-hero-art" aria-hidden="true">
            <div className="services-main-orb"></div>
          </div>
        </div>
      </section>

      <section className="services-offer">
        <div className="services-shell">
          <h2>AIO Services we offer</h2>
          <div className="services-offer-grid">
            <article className="services-offer-card">
              <img
                src="https://images.unsplash.com/photo-1518773553398-650c184e0bb3?auto=format&fit=crop&w=1200&q=80"
                alt="AIO services visual"
              />
            </article>
            <ul className="services-offer-list">
              {serviceItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="services-clients">
        <div className="services-shell">
          <h2>Our Clients</h2>
          <div className="services-client-strip">
            {clients.map((client) => (
              <div key={client} className="services-client-logo">
                {client}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="services-highlight">
        <div className="services-shell">
          <article className="services-highlight-card">
            <div className="services-highlight-top">
              <div>
                <h2>Best AIO Services Where AI Meets Expertise</h2>
                <p>
                  We combine data-driven strategy and expert execution to deliver
                  websites, campaigns, and content that actually convert.
                </p>
                <button type="button" className="services-primary-btn">
                  Learn More <span>→</span>
                </button>
              </div>
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80"
                alt="Team working on digital services"
              />
            </div>
            <div className="services-highlight-bottom">
              <img
                src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c?auto=format&fit=crop&w=500&q=80"
                alt="Digital specialist portrait"
              />
              <div>
                <h3>Innovative Digital</h3>
                <p>
                  Integrated planning, design, and automation for impactful
                  digital growth.
                </p>
              </div>
              <div>
                <h3>Why Choose Us</h3>
                <p>
                  Dedicated experts, transparent communication, and measurable
                  performance every step.
                </p>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="services-faq">
        <div className="services-shell">
          <h2>Frequently Asked Question</h2>
          <div className="services-faq-list">
            {faqs.map((faq, idx) => (
              <details key={faq.id} open={idx === 0}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="services-contact">
        <div className="services-shell services-contact-grid">
          <div className="services-contact-left">
            <div className="services-hand">🤝</div>
            <h2>Let&apos;s start project together!</h2>
            <p>
              Tell us about your goals and we&apos;ll craft the right plan for
              your brand.
            </p>
            <div className="services-socials">
              <a href="#" aria-label="Facebook">
                f
              </a>
              <a href="#" aria-label="LinkedIn">
                in
              </a>
              <a href="#" aria-label="Instagram">
                ig
              </a>
            </div>
          </div>
          <form className="services-contact-form">
            <div className="services-form-grid">
              <label>
                What is your name?*
                <input type="text" name="name" required />
              </label>
              <label>
                What company do you represent?
                <input type="text" name="company" />
              </label>
              <label>
                Phone number?*
                <input type="tel" name="phone" required />
              </label>
              <label>
                E-mail?*
                <input type="email" name="email" required />
              </label>
            </div>
            <label className="services-form-message">
              A few words about your project*
              <textarea rows={4} name="message" required></textarea>
            </label>
            <button type="submit" className="services-send-btn">
              Send
            </button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Service;
