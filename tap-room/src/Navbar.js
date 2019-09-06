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
          <div className="logo">
            Tap Room
          </div>
          <div className="navbar-item">
            <Link to="/addKeg">Add Keg</Link>
          </div>
          <div className="navbar-item">
            Filter Kegs
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
