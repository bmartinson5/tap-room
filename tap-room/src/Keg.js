import React, {Component} from 'react';
import KegPic from './img/keg.jpg'
import {Link} from 'react-router-dom'
import './css/Keg.css';

export default class Keg extends Component {
  constructor(props){
    super(props)
  }

  render(){
    const { info, kegNumber, callback, key } = this.props
    return (
      <div className="keg-list-item"
        style={{
          background: "url(" + KegPic + ")",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}>
        <Link to="/Keg">
        <div className="beer-info" onClick={e => callback(kegNumber-1)}>
          <h2>
            {kegNumber}. {info.name}
          </h2>
          Brand: {info.brand}<br/>
          Volume: {info.volume}%<br/>
          IBU: {info.ibu} <br/>
          ABV: {info.abv}% <br/>
          Price: ${info.price}
        </div>
        </Link>
      </div>
    );
  }
}
