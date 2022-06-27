import React from 'react';
import FlavorForm from './Components/Form/Form';
import NameForm from './Components/Nameform/Nameform';
import Newform from './Components/Newform/Newform';
import Home from './Components/Home/Home';
import './App.css';

function App() {
  return (
    <div className="App">
      <FlavorForm/>
      <hr/>
      <NameForm/>
      <hr/>
      <div>  
      <h2>How to Get Form Values On Submit in React JS</h2>
    </div>
    <hr/>
    <Newform/>
    <hr/>
    <Home/>
    </div>
  );
}

export default App;
