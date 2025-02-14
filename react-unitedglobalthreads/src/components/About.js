import React from 'react';
import './About.css'; // Create this CSS file for animations and custom styles

const About = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">About Us</h1>
      <div className="row">
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="about-card animate__animated animate__fadeInLeft">
            <h2 className="about-title">Our Mission</h2>
            <p className="about-text">
              Our mission is to provide high-quality products and excellent service to our customers. We strive for excellence every day and aim to make a positive impact in our community.
            </p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="about-card animate__animated animate__fadeInUp">
            <h2 className="about-title">Our Vision</h2>
            <p className="about-text">
              We envision a world where our products empower individuals to lead happier and more fulfilling lives. Innovation is at the heart of everything we do.
            </p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="about-card animate__animated animate__fadeInRight">
            <h2 className="about-title">Our Values</h2>
            <p className="about-text">
              We believe in integrity, customer satisfaction, and teamwork. These values guide our actions and help us build lasting relationships with our customers and partners.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
