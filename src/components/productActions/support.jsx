import React, { useState } from 'react';
import './support.css'; // Import the CSS file for styling
import Navigation from '../navigation/navigation';

const ContactSupportPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [id, setId] = useState('');
  const [message, setMessage] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleIdChange = (event) => {
    setId(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can implement the logic to send the message to your support system
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('ID:', id);
    console.log('Message:', message);
    setName('');
    setEmail('');
    setId('');
    setMessage('');
  };

  return (
    <div className="contact-support">
      <Navigation />
      <h1 className='headingText'>Contact us</h1>
      <div className="contactBody">
      <div className='text'>
        <p>
          <h2>Have a question or need assistance? </h2>We're here to help! Please provide the following details along with your message
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          name="name"
          type="text"
          value={name}
          onChange={handleNameChange}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          id="email"
          name="email"
          type="email"
          value={email}
          onChange={handleEmailChange}
          required
        />

        <label htmlFor="id">ID:</label>
        <input
          id="id"
          name="id"
          type="text"
          value={id}
          onChange={handleIdChange}
          required
        />

        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={message}
          onChange={handleMessageChange}
          rows={5}
          cols={50}
          required
        />
        <button type="submit">Send Message</button>
      </form>
      </div>
    </div>
  );
};

export default ContactSupportPage;
