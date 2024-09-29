import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container navbar-content">
        <div className="navbar-logo">
          <Link to="/">CasaCurate</Link>
        </div>
        <ul className="navbar-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/quiz">Style Quiz</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/orders">Orders</Link></li>
          <li><Link to="/wishlist">Wishlist</Link></li>
          <li><Link to="/cart">Cart</Link></li>
          <li><Link to="/login">Login/Signup</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
