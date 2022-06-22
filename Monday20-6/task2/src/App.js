import React, { Component } from "react";
import './App.css';
import Data from './Data.js';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Data name="Dyar" discription="is one of the best student in the cohort"
          likes="Number of Likes"/>
        <Data name="majd" discription="is one of the best student in the cohort"
          likes="Number of Likes"/>
        <Data name="orange" discription="is one of the best student in the cohort"
          likes="Number of Likes"/>
        <Data name="Dyar" discription="is one of the best student in the cohort"
          likes="Number of Likes"/>
      </div>
    );
  };
}
export default App;

