//--------------class component (without hooks)--------------
import React, { Component } from 'react';

class Soso extends Component {
 constructor(props){
    super(props);
    this.state={
        count:0
    }

    this.increse=this.increse.bind(this)
 }
 increse(){
    this.setState({count:this.state.count+1})
 }
    render() { 
        return (
            <div>
                <p>{this.state.count}</p>
                <button onClick={this.increse}>click</button>
            </div>
        );
    }
}
 
export default Soso;