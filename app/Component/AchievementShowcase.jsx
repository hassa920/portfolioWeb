import React from "react";

const achievementData = [
  {
    id: "recognizing-excellence",
    name: "Recognizing Excellence",
    kind: "Web Development Award - Innovation",
    year: "2010",
  },
  {
    id: "ai-design",
    name: "AI Design",
    kind: "Design Awards - Innovation",
    year: "2016",
  },
  {
    id: "projects-planning",
    name: "Projects Planning",
    kind: "Design Awards - Innovation",
    year: "2020",
  },
];

const AchievementRow = ({ item }) => {
  return (
    <li className="achievement-row" role="row">
      <p className="achievement-name" role="cell">
        {item.name}
      </p>
      <p className="achievement-kind" role="cell">
        {item.kind}
      </p>
      <p className="achievement-year" role="cell">
        {item.year}
      </p>
    </li>
  );
};

const AchievementShowcase = () => {
  return (
    <section className="achievement-section" aria-labelledby="achievement-title">
      <div className="achievement-container">
        <div className="achievement-heading">
          <span className="achievement-accent" aria-hidden="true"></span>
          <h2 id="achievement-title">Our Greatest Achievement</h2>
          <span className="achievement-accent" aria-hidden="true"></span>
        </div>

        <div className="achievement-grid">
          <div className="achievement-image-wrap">
            <img
              className="achievement-image"
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80"
              alt="Laptop screen with web development technologies"
            />
          </div>

          <div className="achievement-table-wrap">
            <div className="achievement-table-head" role="row">
              <span role="columnheader">Name</span>
              <span role="columnheader">Kind</span>
              <span role="columnheader">Year</span>
            </div>

            <ul className="achievement-table" role="table" aria-label="Achievement records">
              {achievementData.map((item) => (
                <AchievementRow key={item.id} item={item} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementShowcase;
