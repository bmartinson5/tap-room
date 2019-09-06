import React from 'react';
import Navbar from './Navbar.js'
import KegList from './KegList.js'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AddKeg from './AddKeg.js'
import './css/App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Switch>
          <Route path='/' component={KegList} />
          <Route path='/addKeg' component={AddKeg} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
