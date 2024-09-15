import React from 'react';
import './Navbar.css';
import { assests } from '../../assests/assests';

const Navbar = () => {
  return (
    <div className='Navbar'>
      <img src={assests.logo} alt="Govardhan Dairy Farm" className='logo' />
      <ul className="navbar-menu">
        <li>Home</li>
        <li>Products</li>
        <li>About us</li>
        <li>Blog</li>
        <li>Contact us</li>
      </ul>

      <div className='Navbar-right'>
        <img src={assests.search} alt='Search_icon' className='searchimg' />
        <div className="navbar-search">
          <img src={assests.basket} alt='basket' className='basketimg' />
        </div>
        <button className='signin'>Sign in</button>
      </div>
    </div>
  );
};

export default Navbar;
