import React from 'react';
import '../styles/Nav.css';
import {Link} from 'react-router-dom'


function Nav() {

  const navStyle = {
    color: 'white'
  }
  return (
    <div>
<nav>
    <h3>kree8id</h3>
    <ul className="nav-links">
        <Link style={navStyle} to="/feed">
          <li>Feed</li>
        </Link>
        <Link style={navStyle} to="/catalog">
          <li>Catalog</li>
        </Link>
        <Link style={navStyle} to="/upload">
          <li>Upload</li>
        </Link>
        <Link style={navStyle} to="/profile">
          <li>Profile</li>
        </Link>
        <Link style={navStyle} to="/search">
          <li>Search</li>
        </Link>
        <Link style={navStyle} to="/login">
          <li>Login</li>
        </Link>
        <Link style={navStyle} to="/register">
          <li>Register</li>
        </Link>
        <Link style={navStyle} to="/logout">
          <li>Logout</li>
        </Link>
    </ul>
</nav>
    </div>
  );
}

export default Nav;