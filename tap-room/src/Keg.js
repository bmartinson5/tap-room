import React, {Component} from 'react';
import './css/Navbar.css';

export default class Keg extends Component {
  constructor(props){
    super(props)
  }

  render(){
    const { info, kegNumber } = this.props
    return (
      <div className="App">
        <h2>
          {kegNumber} {info.name}
        </h2>
      </div>
    );
  }
}
