'use client';

import '../css/footer.css'
export default function Footer() {
  const handleSubscribe = (e) => {
    e.preventDefault();
    console.log('Newsletter signup submitted');
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Main Content */}
        <div className="footer-content">
          {/* Logo and Tagline Section */}
          <div className="footer-logo-section">
            <div className="footer-logo">
              <span className="footer-logo-text">Xio</span>
            </div>
            <p className="footer-tagline">
              Your AI Assistant to Scale & Automate Your Business.
            </p>
          </div>

          {/* Company Links Section */}
          <div className="footer-column">
            <h3 className="footer-column-title">Company:</h3>
            <ul className="footer-link-list">
              <li><a href="#about" className="footer-link">About</a></li>
              <li><a href="#projects" className="footer-link">Projects</a></li>
              <li><a href="#contact" className="footer-link">Contact</a></li>
              <li><a href="#privacy" className="footer-link">Privacy Policy</a></li>
              <li><a href="#terms" className="footer-link">Terms & Conditions</a></li>
            </ul>
          </div>

          {/* Services Section */}
          <div className="footer-column">
            <h3 className="footer-column-title">Services:</h3>
            <ul className="footer-link-list">
              <li><a href="#aio-service" className="footer-link">AIO Service</a></li>
              <li><a href="#web-dev" className="footer-link">Web Development</a></li>
              <li><a href="#seo" className="footer-link">SEO</a></li>
              <li><a href="#graphic-design" className="footer-link">Graphic Designing</a></li>
              <li><a href="#video-editing" className="footer-link">Video Editing</a></li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="footer-newsletter">
            <div className="footer-newsletter-header">
              <div className="footer-bell-icon">🔔</div>
              <h3 className="footer-newsletter-title">Sign Up for Our Newsletter</h3>
            </div>
            <form onSubmit={handleSubscribe} className="footer-newsletter-form">
              <input
                type="email"
                placeholder="Enter your email"
                className="footer-email-input"
                required
              />
              <div className="footer-checkbox-container">
                <input
                  type="checkbox"
                  id="terms-agree"
                  className="footer-checkbox"
                  required
                />
                <label htmlFor="terms-agree" className="footer-checkbox-label">
                  I agree to the Terms, Privacy Policy.
                </label>
              </div>
              <button type="submit" className="footer-subscribe-btn">
                Subscribe
              </button>
            </form>
            <div className="footer-phone-number">
              <span className="footer-phone-icon">📞</span>
              <a href="tel:+15038918921" className="footer-phone-link">(503) 381-8921</a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="footer-bottom-bar">
        <p className="footer-bottom-text">© 2025 All Rights Reserved.</p>
      </div>
    </footer>
  );
}