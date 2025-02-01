import React, { useState } from 'react';
import './packages.css';
import familybeach from '../../Assets/familybeach.jpg';
import singleMountain from '../../Assets/singleMountain.jpg';
import doubleSafari from '../../Assets/doubleSafari.jpg';
import familySafari from '../../Assets/familySafari.jpg';
import singleCity from '../../Assets/singleCity.jpg';
import dobleCity from '../../Assets/dobleCity.jpg';

const Packages = () => {
  const [category, setCategory] = useState('All');

  const travelPackages = [
    {
      id: 1,
      name: 'Family Beach Paradise',
      description: 'Enjoy a relaxing family getaway on the beach.',
      price: 1200,
      type: 'Family',
      image: familybeach,
    },
    {
      id: 2,
      name: 'Single Mountain Adventure',
      description: 'A solo journey into the majestic mountains.',
      price: 450,
      type: 'Single',
      image: singleMountain,
    },
    {
      id: 3,
      name: 'Double Safari Adventure',
      description: 'Explore the wildlife with a companion.',
      price: 1500,
      type: 'Double',
      image: doubleSafari,
    },
    {
      id: 4,
      name: 'Family Safari Adventure',
      description: 'Explore the wildlife with your loved ones.',
      price: 1600,
      type: 'Family',
      image: familySafari,
    },
    {
      id: 5,
      name: 'Single City Explorer',
      description: 'Dive into vibrant city life on your own.',
      price: 300,
      type: 'Single',
      image: singleCity,
    },
    {
      id: 6,
      name: 'Double City Getaway',
      description: 'Explore the city with a partner.',
      price: 600,
      type: 'Double',
      image: dobleCity,
    },
  ];

  const filteredPackages =
    category === 'All'
      ? travelPackages
      : travelPackages.filter((pkg) => pkg.type === category);

  return (
    <div className="packages">
      <div className="packagesHeader">
        <h1 className="packagesTitle">Travel Packages</h1>
        <p className="packagesSubtitle">Choose the perfect package for your needs.</p>
      </div>

      <div className="filterBar">
        <button
          onClick={() => setCategory('All')}
          className={category === 'All' ? 'active' : ''}
        >
          All Packages
        </button>
        <button
          onClick={() => setCategory('Family')}
          className={category === 'Family' ? 'active' : ''}
        >
          Family Packages
        </button>
        <button
          onClick={() => setCategory('Single')}
          className={category === 'Single' ? 'active' : ''}
        >
          Single Packages
        </button>
        <button
          onClick={() => setCategory('Double')}
          className={category === 'Double' ? 'active' : ''}
        >
          Double Packages
        </button>
      </div>

      <div className="packagesGrid">
        {filteredPackages.map((pkg) => (
          <div className="packageCard" key={pkg.id}>
            <img src={pkg.image} alt={pkg.name} className="packageImage" />
            <h3 className="packageName">{pkg.name}</h3>
            <p className="packageDescription">{pkg.description}</p>
            <p className="packagePrice">${pkg.price}</p>
            <button className="bookNowBtn">Book Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Packages;
