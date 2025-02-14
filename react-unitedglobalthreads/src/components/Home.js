import React from 'react';

const Home = () => {
  return (
    <div>
      <h1>Welcome to Our Website</h1>
      <p>This is the main page.</p>
      <p>Here you can find various resources and information.</p>
      <button onClick={() => alert("Welcome to our website!")}>Click me!</button>
    </div>
  );
};

export default Home;
