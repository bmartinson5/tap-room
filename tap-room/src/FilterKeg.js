import React, {Component} from 'react';
import Keg from './Keg.js'
import KegPage from './KegPage.js'
import './css/Keg.css';

export default class KegList extends Component {
  constructor(props){
    super(props)
    this.state = {
      byName: "",
      byBrand: "",
      byMinAbv: "",
      byMaxAbv: ""
    }
  }

  handleChange = (evt) => {
    this.setState({[evt.target.name]: evt.target.value });
  }

  filterList = (kegList) => {
    let filteredKegList = kegList.filter(keg =>
      keg.name.toLowerCase().includes(this.state.byName.toLowerCase()) &&
      keg.brand.toLowerCase().includes(this.state.byBrand.toLowerCase())
    )

    if(this.state.byMinAbv !== ""){
      filteredKegList = kegList.filter(keg => keg.abv >= parseFloat(this.state.byMinAbv))
    }
    if(this.state.byMaxAbv !== ""){
      filteredKegList = kegList.filter(keg => keg.abv <= parseFloat(this.state.byMaxAbv))
    }
    return filteredKegList
  }


  render(){
    const {kegList, handleClick} = this.props;

    const filteredKegList = this.filterList(kegList)

    return (
      <div>
        <div className="filter-info">
          <h2>Filter by</h2>
          Name: <input type="text" value={this.state.byName} name="byName" onChange={this.handleChange}placeholder="name" /><br/>
          <br/>
          Brand: <input type="text" value={this.state.byBrand} name="byBrand" onChange={this.handleChange} placeholder="brand"/><br/>
          <br/>
          Min abv: <input type="number" value={this.state.byMinAbv} name="byMinAbv" onChange={this.handleChange} placeholder="Min abv"/><br/>
          <br/>
          Max abv: <input type="number" value={this.state.byMaxAbv} name="byMaxAbv" onChange={this.handleChange} placeholder="Max abv"/><br/>
          <br/>

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
