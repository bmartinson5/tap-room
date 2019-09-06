import React, {Component} from 'react';
import KegPic from './img/keg.jpg'
import './css/Keg.css';

export default class Keg extends Component {
  constructor(props){
    super(props)
  }


  render(){
    const { info, kegNumber } = this.props
    return (
      <div className="keg-info" onClick={this.handleClick}>
        <h2>
          {info.name}
        </h2>
        Brand: {info.brand}<br/>
        Volume: {info.volume}%<br/>
        IBU: {info.ibu} <br/>
        ABV: {info.abv}% <br/>
        Price: ${info.price}
      </div>
    );
  }
}
