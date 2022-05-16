/*------------------------------------------------------------
-                          Contact
------------------------------------------------------------*/

import React, { useState } from 'react';
import { validateEmail } from '../../utils/helper';

function Contact() {

  const [formState, setFormState] = useState({ name: '', company: '', email: '', message: '' });
  const { name, company, email, message } = formState;
  const [errorMessage, setErrorMessage] = useState('');
  
  function handleChange(e) {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      console.log(isValid);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    }
    else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      }
      else {
        setErrorMessage('');
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value })
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formState);
  }

  return (
    <section>
      <h1>Contact Me</h1>
      <form id ="contact-form" onSubmit={handleSubmit}>

        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" defaultValue={name} onChange={handleChange} name="name" />
        </div>

        <div>
          <label htmlFor="company">Company:</label>
          <input type="text" defaultValue={company} onChange={handleChange} name="company" />
        </div>

        <div>
          <label htmlFor="email">Email address:</label>
          <input type="email" defaultValue={email} onChange={handleChange} name="email" />
        </div>

        <div>
          <label htmlFor="message">Message:</label>
          <textarea rows="5" defaultValue={message} onChange={handleChange} name="message" />
        </div>

        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        
      <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default Contact;