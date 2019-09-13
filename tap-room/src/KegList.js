import React, {Component} from 'react';
import Keg from './Keg.js'
import KegPage from './KegPage.js'
import './css/Keg.css';

export default class KegList extends Component {
  constructor(props){
    super(props)
  }


  render(){
    const {kegList, kegPage, currentKeg, handleClick} = this.props;
    if(kegPage){
      return (
        <KegPage
            info={kegList[currentKeg]}
            kegNumber={currentKeg}
            changeVolume={this.changeVolume}
            showKegs={this.showKegs}
            changePrice={this.changePrice}
          />
      )
    }

    return (
      <div className="keg-list" >

        {kegList.map((keg, index) => (
            <Keg key={index} info={keg} kegNumber={index+1} callback={handleClick}/>
        ))}
      </div>
    );
  }
}
