"use client";

import React, { useMemo, useState } from "react";

const baseVentures = [
  {
    id: 1,
    title: "Litter Busters",
    description:
      "Litter Busters approached us to strengthen their online presence, attract more local customers, and build trust.",
    image:
      "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1200&q=80",
    tag: "Digital Marketing",
  },
  {
    id: 2,
    title: "Snake Encounters",
    description:
      "Snake Encounters partnered with us to improve their digital footprint and create a modern website.",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80",
    tag: "Digital Marketing",
  },
  {
    id: 3,
    title: "Level Head Contracting",
    description:
      "Explore how we helped Level Head Contracting enhance its online presence through focused digital growth.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
    tag: "Digital Marketing",
  },
  {
    id: 4,
    title: "Martin's Pressure Washing & Services LLC",
    description:
      "Discover how we helped Martin's Pressure Washing & Services LLC strengthen their online presence.",
    image:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1200&q=80",
    tag: "Digital Marketing",
  },
  {
    id: 5,
    title: "James Wholesale Homes",
    description:
      "James Wholesale Homes partnered with us to enhance their digital presence and generate quality leads.",
    image:
      "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1200&q=80",
    tag: "Digital Marketing",
  }
];

const ventures = Array.from({ length: 4 }).flatMap((_, pageIndex) =>
  baseVentures.map((venture, ventureIndex) => ({
    ...venture,
    id: pageIndex * baseVentures.length + ventureIndex + 1,
  }))
);

const PortfolioVentures = () => {
  const perPage = 5;
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(ventures.length / perPage);
  const pageButtons =
    totalPages <= 3 ? Array.from({ length: totalPages }, (_, index) => index + 1) : [1, 2, totalPages];

  const visibleVentures = useMemo(() => {
    const start = (page - 1) * perPage;
    return ventures.slice(start, start + perPage);
  }, [page]);

  return (
    <section className="ventures-section" aria-labelledby="ventures-title">
      <div className="ventures-container">
        <h2 id="ventures-title">Explore Our Portfolio of Creative Ventures</h2>

        <div className="ventures-grid" role="list">
          {visibleVentures.map((venture, index) => (
            <article
              className={`venture-card ${index % 2 === 0 ? "normal" : "reverse"}`}
              key={venture.id}
            >
              <div className="venture-image-wrap">
                <img src={venture.image} alt={venture.title} className="venture-image" />
                <span className="venture-tag">{venture.tag}</span>
              </div>

              <div className="venture-content">
                <h3>{venture.title}</h3>
                <p>{venture.description}</p>
                <a href="#" className="venture-read-more" aria-label={`Open ${venture.title}`}>
                  ↗
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="ventures-pagination" aria-label="Portfolio pagination">
          <button type="button" className="ventures-icon-btn" onClick={() => setPage(1)} aria-label="First page">
            «
          </button>

          <div className="ventures-dots" role="tablist" aria-label="Pagination pages">
            {pageButtons.map((pageNumber, index, arr) => {
              const isActive = pageNumber === page;
              return (
                <React.Fragment key={pageNumber}>
                  <button
                    type="button"
                    className={`ventures-dot ${isActive ? "active" : ""}`}
                    onClick={() => setPage(pageNumber)}
                    aria-label={`Go to page ${pageNumber}`}
                    aria-pressed={isActive}
                  >
                    {pageNumber}
                  </button>
                  {index === 1 && arr[2] - arr[1] > 1 ? <span className="ventures-ellipsis">...</span> : null}
                </React.Fragment>
              );
            })}
          </div>

          <button
            type="button"
            className="ventures-icon-btn"
            onClick={() => setPage(totalPages)}
            aria-label="Last page"
          >
            »
          </button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioVentures;
