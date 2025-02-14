import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="text-center">
      <h1 className="display-4">Welcome to United Global Threads</h1>
      <p className="lead">Explore the resources and information we provide.</p>
      {/* Link component used to navigate to the Contact page */}
      <Link to="/contact" className="btn btn-primary btn-lg">
        <i className="fas fa-star"></i> Contact Us
      </Link>
    </div>
  );
};

export default Home;
