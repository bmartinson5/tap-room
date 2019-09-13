import React, {Component} from 'react';
import Keg from './Keg.js'
import KegPage from './KegPage.js'
import './css/Keg.css';

export default class KegList extends Component {
  constructor(props){
    super(props)
    this.state = {
      byName: "",
      byBrand: ""
    }
  }

  handleChange = (evt) => {
    this.setState({[evt.target.name]: evt.target.value });
  }


  render(){
    const {kegList, handleClick} = this.props;
    const filteredKegList = kegList.filter(keg => keg.name.toLowerCase().includes(this.state.byName.toLowerCase()))
    console.log('filteredList', filteredKegList);

    return (
      <div>
        <div className="filter-info">
          <h2>Filter by</h2>
          <input type="text" value={this.state.byName} name="byName" onChange={this.handleChange}placeholder="name" /><br/>
          <br/>
          <input type="text" value={this.state.byBrand} name="byBrand" onChange={this.handleChange} placeholder="brand"/><br/>

        </div>
        <div className="keg-list" >

          {filteredKegList.map((keg, index) => (
              <Keg key={index} info={keg} kegNumber={index+1} callback={handleClick}/>
          ))}
        </div>
      </div>
    );
  }
}
