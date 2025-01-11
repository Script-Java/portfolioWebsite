import React from 'react';
import { IoIosSend } from "react-icons/io";

function Contact() {
  return (
    <div id='contact'>
      <div className="my-40">
        <h3 className="text-6xl uppercase text-center lg:text-start p-4 my-10 font-bold">Contact Me</h3>
        <div className="p-4">
          <p className='text-3xl my-4'>Let's Work 🫱🏼‍🫲🏽</p>
          <form
            className='flex flex-col w-full gap-4'
            action="/"
            method="POST"
            data-netlify="true"
          >
            <input type="hidden" name="form-name" value="contact" />
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
    </div>
  );
}

export default Contact;
