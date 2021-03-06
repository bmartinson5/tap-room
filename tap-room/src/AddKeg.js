import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import KegPic from './img/keg.jpg'
import './css/Keg.css';

export default class AddKeg extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: "",
      brand: "",
      ibu: "",
      abv: "",
      price: "",
      volume: 100
    }
  }

  handleClick = () => {
    console.log('here');
  }

  handleChange = (evt) => {
    this.setState({[evt.target.name]: evt.target.value });
  }


  render(){
    const { info, kegNumber } = this.props
    return (
      <div className="keg-container-form"
        style={{
          background: "url(" + KegPic + ")",
          backgroundPosition: "center",
        }}>


        <div className="add-keg-form">
         <h1>Add A Keg</h1>

         <input type="text" value={this.state.name} name="name" onChange={this.handleChange}placeholder="name" /><br/>
         <br/>
         <input type="text" value={this.state.brand} name="brand" onChange={this.handleChange} placeholder="brand"/><br/>
         <br/>
         <input type="number" value={this.state.ibu} name="ibu" onChange={this.handleChange} placeholder="ibu"/><br/>
         <br/>
         <input type="number" value={this.state.abv} name="abv" onChange={this.handleChange} placeholder="abv"/><br/>
         <br/>
         <input type="number" value={this.state.price} name="price" onChange={this.handleChange} placeholder="price"/><br/>
         <br/>
         <Link to="/"><button onClick={() => this.props.addKeg(this.state)}>Add</button></Link><br/>
         <Link to="/">Cancel</Link>
        </div>
      </div>
    );
  }
}
