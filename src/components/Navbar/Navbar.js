import React from 'react';
import "./Navbar.css";
import { Icon } from '@iconify/react';

const Navbar = () => {
  return (
    <>
      <nav class="navbar">
        <div class="navbar-container container">
          <input type="checkbox" name="" id=""/>
            <div class="hamburger-lines">
              <span class="line line1"></span>
              <span class="line line2"></span>
              <span class="line line3"></span>
            </div>
            
           
            <img className='logo' src="https://www.dnavr.co.uk/img/logo.png" alt="" />
            
           
      
            <ul class="menu-items text-uppercase text-bold">
            
              <li><a href="#home">Home</a></li>
              <li><a href="#about">Events</a></li>
              <li><a href="#food">games</a></li>
              <li><a href="#food-menu">FAQ</a></li>
              <li><a href="#contact">Price</a></li>
            <li><Icon icon="fa-solid:search" width="28" /></li>
             <li><a className=' book-button' href="#contact">Book now</a></li>
            
            </ul>
         
        

            
            
        </div>
      </nav>

    </>
  );
};

export default Navbar;