import React, {Component} from 'react';
import Keg from './Keg.js'
import KegPage from './KegPage.js'
import './css/Keg.css';

export default class KegList extends Component {
  constructor(props){
    super(props)
    this.kegList = [
      {
        name: "Hazy IPA",
        brand: "Deschuttes",
        volume: 100,
        ibu: 55,
        abv: 6.2,
        price: 4.50
      },
      {
        name: "Rainier",
        brand: "Rainier",
        volume: 100,
        ibu: 20,
        abv: 4.5,
        price: 2.50
      },
      {
        name: "Summer Pilz",
        brand: "Pfriem",
        volume: 85,
        ibu: 27,
        abv: 5.5,
        price: 3.99
      },
      {
        name: "Hop Stoopid",
        brand: "Lagunitas",
        volume: 95,
        ibu: 76,
        abv: 8.2,
        price: 5.00
      },
      {
        name: "Trail Beer",
        brand: "Deschuttes",
        volume: 100,
        ibu: 45,
        abv: 5.0,
        price: 4.00
      }
    ]

    this.state = {
      kegList: this.kegList,
      kegPage: false,
      currentKeg: 0
    }
  }

  handleClick = (kegNumber) => {
    console.log(kegNumber, this.state.kegList[kegNumber]);
    this.setState({
      kegPage: true,
      currentKeg: kegNumber
    })
  }

  showKegs = () => {
    this.setState({
      kegPage: false
    })
  }

  changeVolume = (sellNumber, kegNumber) => {
    const newKegList = this.state.kegList
    newKegList[kegNumber].volume -= sellNumber * 5;
    if(newKegList[kegNumber].volume < 0) newKegList[kegNumber].volume = 0
    console.log(newKegList[kegNumber].volume);
    this.setState({
      kegList: newKegList
    })

  }

  render(){
    const {kegList, kegPage, currentKeg} = this.state;
    if(kegPage){
      return (
        <KegPage
            info={kegList[currentKeg]}
            kegNumber={currentKeg}
            changeVolume={this.changeVolume}
            showKegs={this.showKegs}
          />
      )
    }

    return (
      <div className="keg-list" >

        {kegList.map((keg, index) => (
            <Keg key={index} info={keg} kegNumber={index+1} callback={this.handleClick}/>
        ))}
      </div>
    );
  }
}
