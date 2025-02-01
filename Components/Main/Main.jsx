import React,{useEffect} from 'react';
import './main.css';
import img from '../../Assets/img.jpg';
import img1 from '../../Assets/img1.jpg';
import img2 from '../../Assets/img2.jpg';
import img3 from '../../Assets/img3.jpg';
import img5 from '../../Assets/img5.jpg';
import img6 from '../../Assets/img6.jpg';
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FiClipboard } from "react-icons/fi";

import Aos from 'aos';
import 'aos/dist/aos.css';

const Data = [
  {
    id: 1,
    location: "Paris, France",
    destTitle: "Eiffel Tower",
    imgSrc: img,
    grade: "Luxury",
    fees: "$2500",
    description: "Experience the beauty of Paris and visit the iconic Eiffel Tower with stunning city views."
  },
  {
    id: 2,
    location: "Kyoto, Japan",
    destTitle: "Arashiyama Bamboo Grove",
    imgSrc: img1,
    grade: "Cultural",
    fees: "$1800",
    description: "Explore the serene bamboo forest and traditional temples in the historic city of Kyoto."
  },
  {
    id: 3,
    location: "Cape Town, South Africa",
    destTitle: "Table Mountain",
    imgSrc: img2,
    grade: "Adventure",
    fees: "$2200",
    description: "Hike or take a cable car up Table Mountain for breathtaking views of Cape Town."
  },
  {
    id: 4,
    location: "New York City, USA",
    destTitle: "Statue of Liberty",
    imgSrc: img3,
    grade: "Urban",
    fees: "$3000",
    description: "Discover the landmarks of NYC, including the Statue of Liberty, a symbol of freedom."
  },
  {
    id: 5,
    location: "Rome, Italy",
    destTitle: "Colosseum",
    imgSrc: img5,
    grade: "Historical",
    fees: "$2000",
    description: "Walk through history as you visit the ancient Colosseum, a marvel of Roman engineering."
  },
  {
    id: 6,
    location: "Sydney, Australia",
    destTitle: "Sydney Opera House",
    imgSrc: img6,
    grade: "Luxury",
    fees: "$2700",
    description: "Enjoy a performance or tour the world-famous Sydney Opera House, an architectural masterpiece."
  }
];

const Main = () => {
  return (
    <section className="main container section">
      <div className="secTitle">
        <h3 data-aos="fade-right" className="title">Most Visited Destinations</h3>
      </div>

      <div data-aos="fade-up"  className="setContent grid">
        {Data.map(({ id, location, destTitle, imgSrc, grade, fees, description }) => {
          return (
            <div key={id} className="singleDestination">
              {/* Image Section */}
              <div className="imgDiv">
                <img src={imgSrc} alt={destTitle} />
              </div>

              {/* Card Information */}
              <div className="cardInfo">
                <h4 className="destTitle">{destTitle}</h4>
                <span className="content flex">
                  <HiOutlineLocationMarker className="icon" />
                  <span className="name">{location}</span>
                </span>

                <div className="fees flex">
                  <div className="grade">
                    <span>
                      {grade}
                      <small>+1</small>
                    </span>
                  </div>
                  <div className="price">
                    <h5>{fees}</h5>
                  </div>
                </div>

                {/* Description */}
                <div className="desc">
                  <p>{description}</p>
                </div>

                {/* Details Button */}
                <button className="btn flex">
                  DETAILS <FiClipboard className="icon" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Main;