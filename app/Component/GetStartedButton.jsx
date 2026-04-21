import Link from "next/link";
import React from "react";

const GetStartedButton = ({
  text = "Let's Get Started",
  className = "project-btn",
  type = "button",
}) => {
  return (
    <button className={className} type={type}>
      <Link href="/contact">{text}</Link>
      <span className="project-arrow-box" aria-hidden="true">
        <svg
          className="project-arrow-icon"
          viewBox="0 0 24 24"
          width="20"
          height="20"
          focusable="false"
        >
          <path
            d="M4 12h12.5M12 6l6 6-6 6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </button>
  );
};

export default GetStartedButton;
