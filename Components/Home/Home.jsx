import React, { useState, useEffect } from 'react';
import './home.css';
// import video from '../../Assets/video.mp4';
import { FaLocationDot } from "react-icons/fa6";
import { HiFilter } from "react-icons/hi";
import { FiFacebook } from "react-icons/fi";
import { FaInstagram, FaTripadvisor, FaListUl } from "react-icons/fa";
import { TbApps } from "react-icons/tb";

import Aos from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  const [price, setPrice] = useState(1000);
  const [showFilters, setShowFilters] = useState(false);
  const [formData, setFormData] = useState({
    destination: '',
    date: '',
    price: 1000,
    time: '',
    rating: '',
    freeCancellation: false,
    breakfastIncluded: false,
    petFriendly: false,
  });

  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation for mandatory fields
    if (!formData.destination || !formData.date || !formData.price) {
      setErrorMessage('Please fill in all mandatory fields: Destination, Date.');
      return;
    }

    // Clear error message and form after successful submission
    setErrorMessage('');
    alert('Form submitted successfully!');
    setFormData({
      destination: '',
      date: '',
      price: 1000,
      time: '',
      rating: '',
      freeCancellation: false,
      breakfastIncluded: false,
      petFriendly: false,
    });
    setPrice(1000); // Reset price slider
  };

  return (
    <section className="home">
      <div className="overlay"></div>
      {/* <video src={video} muted autoPlay loop type="video/mp4" className="video"></video> */}

      <div className="homeContent container">
        {/* Text Section */}
        <div className="textDiv">
          <h1 data-aos="fade-up" className="smallText">Our Packages</h1>
          <h1 data-aos="fade-up" className="homeTitle">Search your Holidays</h1>
        </div>

        {/* Card Section */}
        <form onSubmit={handleSubmit}>
          <div data-aos="fade-up" className="cardDiv grid">
            {/* Destination Input */}
            <div className="destinationInput">
              <label htmlFor="destination">Search your destination:</label>
              <div className="input flex">
                <input
                  id="destination"
                  name="destination"
                  type="text"
                  placeholder="Enter destination..."
                  value={formData.destination}
                  onChange={handleInputChange}
                />
                <FaLocationDot className="icon" />
              </div>
            </div>

            {/* Date Input */}
            <div className="dateInput">
              <label htmlFor="date">Select your date:</label>
              <div className="input flex">
                <input
                  id="date"
                  name="date"
                  type="date"
                  value={formData.date}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            {/* Price Input */}
            <div className="priceInput">
              <div className="label_total flex">
                <label htmlFor="price">Max price:</label>
                <h3 className="total">${price}</h3>
              </div>
              <div className="input flex">
                <input
                  id="price"
                  name="price"
                  type="range"
                  max="5000"
                  min="1000"
                  value={price}
                  onChange={(e) => {
                    setPrice(e.target.value);
                    setFormData((prev) => ({ ...prev, price: e.target.value }));
                  }}
                />
              </div>
            </div>

            {/* More Filters Toggle */}
            <div
              className="searchOptions flex"
              onClick={() => setShowFilters(!showFilters)}
            >
              <HiFilter className="icon" />
              <span>More Filters</span>
            </div>
          </div>

          {/* More Filters Section */}
          {showFilters && (
            <div data-aos="fade-up" className="moreFilters">
              <h3>Additional Filters</h3>
              <div className="filterGroup">
                <label htmlFor="time">Preferred Time:</label>
                <select
                  id="time"
                  name="time"
                  value={formData.time}
                  onChange={handleInputChange}
                >
                  <option value="">Select Time</option>
                  <option value="morning">Morning</option>
                  <option value="afternoon">Afternoon</option>
                  <option value="evening">Evening</option>
                  <option value="night">Night</option>
                </select>
              </div>

              <div className="filterGroup">
                <label htmlFor="rating">Minimum Rating:</label>
                <select
                  id="rating"
                  name="rating"
                  value={formData.rating}
                  onChange={handleInputChange}
                >
                  <option value="">Select Rating</option>
                  <option value="1">1 Star</option>
                  <option value="2">2 Stars</option>
                  <option value="3">3 Stars</option>
                  <option value="4">4 Stars</option>
                  <option value="5">5 Stars</option>
                </select>
              </div>

              <div className="filterGroup">
                <label>
                  <input
                    type="checkbox"
                    name="freeCancellation"
                    checked={formData.freeCancellation}
                    onChange={handleInputChange}
                  />
                  Free Cancellation
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="breakfastIncluded"
                    checked={formData.breakfastIncluded}
                    onChange={handleInputChange}
                  />
                  Breakfast Included
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="petFriendly"
                    checked={formData.petFriendly}
                    onChange={handleInputChange}
                  />
                  Pet Friendly
                </label>
              </div>
            </div>
          )}

          {/* Error Message */}
          {errorMessage && <p className="errorMessage">{errorMessage}</p>}

          {/* Submit Button */}
          <div className="submitSection">
            <button type="submit" className="submitButton">Submit</button>
          </div>
        </form>

        {/* Footer Icons */}
        <div data-aos="fade-up" className="homeFooterIcons flex">
          <div className="rightIcons">
            <FiFacebook className="icon" />
            <FaInstagram className="icon" />
            <FaTripadvisor className="icon" />
          </div>
          <div className="leftIcons">
            <FaListUl className="icon" />
            <TbApps className="icon" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
