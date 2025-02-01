import React from 'react';
import './about.css';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';  // Use FaMapMarkerAlt instead of FaLocationDot
import { FiFacebook, FiTwitter } from 'react-icons/fi';
import { FaInstagram, FaLinkedinIn } from 'react-icons/fa';

import Aos from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  React.useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="about">
      {/* Overlay and Background Image (optional) */}
      <div className="overlay"></div>
      <img src="/about-bg.jpg" alt="About Background" className="about-image" />

      {/* About Content */}
      <div className="aboutContent container">
        {/* About Text */}
        <div className="textDiv">
          <h1 data-aos="fade-up" className="aboutTitle">About Us</h1>
          <p data-aos="fade-up" className="aboutDescription">
            We are a travel company dedicated to providing the best holiday experiences. Our team of experts ensures that every trip you take is a memorable one, whether it's a relaxing beach vacation or an adventurous exploration.
          </p>
        </div>

        {/* Contact Information */}
        <div data-aos="fade-up" className="contactDiv">
          <h2>Contact Us</h2>
          <div className="contactDetails">
            <div className="contactItem">
              <FaMapMarkerAlt className="icon" /> {/* Use FaMapMarkerAlt for location */}
              <span>123 Main Street, City, Country</span>
            </div>
            <div className="contactItem">
              <FaPhoneAlt className="icon" />
              <span>+123 456 7890</span>
            </div>
            <div className="contactItem">
              <FaEnvelope className="icon" />
              <span>info@travelcompany.com</span>
            </div>
          </div>
        </div>

        {/* Footer Social Media Icons */}
        <div data-aos="fade-up" className="aboutFooterIcons flex">
          <div className="rightIcons">
            <FiFacebook className="icon" />
            <FaInstagram className="icon" />
            <FiTwitter className="icon" />
            <FaLinkedinIn className="icon" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
