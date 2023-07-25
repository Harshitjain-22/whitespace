import React, { useState } from 'react';

const ContactForm = () => {
  // State variables to store form data
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [message, setMessage] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform form submission logic here
    // For this example, we will just log the form data to the console
    console.log('Form Data:', { name, email, mobileNumber, message });
  };

  return (
    <div style={{paddingTop:"150px", paddingLeft:"20px"}}>
    <form onSubmit={handleSubmit}>
      <div  >
        <input
        style={{width:"40vw",height:"5vh",borderRadius:"8px",paddingLeft:"20px"}}
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          placeholder='Name'
        />
      </div>
      <div style={{paddingTop:"20px"}}>
        <input
        style={{width:"40vw",height:"5vh",borderRadius:"8px",paddingLeft:"20px"}}
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder='Email'
        />
      </div>
      <div style={{paddingTop:"20px"}}>
        <input
        style={{width:"40vw",height:"5vh",borderRadius:"8px",paddingLeft:"20px"}}
          type="tel"
          id="mobileNumber"
          value={mobileNumber}
          onChange={(e) => setMobileNumber(e.target.value)}
          required
          placeholder='Mobile number'
        />
      </div>
      <div style={{paddingTop:"20px"}}>
        <textarea
        style={{width:"40vw",height:"5vh",paddingBottom:"30px",borderRadius:"8px",paddingLeft:"20px"}}
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          placeholder='Message you want to share'
        />
      </div >
      <div style={{paddingTop:"20px"}}>
      <button type="submit" style={{borderRadius:"20px",height:"40px",width:"100px"}}>Submit</button>
      </div>
    </form>
  </div>
  );
};

export default ContactForm;
