import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
constructor(props){
  super(props);
this.state={
  item:[],
  isloaded:false,
}}

componentDidMount(){

  axios.get('http://localhost/react-tasks/thursday30-6/server/read.php')
  .then(res=>this.setState({item:res.data , isloaded:true}));
  console.log(this.state.item,"item");
}

  render() { 
    const{item , isloaded} = this.state;

    return (
      <>
      <u>
        <li>{JSON.stringify(item)}</li>
      </u>
      {/* {item.map((raghad)=>
      
      <ul key={raghad.id}>
        <li>{raghad.name}</li>
        <li>{raghad.email}</li>
      </ul>
      )} */}
      </>
    );
  }
}


export default App;