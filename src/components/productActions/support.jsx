import React, { useState } from 'react';
<<<<<<< HEAD
import './support.css';
import { Link } from 'react-router-dom';
import AccountNavigation from '../personal/accountNavigation';
=======
import './support.css'; // Import the CSS file for styling
import Navigation from '../navigation/navigation';
// import mail from '../../images/mail.png'
import facebook from '../../images/facebook.png'
import twitter from '../../images/twitter.png'
import instagram from '../../images/instagram.png'
import { Link } from 'react-router-dom';
>>>>>>> safe

const ContactSupportPage = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
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
  }

<<<<<<< HEAD
  const handleSubmit = (event) => {
    event.preventDefault();
=======
  const icons = [twitter, facebook, instagram];

  const handleSubmit = (event) => {
    event.preventDefault();
  


>>>>>>> safe
    setFirstName('');
    setEmail('');
    setLastName('');
    setId('');
    setMessage('');
  };

<<<<<<< HEAD
  return (
    <>
      
  
      <AccountNavigation navContent={{
                "Messages": 'messages',
                "My trading dashboard": "account/trading_index"
            }}/>
     
         <div className='contatc-margin'>
         <div className="contact-support-page">
              <h3 className='heading-contact'>Contact Us</h3>
                    <p className='paragraph-contact'>
                     "Need help or have a query? Share your details and message below!"
                    </p>
                    <form onSubmit={handleSubmit}>
                      {Object.keys(inputObject).map(inputKey => (
                        <input 
                          key={inputKey}
                          type="text" 
                          placeholder={inputKey} 
                          onChange={inputObject[inputKey]}
                          required
                        />
                      ))}
                      <textarea 
                        name="Message" 
                        placeholder='Message'
                        onChange={handleMessageChange}
                        value={message}
                        required
                      ></textarea>
                      <button type="submit" className='contactButton'>Send Message</button>
                    </form>
            </div>
         </div>

      
    </>
=======
  const IconsRendered = icons.map(icon=>{
    console.log(icon);
    return <Link to='nowhere' className='icon-link'><img src={icon} alt="icon-image" className='icon-image'/> The_college_market</Link>
  })

//   const IconsToRender = Object.keys(inputObject).map(iconKey=>{
//     // console.log(Object.keys(iconsNavigation[iconKey])[0]);
//     return <Icon name = 'name' icon = {iconsNavigation[iconKey][Object.keys(iconsNavigation[iconKey])[0]]} action = {Object.keys(iconsNavigation[iconKey])[0]} title = {iconKey}/>
// })

  
  // console.log(inputToReturn);

  return (
    <div className="contact-support">
      <Navigation />
      <div className="contactBody">
      <div className='text'>
      <h1 className='headingText'>Talk with our Team</h1>
        <h2>Find us online: </h2>
        {IconsRendered}
      </div>
      <form onSubmit={handleSubmit}>
        <div>
        {Object.keys(inputObject).map(inputKey=>{
            return(
              <input type="text" placeHolder = {inputKey} onChange = {inputObject[inputKey]} required = {true}/>
            )
          })}
        </div> 

        <textarea name="Message" id="" cols="44" rows="10" placeholder='message' style={{
          padding : '1rem'
        }}></textarea>
        <button type="submit" className='contactButton'>Send Message</button>
      </form>
      </div>
    </div>
>>>>>>> safe
  );
};

export default ContactSupportPage;
