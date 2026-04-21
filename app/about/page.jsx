import React from "react";
import "../css/about.css";
import AboutShowcaseSections from "../Component/AboutShowcaseSections";
import AchievementShowcase from "../Component/AchievementShowcase";
import StartProjectContact from "../Component/StartProjectContact";

const About = () => {
  return (
    <main className="about-page">
      <AboutShowcaseSections />
      <AchievementShowcase />
      <StartProjectContact />
    </main>
  );
};

export default About;
