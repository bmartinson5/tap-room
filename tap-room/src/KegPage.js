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
      <div>
      <div className="keg-container"
        style={{
          background: "url(" + KegPic + ")",
          backgroundPosition: "center",
        }}>

        <div className="kegpage-info">
        <h2>
          {info.name}
        </h2>
          Brand: {info.brand}<br/><br/>
          Volume: {info.volume}%<br/><br/>
          IBU: {info.ibu} <br/><br/>
          ABV: {info.abv}% <br/><br/>
          Price: ${info.price}
        </div>
      </div>
        <div className="edit-info">
          <p>Sell Pint(s) (enter #)</p>
          <input onChange={this.handleChange}/>
          <button >Sell</button><br/><br/>
          <p>Change Price</p>
          <button >Increase (+$0.50)</button>
          <button >Decrease (-$0.50)</button>
        </div>
      </div>
    );
  }
}
