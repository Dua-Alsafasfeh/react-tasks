import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import './App.css';
class App extends React.Component {
   
    // Constructor 
    constructor(props) {
        super(props);
   
        this.state = {
            items: [],
            DataisLoaded: false
        };
    }
   
    // ComponentDidMount is used to
    // execute the code 
    componentDidMount() {
        fetch(
"https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    items: json,
                    DataisLoaded: true
                });
            })
    }
    render() {
        const { DataisLoaded, items } = this.state;
        if (!DataisLoaded) return <div>
            <h1> Pleses wait some time.... </h1> </div> ;
   
        return (
        <div className = "App">
            <h1> Fetch data from an api in react </h1>
            <Table className="striped bordered hover">
              <tr>
            <th>User Name</th>
            <th>Full Name</th>
            <th>Email</th>
            </tr>
            { items.map((item) => (
            <tr key = { item.id }>
              <td>{ item.username }</td>
              <td> { item.name }</td>
              <td> { item.email }</td>
            </tr>
                ) )
            }</Table>
        </div>
    );
}
}
  
export default App;
