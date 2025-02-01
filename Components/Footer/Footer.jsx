import React,{useEffect} from 'react';
import './footer.css';
import download from '../../Assets/download.mp4';
import { FiSend, FiChevronRight } from "react-icons/fi";
import { MdOutlineTravelExplore } from "react-icons/md";
import { AiOutlineTwitter, AiFillYoutube, AiFillInstagram } from "react-icons/ai";
import { FaTripadvisor } from "react-icons/fa";


import Aos from 'aos';
import 'aos/dist/aos.css';

const Footer = () => {
  const links = [
    {
      title: "OUR AGENCY",
      items: ["Services", "Insurance", "Agency", "Tourism", "Payment"],
    },
    {
      title: "PARTNERS",
      items: ["Bookings", "RentCars", "HostelWorld", "Trivago", "TripAdvisor"],
    },
    {
      title: "LAST MINUTE",
      items: ["London", "California", "Indonesia", "Europe", "Oceania"],
    },
  ];

  return (
    <section className="footer">
      {/* Video Background */}
      <div className="videoDiv">
        <video src={download} loop autoPlay muted type="video/mp4"></video>
      </div>

      {/* Footer Content Section */}
      <div className="secContent container">
        {/* Contact Section */}
        <div className="contactDiv flex">
          <div data-aos="fade-up"className="text">
            <small>KEEP IN TOUCH</small>
            <h2>Travel with us</h2>
          </div>
          <div className="inputDiv flex">
            <input type="text" placeholder="Enter your email address" />
            <button data-aos="fade-up" className="btn flex" type="submit">
              SEND <FiSend className="icon" />
            </button>
          </div>
        </div>

        {/* Footer Card Section */}
        <div className="footerCard flex">
          <div className="footerIntro flex">
            {/* Logo */}
            <div className="logoDiv">
              <a href="#" className="logoflex">
                <MdOutlineTravelExplore className="icon" />
                Travel
              </a>
            </div>

            {/* Footer Description */}
            <div data-aos="fade-up" className="footerParagraph">
              Discover the world with us! Whether you're planning your next adventure, a family getaway, or a romantic retreat, we're here to make your travel dreams a reality. Explore stunning destinations, experience new cultures, and create unforgettable memories with our expert guidance. Subscribe to our newsletter and stay updated on exclusive deals, travel tips, and the latest destination highlights.
            </div>

            {/* Social Media Links */}
            <div data-aos="fade-up" className="footerSocials">
              <AiOutlineTwitter className="icon" />
              <AiFillYoutube className="icon" />
              <AiFillInstagram className="icon" />
              <FaTripadvisor className="icon" />
            </div>
          </div>

          {/* Footer Links */}
          <div className="footerLinks">
            {links.map((group, index) => (
              <div className="linkGroup" key={index}>
                <span className="groupTitle">{group.title}</span>
                <ul>
                  {group.items.map((item, idx) => (
                    <li className="footerList flex" key={idx}>
                      <FiChevronRight className="icon" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Copyright Section */}
        <div className="footerDiv flex">
          <small>BEST TRAVEL WEBSITE THEME</small>
          <small>COPYRIGHTS RESERVED - ISRATECH 2025</small>
        </div>
      </div>
    </section>
  );
};

export default Footer;
