import React, { Component } from 'react';

class Sortarr extends Component {
    constructor(props){
        super(props);
        this.state={
            Arr:[5 ,-2 , 23 , 7, 87, -42, 509 ] 
        }
    }
    render() { 
        return (
            <div>
                <h1>Task1 :</h1>
              <h4>The original array is : {this.state.Arr.join(", ")}</h4>  
              <h4>The Sorted array is : {this.state.Arr.sort((a,b) => a> b ? 1:-1).join(", ")}</h4>  
            </div>
        );
    }
}
 
export default Sortarr;
