import React, {Component} from 'react';
import './css/Navbar.css';

class Navbar extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <div className="navbar">
        <h1>Tap Room</h1>
      </div>
    );
  }
}

export default Navbar;
