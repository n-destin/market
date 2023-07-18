import React, { useState } from 'react';
import './support.css'; // Import the CSS file for styling
import Navigation from '../navigation/navigation';

const ContactSupportPage = () => {
  const [firstName, setFirstName] = useState('');
  const[lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [id, setId] = useState('');
  const [message, setMessage] = useState('');

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange  = (event)=>{
    setLastName(event.target.value)
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleIdChange = (event) => {
    setId(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const inputObject = {
    'First name' : handleFirstNameChange,
    'Last name' : handleLastNameChange,
    'Email' : handleEmailChange,
    'Customer id' : handleIdChange,
    // 'Your message' : handleMessageChange,
  }


  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can implement the logic to send the message to your support system
    setFirstName('');
    setEmail('');
    setLastName('');
    setId('');
    setMessage('');
  };

//   const IconsToRender = Object.keys(inputObject).map(iconKey=>{
//     // console.log(Object.keys(iconsNavigation[iconKey])[0]);
//     return <Icon name = 'name' icon = {iconsNavigation[iconKey][Object.keys(iconsNavigation[iconKey])[0]]} action = {Object.keys(iconsNavigation[iconKey])[0]} title = {iconKey}/>
// })

  
  // console.log(inputToReturn);

  return (
    <div className="contact-support">
      <Navigation />
      <h1 className='headingText'>Contact us</h1>
      <div className="contactBody">
      <div className='text'>
        <p>
          Have a question or need assistance? We're here to help! Please provide the following details along with your message
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
        {Object.keys(inputObject).map(inputKey=>{
          console.log('here');
            return(
              <input type="text" placeHolder = {inputKey} onChange = {inputObject[inputKey]}/>
            )
          })}
        </div>

        <textarea name="Message" id="" cols="30" rows="10" placeholder='message'></textarea>
        <button type="submit" className='contactButton'>Send Message</button>
      </form>
      </div>
    </div>
  );
};

export default ContactSupportPage;
