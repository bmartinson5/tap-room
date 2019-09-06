import React, {Component} from 'react';
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
            Add Keg
          </div>
        </div>

      </div>
    );
  }
}

export default Navbar;
