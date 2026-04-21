import React from "react";
import GetStartedButton from "./GetStartedButton";

const principleCards = [
  {
    id: "ai-analytics",
    title: "Data-Driven Results",
    description:
      "We use analytics and AI insights to guide every decision, so campaigns stay measurable and profitable.",
  },
  {
    id: "automation",
    title: "Smart Automation",
    description:
      "From lead capture to follow-up workflows, automation helps your team save time and scale faster.",
  },
  {
    id: "growth",
    title: "Sustainable Growth",
    description:
      "Our process combines strategy, performance testing, and optimization to create long-term growth.",
  },
];

const stats = [
  { id: "years", value: "10+", label: "Years Experience" },
  { id: "projects", value: "30+", label: "Completed Projects" },
  { id: "partners", value: "08", label: "Trusted Partners" },
];

const stories = [
  {
    id: "story-1",
    title: "The Challenge of Visibility",
    description:
      "A fast-growing team needed stronger visibility and quality leads. We rebuilt their digital funnel.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "story-2",
    title: "From Traffic to Revenue",
    description:
      "We redesigned content paths and conversion points to turn ad traffic into predictable revenue.",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "story-3",
    title: "Scaling with Confidence",
    description:
      "By combining AI targeting and automation, the client scaled campaigns while reducing wasted spend.",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=900&q=80",
  },
];

const AboutHero = () => {
  return (
    <section className="about-hero">
      <div className="about-shell about-hero-grid">
        <div className="about-hero-copy">
          <p className="about-tag">AI Powered Agency</p>
          <h1>Empowering Your Business With AI-Driven Innovation</h1>
          <p>
            We blend strategic thinking, modern design, and intelligent automation to
            deliver business results that are faster, clearer, and built to scale.
          </p>
          <GetStartedButton text="Get Started" className="project-btn about-hero-btn" />
        </div>
        <div className="about-hero-visual" aria-hidden="true">
          <img
            className="about-hero-photo"
            src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=900&q=80"
            alt=""
          />
          <div className="about-orb"></div>
        </div>
      </div>
    </section>
  );
};

const AboutInnovation = () => {
  return (
    <section className="about-innovation">
      <div className="about-shell about-innovation-grid">
        <div className="about-collage" aria-hidden="true">
          <img
            className="about-collage-main"
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1100&q=80"
            alt=""
          />
          <img
            className="about-collage-small about-collage-small-a"
            src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=600&q=80"
            alt=""
          />
          <img
            className="about-collage-small about-collage-small-b"
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80"
            alt=""
          />
        </div>
        <div className="about-innovation-copy">
          <h2>Harnessing Artificial Intelligence for Innovative Solutions</h2>
          <p>
            We help brands unlock new opportunities with AI-based workflows, optimized
            customer journeys, and performance systems designed for real growth.
          </p>
        </div>
      </div>
    </section>
  );
};

const CorePrinciples = () => {
  return (
    <section className="about-principles">
      <div className="about-shell">
        <div className="about-principles-head">
          <h2>Core Principles Driving Your AI Commitment to Innovation and Impact</h2>
          <div className="about-principles-gem" aria-hidden="true">
            <span>SEO</span>
          </div>
        </div>

        <div className="about-principles-grid">
          {principleCards.map((card) => (
            <article key={card.id} className="about-principle-card">
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

const AboutStats = () => {
  return (
    <section className="about-stats">
      <div className="about-shell about-stats-grid">
        {stats.map((item) => (
          <article key={item.id} className="about-stat-card">
            <h3>{item.value}</h3>
            <p>{item.label}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

const ClientStories = () => {
  return (
    <section className="about-stories">
      <div className="about-shell">
        <h2>What Our Clients Says</h2>
        <div className="about-stories-grid">
          {stories.map((story) => (
            <article key={story.id} className="about-story-card">
              <img className="about-story-thumb" src={story.image} alt="" />
              <div className="about-story-icon" aria-hidden="true">
                ✦
              </div>
              <h3>{story.title}</h3>
              <p>{story.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

const AboutShowcaseSections = () => {
  return (
    <>
      <AboutHero />
      <AboutInnovation />
      <CorePrinciples />
      <AboutStats />
      <ClientStories />
    </>
  );
};

export default AboutShowcaseSections;
