import React, { Component } from 'react';
// import Form from './Form';

class Table extends Component {
    // state = {  } 
    render() { 
        // console.log(this.props.name,"this.props.name");
        return (
            <table>
                <tr>
                    <th> Name</th>
                    <th>Age</th>
                    </tr>
                <tr>
                    <td>{this.props.name}</td>
                    <td>{this.props.Age}</td>
                </tr>
            </table>
        );
    }
}
 
export default Table;