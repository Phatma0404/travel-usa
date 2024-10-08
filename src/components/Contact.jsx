import React from "react";
import { BiSolidPlaneAlt } from "react-icons/bi";

const ContactForm = () => {
  return (
    <div
      className="contact-section bg-cover bg-center py-10 opacity-70"
      name="contact"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1499566727020-881da110a0b0?q=80&w=2143&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
      <h1 className="text-center text-gray-200 text-4xl flex justify-center">
        Send me a <BiSolidPlaneAlt color="#ffaa2b" />
        message{" "}
      </h1>
      <div className="border-t-4 border-[#ffaa2b] w-24 mx-auto my-8"></div>
      <form className="contact-form max-w-2xl mx-auto p-4">
        <input
          type="text"
          className="contact-form-text w-full mb-4 p-5 bg-[#ceddf3]  text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-800"
          placeholder="Your name"
        />
        <input
          type="email"
          className="contact-form-text w-full mb-4 p-5 bg-[#ceddf3]  text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-800"
          placeholder="Your email"
        />
        <input
          type="text"
          className="contact-form-text w-full mb-4 p-5 bg-[#ceddf3]  text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-800"
          placeholder="Your phone"
        />
        <textarea
          className="contact-form-text w-full mb-4 p-5 bg-[#ceddf3]  text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-800 resize-none h-32"
          placeholder="Your message"
        ></textarea>
        <input
          type="submit"
          className="contact-form-btn bg-[#ceddf3] text-gray-600 py-2 px-8 rounded-full hover:bg-gray-600 hover:text-white transition duration-300 cursor-pointer float-right"
          value="Send"
        />
      </form>
    </div>
  );
};

export default ContactForm;
