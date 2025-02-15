import React from 'react';
import './About.css'; // Ensure your specific About styles are linked

const About = () => {
  return (
    <section className="section d-flex flex-column align-items-center justify-content-center text-center">
      <h1 className="display-4 mb-4" data-aos="fade-up">About Us</h1>
      <p className="lead mb-5" data-aos="fade-up" data-aos-delay="100">
        Our organization is dedicated to making a positive impact in the community through donations and support.
      </p>

      <div className="info-container d-flex justify-content-center">
        <div className="info-pane" data-aos="fade-up" data-aos-delay="200">
          <h3>Our Mission</h3>
          <p>We strive to create an inclusive, supportive environment where every individual can contribute to helping those in need.</p>
        </div>

        <div className="info-pane" data-aos="fade-up" data-aos-delay="300">
          <h3>Our Vision</h3>
          <p>We envision a community where generosity and kindness are part of everyday life. Together, we can make a difference!</p>
        </div>

        <div className="info-pane" data-aos="fade-up" data-aos-delay="400">
          <h3>Get Involved</h3>
          <p>Join us in our efforts! Learn how you can help by visiting our donation page or contacting us for more information.</p>
        </div>
      </div>
    </section>
  );
};

export default About;
