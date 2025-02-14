import React from 'react';

const Home = () => {
  return (
    <div className="text-center">
      <h1 className="display-4">Welcome to Our Website</h1>
      <p className="lead">Explore the resources and information we provide.</p>
      <button className="btn btn-primary btn-lg" onClick={() => alert("Welcome to our website!")}>
        Get Started
      </button>
    </div>
  );
};

export default Home;
