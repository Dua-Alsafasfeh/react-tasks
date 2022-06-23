import React, { Component } from 'react';

class Maping extends Component {
    constructor(props){
        super(props);
        this.state={
            Fruits :[
                {id: 1 , name: "Apple",  color: "Yellow"},
                {id: 2 , name: "Strawberry", color: "Red"},
                {id: 3 , name: "Kiwi", color: "Green"}
              ]  
        }
    }
    render() { 
        return (
            <div>
            <h1>Task2 :</h1>
            <table class="table table-bordered table-warning">
                <tr>
                    <td>
                        ID
                    </td>
                    <td>
                        Name
                    </td>
                    <td>
                        Color
                    </td>
                </tr>
               
                {this.state.Fruits.map((member, index) =>(
                    <tr key={index.id}>
                <td>{member.id}</td>
                <td>{member.name}</td>
                <td>{member.color}</td>
                </tr>
                
            ))}
            </table>
            </div>
        );
    }
}
 
export default Maping;