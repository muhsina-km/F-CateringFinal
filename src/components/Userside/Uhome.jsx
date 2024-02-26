import React from 'react';
import UserNavbar from './UserNavbar';
import { Link } from 'react-router-dom';

import harvestImage from './images/catering.png'; // Import the image for Harvest catering
import './home.css'; 

export const Uhome = () => {
  return (
    <div >
      <UserNavbar />
      <div className='homepage' >
        <img src={harvestImage} alt="Harvest Catering" className="harvest-image"  />
        <h1>Harvest catering</h1>
        <Link to="/order">
          <button className="order-button">Book your Order</button>
        </Link>
      </div>
    </div>
  );
};
