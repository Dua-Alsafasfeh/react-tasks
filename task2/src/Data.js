import React from "react";
import './App.css';

const Data= props=>{
    return (
        <div className="parent"> 
            <div className="card">{props.name}</div>
            <div className="card">{props.discription}</div>
            <div className="card">{props.likes}</div>
        </div>
    );
}
export default Data;
