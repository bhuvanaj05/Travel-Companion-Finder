import React, { useState } from 'react';
import './navbar.css';
import { MdOutlineTravelExplore } from 'react-icons/md';
import { AiFillCloseSquare } from 'react-icons/ai';
import { TbGridDots } from 'react-icons/tb';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Navbar = () => {
  const [active, setActive] = useState('navBar');

  // Function to show the navBar
  const showNav = () => {
    setActive('navBar activeNavbar');
  };

  // Function to hide the navBar
  const hideNav = () => {
    setActive('navBar');
  };

  // Function to handle navigation click and closing the navbar
  const handleLinkClick = () => {
    hideNav();
  };

  return (
    <section className="navBarSection">
      <header className="header flex">
        <div className="logoDiv">
          <Link to="/" className="logo flex" onClick={handleLinkClick}> {/* Link to Home */}
            <h1>
              <MdOutlineTravelExplore className="icon" />
              Travel
            </h1>
          </Link>
        </div>
        <div className={active}>
          <ul className="navLists flex">
            {['/', '/packages', '/shop', '/about', '/pages', '/news', '/contact'].map((path, index) => (
              <li className="navItem" key={index}>
                <Link to={path} className="navLink" onClick={handleLinkClick}>
                  {path === '/' ? 'Home' : path.replace('/', '').charAt(0).toUpperCase() + path.slice(2)}
                </Link>
              </li>
            ))}
            <button className="navItem">
              <Link to="/book-now" className="navLink" onClick={handleLinkClick}>BOOK NOW</Link> {/* Link to Book Now page */}
            </button>
          </ul>
          <div onClick={hideNav} className="closeNavbar">
            <AiFillCloseSquare className="icon" />
          </div>
        </div>
        <div onClick={showNav} className="toggleNavbar">
          <TbGridDots className="icon" />
        </div>
      </header>
    </section>
  );
};

export default Navbar;
