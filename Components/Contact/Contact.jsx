import React from "react";
import { FaLinkedinIn, FaInstagram, FaFacebook } from "react-icons/fa";
import "./contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contactContent">
        <h1 className="contactTitle">Get in Touch</h1>
        <p className="contactSubtitle">
          Have questions or need assistance? We'd love to hear from you!
        </p>

        {/* Contact Details */}
        <div className="contactDetails">
          <p>
            <strong>Email:</strong> contact@jayasree.com
          </p>
          <p>
            <strong>Phone:</strong> +91 9876543210
          </p>
          <p>
            <strong>Address:</strong> 1234 India
          </p>
        </div>

        {/* Contact Form */}
        <form className="contactForm">
          <div className="formGroup">
            <label htmlFor="name">Your Name</label>
            <input id="name" type="text" placeholder="Enter your name" />
          </div>
          <div className="formGroup">
            <label htmlFor="email">Your Email</label>
            <input id="email" type="email" placeholder="Enter your email" />
          </div>
          <div className="formGroup">
            <label htmlFor="message">Your Message</label>
            <textarea id="message" placeholder="Enter your message"></textarea>
          </div>
          <button type="submit" className="submitBtn">
            Send Message
          </button>
        </form>

        {/* Social Media Icons */}
        <div className="socialIcons">
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="socialLink"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="socialLink"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="socialLink"
          >
            <FaFacebook />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
