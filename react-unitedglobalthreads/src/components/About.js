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
            At United Global Threads, our mission is to lead the charge in transforming textile waste into a powerful catalyst for positive change. We are dedicated to addressing the environmental crisis caused by discarded clothing while simultaneously empowering our community through charitable giving. By providing innovative recycling solutions, we help individuals responsibly dispose of unwanted textiles, ensuring that they are repurposed rather than ending up in landfills. <br /> We commit to donating a substantial portion of our proceeds to organizations fighting human trafficking and supporting those in need. We believe in the potential of every item we recycle to make a difference—not just for the environment, but for the lives of vulnerable individuals affected by exploitation.            </p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="about-card animate__animated animate__fadeInUp">
            <h2 className="about-title">Our Vision</h2>
            <p className="about-text">
            At United Global Threads, our vision is to establish a world where recycling and sustainability are at the forefront of every individual's and organization's actions. We aspire to create a future where discarded textiles are seen not as waste, but as valuable resources waiting to be repurposed and revitalized. <br/>We envision a society where communities are actively engaged in responsible disposal practices, ensuring that every piece of clothing, shoe, or textile is either recycled, reused, or donated, significantly reducing the burden on landfills and the environment. Our goal is to lead the charge in transforming how people think about their unwanted items, fostering a culture of mindfulness and appreciation for the planet’s finite resources.
            </p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="about-card animate__animated animate__fadeInRight">
            <h2 className="about-title">Our Values</h2>
            <p className="about-text">
            At United Global Threads, we hold steadfast to values that extend beyond recycling—we are committed to making a meaningful impact on our community and the world. Central to our mission is the belief that every action matters, and that’s why we strive to operate with integrity, compassion, and purpose. <br /> One of our core values is the power of giving back. We believe in the importance of donating a significant portion of our proceeds to charities that work tirelessly to uplift those in need, including organizations dedicated to abolishing human trafficking. We recognize the critical challenges faced by vulnerable populations, and we are passionate about contributing to efforts that provide support, resources, and hope for a brighter future.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
