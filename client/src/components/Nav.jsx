import React, {Component} from 'react';
import '../styles/Nav.css';
import {Link} from 'react-router-dom'
import Bumper from './BumperComponent'
import Key from './KeyComponent'

class Nav extends Component {

  state = {}

  render() {

    const { loggedIn } = this.props

    const navStyle = {
      color: 'white'
    }
  
    const classy1 = {
      a: "a",
      b: "b",
      c: "c",
      d: "d",
      e: "e"
    }
  
    const classy2 = {
      a: "d",
      b: "e",
      c: "a",
      d: "c",
      e: "b"
    }

    return (
      <div>
        <Key 
          loggedIn = {loggedIn}
        />
        <Bumper classy={classy1} />
        <Bumper classy={classy2} />
        <nav>
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
              <Link style={navStyle} to="/register">
                <li>Register</li>
              </Link>
              <Link style={navStyle} to="/button">
                <li>Button</li>
              </Link>
              <Link style={navStyle} to="/logout">
                <li>Logout</li>
              </Link>
          </ul>
        </nav>  
      </div>
      );

  }
  
}

export default Nav;