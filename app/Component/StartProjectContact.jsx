import React from "react";

const socialLinks = [
  { id: "fb", label: "Facebook", icon: "f", href: "#" },
  { id: "ln", label: "LinkedIn", icon: "in", href: "#" },
  { id: "ig", label: "Instagram", icon: "ig", href: "#" },
];

const StartProjectContact = () => {
  return (
    <section className="start-project-section" id="contact">
      <div className="start-project-container">
        <div className="start-project-left">
          <div className="start-project-badge" aria-hidden="true">
            🤝
          </div>
          <h2>Let&apos;s start project together!</h2>
          <p>Tired of Digital Chaos? We Bring Clarity, Control, and Results.</p>

          <div className="start-project-socials" aria-label="Social links">
            {socialLinks.map((social) => (
              <a key={social.id} href={social.href} aria-label={social.label} className="start-project-social-btn">
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        <form className="start-project-form">
          <div className="start-project-field-grid">
            <label className="start-project-field">
              <span>What is your name?*</span>
              <input type="text" name="name" required />
            </label>

            <label className="start-project-field">
              <span>What company do you represent?</span>
              <input type="text" name="company" />
            </label>

            <label className="start-project-field">
              <span>Phone number?*</span>
              <input type="tel" name="phone" required />
            </label>

            <label className="start-project-field">
              <span>E-mail?*</span>
              <input type="email" name="email" required />
            </label>
          </div>

          <label className="start-project-field start-project-textarea">
            <span>A few words about your project*</span>
            <textarea name="message" rows={4} required />
          </label>

          <button type="submit" className="start-project-submit-btn">
            <span className="start-project-submit-icon">→</span>
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default StartProjectContact;
