import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import './css/Navbar.css';

class Navbar extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <div className="navbar">
        <div className="navbar-items">
          <Link to="/" style={{ textDecoration: 'none' }}>
          <div className="logo">
            Tap Room
          </div>
          </Link>
          <div className="navbar-item">
            <Link to="/addKeg"style={{ textDecoration: 'none' }}>Add Keg</Link>
          </div>
          <div className="navbar-item">
            <Link to="/filterKeg" style={{ textDecoration: 'none' }}>Filter Kegs</Link>
          </div>
          <div className="navbar-item">
            Sign In
          </div>
        </div>

      </div>
    );
  }
}

export default Navbar;
