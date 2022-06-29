import React from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Table from 'react-bootstrap/Table';
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
"http://api.openweathermap.org/data/2.5/forecast?id=524901&appid={f50c0b3dbe98a792fb23929dee04c30a}")
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
            <table className="striped bordered hover">
              <tr>
            <th>User Name</th>
            <th>Full Name</th>
            {/* <th>Email</th> */}
            </tr>
            { items.map((item) => (
             
            <tr key = { item.id }>
              <td>{ item.lat }</td>
              <td> { item.lon }</td> console.log(item.id);
              {/* <td> { item.email }</td> */}
            </tr>
                ) )
            }</table>
        </div>
    );
}
}
  
export default App;

