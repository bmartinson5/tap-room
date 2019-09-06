import React, {Component} from 'react';
import KegPic from './img/keg.jpg'
import './css/Keg.css';

export default class AddKeg extends Component {
  constructor(props){
    super(props)
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
      <div className="add-keg-form">
       <h1>Add A Keg</h1>

       <input type="text" name="name" onChange={this.handleChange}placeholder="name" /><br/>
       <br/>
       <input type="text" name="brand" onChange={this.handleChange} placeholder="brand"/><br/>
       <br/>
       <input type="number" name="ibu" onChange={this.handleChange} placeholder="ibu"/><br/>
       <br/>
       <input type="number" name="abv" onChange={this.handleChange} placeholder="abv"/><br/>
       <br/>
       <input type="number" name="price" onChange={this.handleChange} placeholder="price"/><br/>
       <br/>
       <button onClick={this.props.callback}>Add! </button>
      </div>
    );
  }
}
