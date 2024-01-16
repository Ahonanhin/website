import React, { useState } from 'react';
import './Contacts.css';
import emailjs from 'emailjs-com';

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const me = "yann";
  
    emailjs.send('service_jje8lmk', 'template_10vxzra', { name, me, message, name, email }, 'YOUR_USER_ID')
      .then((response) => {
         console.log('SUCCESS!', response.status, response.text);
         setShowPopup(true);
         setTimeout(() => setShowPopup(false), 3000); // hide the popup after 3 seconds
      }, (error) => {
         console.log('FAILED...', error);
      });
  
    setName('');
    setEmail('');
    setMessage('');
  };
  

  return (
    <div className="contacts">
        <div className="contacts_header">
            <h1>Send me a message! </h1>
        </div>
        <form onSubmit={handleSubmit}>
            <label>
                Name
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
            </label>
            <label>
                Email
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </label>
            <label>
                Message
                <textarea value={message} onChange={(e) => setMessage(e.target.value)} required />
            </label>
            <input type="submit" value="Submit" />
        </form>
        {showPopup && <div className="popup">Message sent successfully!</div>}
    </div>
  );
}

export default ContactForm;
