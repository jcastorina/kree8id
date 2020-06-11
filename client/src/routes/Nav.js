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
    <h3>Logo</h3>
    <ul className="nav-links">
        <Link style={navStyle} to="/about">
          <li>About</li>
        </Link>
        <Link style={navStyle} to="/catalog">
          <li>Catalog</li>
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