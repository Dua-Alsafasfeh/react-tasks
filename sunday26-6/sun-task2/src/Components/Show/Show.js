import React, { Component } from 'react';


class Show extends Component {
    state = {  } 
    render() { 
        return (
            <div>
            <h1> Data in diffrent Component value: {this.props.value}</h1>
            </div>
        );
    }
}
 
export default Show;