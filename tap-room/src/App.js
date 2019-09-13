import React from 'react';
import Navbar from './Navbar.js'
import KegList from './KegList.js'
import KegPage from './KegPage.js'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AddKeg from './AddKeg.js'
import './css/App.css';

class App extends React.Component{
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

  handleKegSelect = (kegNumber) => {
    console.log('got to click');
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

  addKeg = (keg) => {
    const newKegList = this.state.kegList.slice()
    newKegList.push(keg)
    this.setState({
      kegList: newKegList
    })
  }

  changePrice = (amount, kegNumber) => {
    console.log('here', amount, kegNumber);

    const newKegList = this.state.kegList.slice()
    newKegList[kegNumber].price += amount;
    if(newKegList[kegNumber].price < 0) newKegList[kegNumber].price = 0
    this.setState({
      kegList: newKegList
    })
  }

  changeVolume = (sellNumber, kegNumber) => {
    const newKegList = this.state.kegList
    newKegList[kegNumber].volume -= sellNumber * 5;
    if(newKegList[kegNumber].volume < 0) newKegList[kegNumber].volume = 0
    this.setState({
      kegList: newKegList
    })

  }
  render(){
    return (
      <div className="App">
      <BrowserRouter>
        <div>
          <Navbar />
          <Switch>
            <Route exact path='/' render={()=><KegList
                                                  kegList={this.state.kegList}
                                                  handleClick={this.handleKegSelect}
                                                  />} />
            <Route exact path='/Keg' render={()=><KegPage
                                                  kegNumber={this.state.currentKeg}
                                                  info={this.state.kegList[this.state.currentKeg]}
                                                  changeVolume={this.changeVolume}
                                                  changePrice={this.changePrice}
                                                  />} />
            <Route exact path='/addKeg' render={()=><AddKeg addKeg={this.addKeg}/>} />

          </Switch>
        </div>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;
