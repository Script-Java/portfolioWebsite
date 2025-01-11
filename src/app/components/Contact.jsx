"use client";

import React, { useState } from 'react';
import { IoIosSend } from "react-icons/io";

function Contact() {
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setShowToast(true);
        e.target.reset();
        setTimeout(() => setShowToast(false), 3000); // Hide toast after 3 seconds
      } else {
        alert('Failed to send message. Please try again later.');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <div id='contact'>
      <div className="my-40">
        <h3 className="text-6xl uppercase text-center lg:text-start p-4 my-10 font-bold">Contact Me</h3>
        <div className="p-4">
          <p className='text-3xl my-4'>Let's Work 🫱🏼‍🫲🏽</p>
          <form
            className='flex flex-col w-full gap-4'
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="input input-bordered w-full"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="input input-bordered w-full"
              required
            />
            <textarea
              name="message"
              className="textarea textarea-bordered"
              placeholder="Message"
              required
            ></textarea>
            <button type="submit" className='btn btn-primary'>
              Send <IoIosSend className='text-xl' />
            </button>
          </form>
        </div>
      </div>

      {showToast && (
        <div className="toast toast-end toast-top">
          <div className="alert alert-success">
            <span>Message sent successfully.</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default Contact;
