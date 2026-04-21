import React from "react";
import "../css/project.css";
import GetStartedButton from "../Component/GetStartedButton";
import PortfolioVentures from "../Component/PortfolioVentures";
import StartProjectContact from "../Component/StartProjectContact";

const Page = () => {
  return (
    <>
      <section className="project-hero">
        <div className="project-overlay"></div>
        <div className="project-content">
          <h1>Our Featured Projects</h1>
          <p>
            Explore a collection of our best work, showcasing the quality,
            creativity, and expertise we bring to every project. Each project
            reflects our commitment to delivering outstanding results, whether
            it&apos;s through innovative design, seamless functionality, or
            impactful strategies. Browse through the details below to see how
            we&apos;ve helped our clients achieve success and how we can bring the
            same level of excellence to your project.
          </p>

          <GetStartedButton />
        </div>
      </section>

      <PortfolioVentures />
      <StartProjectContact />
    </>
  );
};

export default Page;
