import React, { useState } from 'react';
import emailjs from 'emailjs-com';

// Initialize EmailJS with your public API key
emailjs.init('CfweQfskbtOoBc_bh');

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send('service_z7hbtyu', 'template_tv2wedo', formData)
      .then((response) => {
        console.log('Message sent:', response.status, response.text);
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((err) => {
        console.error('Failed to send message:', err);
        alert('Failed to send message. Please try again later.');
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Message:</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Send Message</button>
    </form>
  );
};

export default Contact;
