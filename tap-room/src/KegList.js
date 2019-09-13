import React, {Component} from 'react';
import Keg from './Keg.js'
import KegPage from './KegPage.js'
import './css/Keg.css';

export default class KegList extends Component {
  constructor(props){
    super(props)
  }


  render(){
    const {kegList, handleClick, deleteKeg} = this.props;

    return (
      <div className="keg-list" >

        {kegList.map((keg, index) => (
            <Keg key={index} info={keg} kegNumber={index+1} deleteKeg={deleteKeg} callback={handleClick}/>
        ))}
      </div>
    );
  }
}
