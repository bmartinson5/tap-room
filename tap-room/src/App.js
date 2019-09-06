import React from 'react';
import Navbar from './Navbar.js'
import KegList from './KegList.js'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AddKeg from './AddKeg.js'
import './css/App.css';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <div>
        <Navbar />
        <Switch>
          <Route exact path='/' component={KegList} />
          <Route exact path='/addKeg' component={AddKeg} />
        </Switch>
      </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
