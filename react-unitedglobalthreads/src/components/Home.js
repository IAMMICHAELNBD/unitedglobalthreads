import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Ensure your CSS file is linked

// Arrow Component for Scroll Indicator
const ArrowDown = () => (
  <svg 
    width="40" 
    height="40" 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className="arrow-down"
  >
    <path d="M12 16L16 12H8L12 16Z" fill="currentColor" />
  </svg>
);

const Home = () => {
  return (
    <div>
      {/* Welcome Section */}
      <section className="section vh-100 d-flex flex-column align-items-center justify-content-center text-center">
        <h1 className="display-4 mb-4" data-aos="fade-up">Welcome to Our Donation Center</h1>
        <p className="lead mb-5" data-aos="fade-up" data-aos-delay="100">We accept a wide range of donations. Explore below.</p>

        {/* Donation Bins Pane */}
        <div className="info-pane" data-aos="fade-up" data-aos-delay="200">
          <h3>Donation Bins Locations</h3>
          <p>Our donation bins are located throughout the area, making it easier to contribute.</p>
          <p>Feel free to drop off your items at any of our locations:</p>
          <ul>
            <li>Location 1: Main Street Plaza</li>
            <li>Location 2: Community Park</li>
            <li>Location 3: City Library Parking Lot</li>
          </ul>
          <p>Thank you for your support in helping those in need!</p>
          <img src="https://via.placeholder.com/300" alt="Donation Bin" className="mt-3" />
        </div>

        {/* Additional Pane with Image */}
        <div className="info-pane" data-aos="fade-up" data-aos-delay="300">
          <h3>Why Your Donations Matter</h3>
          <p>Your generous donations help support families in need throughout the community. Every item counts!</p>
          <img src="https://via.placeholder.com/300" alt="Why Donations Matter" className="mt-3" />
        </div>

        <ArrowDown /> {/* Add Arrow here */}
      </section>

      {/* Community Support Section */}
      <section className="section vh-100 d-flex flex-column align-items-center justify-content-center text-center">
        <h1 className="display-4 mb-4" data-aos="fade-up">Community Support</h1>
        <p className="lead mb-5" data-aos="fade-up" data-aos-delay="100">Our mission is to support the community through various events.</p>

        <div className="info-pane" data-aos="fade-up" data-aos-delay="200">
          <p className="lead">We organize fundraising drives to support local families.</p>
          <img src="https://via.placeholder.com/300" alt="Community Event" />
          <p>Details about how to participate and the impact of these drives.</p>
        </div>
        <div className="info-pane" data-aos="fade-up" data-aos-delay="300">
          <p>Volunteer Opportunities: Join us to help your neighbors.</p>
          <img src="https://via.placeholder.com/300" alt="Volunteer Opportunities" />
          <p>Information about how to sign up to help in the community.</p>
        </div>
        <div className="info-pane" data-aos="fade-up" data-aos-delay="400">
          <p>Donation Drives: Contribute items to help our community during drives.</p>
          <img src="https://via.placeholder.com/300" alt="Donation Drives" />
        </div>

        <ArrowDown /> {/* Add Arrow here */}
      </section>

      {/* Acceptable Items Section */}
      <section className="section vh-100 d-flex flex-column align-items-center justify-content-center text-center">
        <h1 className="display-4 mb-4" data-aos="fade-up">Acceptable Items for Donation</h1>
        <p className="lead mb-5" data-aos="fade-up" data-aos-delay="100">Here are the items we accept for donation:</p>

        {/* Individual panes for each acceptable item */}
        <div className="info-pane" data-aos="fade-up" data-aos-delay="200">
          <h5>1. Clothing</h5>
          <p>We accept gently used clothing: jackets, shirts, pants, and more.</p>
          <img src="https://via.placeholder.com/300" alt="Clothing Donation" />
        </div>
        
        <div className="info-pane" data-aos="fade-up" data-aos-delay="300">
          <h5>2. Non-perishable Food</h5>
          <p>Donations can include canned goods, pasta, rice, and other shelf-stable items.</p>
          <img src="https://via.placeholder.com/300" alt="Food Donation" />
        </div>
        
        <div className="info-pane" data-aos="fade-up" data-aos-delay="400">
          <h5>3. Toys and Games</h5>
          <p>Please donate toys that are clean, safe, and in good working condition.</p>
          <img src="https://via.placeholder.com/300" alt="Toys Donation" />
        </div>
        
        <div className="info-pane" data-aos="fade-up" data-aos-delay="500">
          <h5>4. Books</h5>
          <p>Children's books, adult fiction, and non-fiction books are welcomed.</p>
          <img src="https://via.placeholder.com/300" alt="Books Donation" />
        </div>
        
        <div className="info-pane" data-aos="fade-up" data-aos-delay="600">
          <h5>5. Household Items</h5>
          <p>We accept kitchenware, small appliances, and other household essentials.</p>
          <img src="https://via.placeholder.com/300" alt="Household Items" />
        </div>

        <ArrowDown /> {/* Add Arrow here */}
      </section>
    </div>
  );
};

export default Home;
