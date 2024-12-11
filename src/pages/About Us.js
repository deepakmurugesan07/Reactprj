// AboutSection.js
import React from 'react';
import aboutBanner from '../images/about-banner.jpg';  // Correct image import

// Default export for AboutSection component
const AboutSection = () => {
  return (
    <section className="section about" id="about" aria-label="about">
      <div className="container">
        <figure className="about-banner">
          <div className="img-holder" style={{ '--width': 520, '--height': 370 }}>
            <img
              src={aboutBanner}
              alt="About Banner"
              width="520"
              height="370"
              loading="lazy"
              className="img-cover"
            />
          </div>
        </figure>
        <div className="about-content">
          <p className="section-subtitle">About Us</p>
          <h2 className="h2 section-title">
            Over 10 Years in <span className="span">Distant Learning</span> for Skill Development
          </h2>
          <p className="section-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <ul className="about-list">
            <li className="about-item">
              <i className="icon ion-checkmark-done-outline"></i>
              <span className="span">Expert Trainers</span>
            </li>
            <li className="about-item">
              <i className="icon ion-checkmark-done-outline"></i>
              <span className="span">Online Remote Learning</span>
            </li>
            <li className="about-item">
              <i className="icon ion-checkmark-done-outline"></i>
              <span className="span">Lifetime Access</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;  // Exporting the component correctly

// Importing and using AboutSection elsewhere (example):
// import AboutSection from './path-to/AboutSection';
