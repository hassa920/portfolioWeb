"use client"
import './home.css';
import Link from 'next/link';
import React, { useState, useEffect } from "react";

export default function Home() {

  const plans = [
    {
      name: 'Basic',
      price: 499,
      features: [
        'AIO Optimization',
        'Website Optimization',
        'Social Media Posts (2 posts)',
        'Blog Content Writing (1 posts)',
      ],
    },
    {
      name: 'Business',
      price: 999,
      features: [
        'AIO Optimization',
        'Website Optimization',
        'Social Media Posts (5 posts)',
        'Blog Content Writing (3 posts)',
      ],
    },
    {
      name: 'Premium',
      price: 1499,
      features: [
        'AIO Optimization',
        'Website Optimization',
        'Social Media Posts (10 posts)',
        'Blog Content Writing (5 posts)',
      ],
    },
  ];

   const clients = [
    {
      id: 1,
      name: 'Client 1',
      logo: 'https://media.gettyimages.com/id/1406088800/photo/business-colleagues-working-together-on-a-laptop.jpg?s=1024x1024&w=gi&k=20&c=xjcdJ9a28sQ8Nt1AzGLMKh2HQLnuU43uhiba3OhGlN8=',
    },
    {
      id: 2,
      name: 'Client 2',
      logo: 'https://media.gettyimages.com/id/1406088800/photo/business-colleagues-working-together-on-a-laptop.jpg?s=1024x1024&w=gi&k=20&c=xjcdJ9a28sQ8Nt1AzGLMKh2HQLnuU43uhiba3OhGlN8=',
    },
    {
      id: 3,
      name: 'Client 3',
      logo: 'https://media.gettyimages.com/id/1406088800/photo/business-colleagues-working-together-on-a-laptop.jpg?s=1024x1024&w=gi&k=20&c=xjcdJ9a28sQ8Nt1AzGLMKh2HQLnuU43uhiba3OhGlN8=',
    },
    {
      id: 4,
      name: 'Client 4',
      logo: 'https://media.gettyimages.com/id/1406088800/photo/business-colleagues-working-together-on-a-laptop.jpg?s=1024x1024&w=gi&k=20&c=xjcdJ9a28sQ8Nt1AzGLMKh2HQLnuU43uhiba3OhGlN8=',
    },
  ];
  const services = [
  {
    title: "Video Editing",
    description: "Bringing your vision to life through professional video editing and innovative techniques.",
    isActive: false,
    image: "https://via.placeholder.com/300x200/800080/FFFFFF?text=3D+Abstract+1" // Replace with your assets
  },
  {
    title: "Search Engine Optimization",
    description: "Driving measurable growth through data-driven SEO strategies that convert traffic into results.",
    isActive: true,
    image: "https://via.placeholder.com/300x200/4B0082/FFFFFF?text=3D+Abstract+2"
  },
  {
    title: "Web Development",
    description: "Integrating intelligent data analytics to provide businesses with deep customer insights and optimized strategies.",
    isActive: false,
    image: "https://via.placeholder.com/300x200/000033/FFFFFF?text=3D+Abstract+3"
  }
];
const items = [
    "Discover innovation",
    "Startup friendly",
    "Over 100 Awards Won",
    "Faster response time"
  ];
const images = [
  "https://yoursaio.com/wp-content/uploads/2026/02/Jc-publishing-356x396.jpg",
  "https://yoursaio.com/wp-content/uploads/2025/12/Snake-356x396.jpg",
  "https://yoursaio.com/wp-content/uploads/2024/09/Hausers-356x396.webp",
  "https://yoursaio.com/wp-content/uploads/2024/09/Bp-gas-356x396.webp",
    "https://yoursaio.com/wp-content/uploads/2026/02/Jc-publishing-356x396.jpg",
  "https://yoursaio.com/wp-content/uploads/2025/12/Snake-356x396.jpg",
  "https://yoursaio.com/wp-content/uploads/2024/09/Hausers-356x396.webp",
  "https://yoursaio.com/wp-content/uploads/2024/09/Bp-gas-356x396.webp",
];
  const [index, setIndex] = useState(1);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  const getClass = (i) => {
    if (i === index) return "card active";
    if (i === (index - 1 + images.length) % images.length) return "card left";
    if (i === (index + 1) % images.length) return "card right";
    return "card hidden";
  };
  return (
    <>
     <section className="hero-container">
      {/* The green orbital line in the background */}
      <div className="orbit-line"></div>

      <div className="content-box">
        {/* Top Gradient Badge */}
        <div className="badge">
          <span>✦</span>
          Lost Leads? Recovered
          <span>✦</span>
        </div>

        {/* Main Heading */}
        <h1 className="main-title">
          Tired of Digital Chaos?<br />
          We Bring Clarity, Control,<br />
          and Results.
        </h1>

        {/* The Purple/White Button */}
        <button className="services-btn">
          <div className="arrow-box">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="3">
              <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <Link href="/services" className='btn-text'>Services</Link>
   
        </button>
      </div>
    </section>

     <div className="carousel">
      <div className="carousel-track">
        {images.map((src, i) => (
          <div key={i} className={getClass(i)}>
            <img src={src} alt="project" />
          </div>
        ))}
      </div>
    </div>
 <section className="background-view">
{/* <div className="hero-wrapper"> */}
      {/* Top Section */}
      <h1 className="main-title">Over 2k+ Businesses Trust</h1>

      {/* Middle Section */}
      <div className="middle-row">
        <div className="gradient-title">Your AIO</div>
        <p className="description">
          Every number here is real, earned, and growing every day 
          because YOUR AIO actually moves your business forward.
        </p>
      </div>

      {/* Bottom Section */}
      <div className="bottom-row">
        {/* Trusted By Section */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ display: 'flex', marginLeft: '10px' }}>
                {/* Simplified Avatar circles */}
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', border: '2px solid white', backgroundColor: '#555', marginLeft: '-10px' }}></div>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', border: '2px solid white', backgroundColor: '#777', marginLeft: '-10px' }}></div>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', border: '2px solid white', backgroundColor: '#999', marginLeft: '-10px' }}></div>
            </div>
            <div style={{ textAlign: 'left' }}>
                <p style={{ color: '#aaa', margin: 0, fontSize: '0.8rem' }}>Trusted by:</p>
                <strong style={{ fontSize: '1rem' }}>500+ users</strong>
            </div>
        </div>

        <div style={{fontSize:"60px",fontWeight:800}}>Studio</div>

        {/* Action Button */}
        <button className="cta-button">
          <span style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>Get Your Free Audit</span>
          <div className="arrow-box">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </div>
        </button>
      </div>
    {/* </div> */}
</section>

{/* infinite marquee */}
<div className="marquee-container">
      {/* We wrap the list twice to create the infinite loop effect */}
      <div className="marquee-content">
        {items.map((text, index) => (
          <div key={index} className="marquee-item">
            <span>{text}</span>
            <span className="separator">✱</span>
          </div>
        ))}
        {/* DUPLICATE SET */}
        {items.map((text, index) => (
          <div key={`dup-${index}`} className="marquee-item">
            <span>{text}</span>
            <span className="separator">✱</span>
          </div>
        ))}
      </div>
    </div>
    <section className="about-section">
      {/* Top Badge */}
      <div className="about-badge">
        <span className="stars">✦</span>
        <span>About us</span>
        <span className="stars">✦</span>
      </div>

      {/* Main Content Body */}
      <div className="about-content">
        <p style={{fontSize:"30px", textAlign:"justify"}}>
          Your AIO employ Artificial Intelligence Optimization (AIO) and 
          All–in–One Marketing Solutions to accelerate your business growth, 
          streamline processes, and increase ROI. Our cutting-edge AI-powered 
          platform predicts industry trends, fine-tunes your marketing 
          strategies, and delivers actionable, real-time insights that dri
          
          <span className="dimmed"> ve measurable improvements in campaign performance. </span>
          From precision ad targeting to automated content creation, we help 
          businesses save time, reduce manual effort, and drive a 
          
          <span className="highlight-gradient"> higher ROI </span>
          
          <span className="dimmed">
            with AI-driven solutions. Our all-in-one, intuitive dashboard makes 
            managing campaigns, tracking performance, and optimizing strategies 
            a seamless and efficient experience. Say goodbye to fragmented systems 
            and embrace a unified, results-driven approach. With Your AIO, 
            you have found your ultimate growth partner.
          </span>
        </p>
      </div>
    </section>
   <section className="services-section">
      <h2 className="services-header">
        Services We Offer 
      </h2>

      <div className="services-grid">
        {services.map((service, index) => (
          <div 
            key={index} 
            className={`service-card ${service.isActive ? 'active' : ''}`}
          >
            <div className="card-top">
              <h3 className="service-title">{service.title}</h3>
              <div className="arrow-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </div>
            </div>

            <p className="service-desc">{service.description}</p>
            
            {/* 3D Graphic Area */}
            <div 
              className="shape-container" 
              style={{ backgroundImage: `url(${service.image})` }}
            ></div>
          </div>
        ))}
      </div>

      {/* Decorative Glow Background */}
      <div style={{
        position: 'absolute',
        bottom: '-10%',
        left: '10%',
        width: '300px',
        height: '300px',
        background: 'radial-gradient(circle, rgba(106, 27, 154, 0.4) 0%, rgba(0,0,0,0) 70%)',
        zIndex: 0,
        pointerEvents: 'none'
      }}></div>
    </section>
  <section className="clients-section">
      <div className="clients-container">
        <h1 className="clients-title">Our Clients</h1>
        <div className="clients-title-underline"></div>

        <div className="clients-grid">
          {clients.map((client) => (
            <div key={client.id} className="client-card">
              <img 
                src={client.logo} 
                alt={client.name}
                className="client-logo"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
    <section>
          <div className="pricing-container">
      <h1 className="pricing-title">Unlock AI Potential<br />With Our Pricing</h1>
      <div className="pricing-cards-wrapper">
        {plans.map((plan) => (
          <div key={plan.name} className="pricing-card">
            <div className="plan-badge">{plan.name}</div>
            <h2 className="plan-name">{plan.name}</h2>
            <div className="pricing-amount">
              <span className="currency">$</span>
              <span className="price">{plan.price}</span>
              <span className="period">/month</span>
            </div>
            <ul className="features-list">
              {plan.features.map((feature, index) => (
                <li key={index} className="feature-item">
                  <svg className="checkmark" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
    </section>
    </>
   
  );
}