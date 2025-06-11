import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactEmail = () => {
  const formRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await emailjs.sendForm(
        'service_o3ybicq',     
        'template_gab44nc',
        formRef.current,
        't_jJx9AxgtPe1zm1j'
      );

      console.log('SUCCESS!', result.text);
      alert('Message sent successfully!');
      e.target.reset();

    } catch (error) {
      console.error('FAILED...', error);
      alert('Failed to send message.');
    }
  };

  return (
    <div className='container mt-5'>
      <h1 className='text-center'>Contact form</h1>
      <form ref={formRef} onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name:</label>
          <input type="text" name="user_name" className="form-control border-1" id="name" required />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address:</label>
          <input type="email" name="user_email" className="form-control border-1" id="email" required />
        </div>
        <div className="mb-3 flex">
          <label htmlFor="message" className="form-label">Message:</label>
          <textarea name="message" className="form-control border-1" id="message" rows="3" required></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default ContactEmail;
