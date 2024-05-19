import React, { useState } from 'react';
import './NavSection.css';

const NavSection = (props) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdownOpen1, setIsDropdownOpen1] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleDropdown1 = () => {
    setIsDropdownOpen1(!isDropdownOpen1);
  };

  return (
    <div>
      <div className="bg-img" style={{ backgroundImage: `url(${props.img})` }}>
        <div className="container">
          <div className="topnav">
            <a href="/">Home</a>
            <a href="/about">About</a>
            <div className="dropdown">
              <a href="#" onClick={toggleDropdown} className='domain'>Domain</a>
              {isDropdownOpen && (
                <div className="dropdown-content">
                  <a href="/domain">Domain</a>
                  <a href="/domain/pharma">Pharma</a>
                  <a href="/domain/welfare">Welfare</a>
                  <a href="/domain/defence">Defence</a>
                  <a href="/domain/logistics">Logistics</a>
                </div>
              )}
            </div>
            <div className="dropdown">
              <a href="#" onClick={toggleDropdown1}>Product</a>
              {isDropdownOpen1 && (
                <div className="dropdown-content">
                  <a href="/products/ev-l3">EV-L3</a>
                  <a href="/products/ev-l5">EV-L5</a>
                  <a href="/products/tcb">TCB</a>
                  <a href="/products/tcpb">TCPB</a>
                  <a href="/products/sscb">SSCB</a>
                  <a href="/products/smart-reefer">Smart-Reefer</a>
                </div>
              )}
            </div>
            <a href="/blog">Blog</a>
            <a href="#">Team</a>
            <a href="#">Pricing</a>
            <a href="/contact">Contact</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavSection;