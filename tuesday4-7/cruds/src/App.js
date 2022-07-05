//------------------Read--------------------
// import React from "react";
// import axios from "axios";

// class App extends React.Component {
//     state = {
//         persons: [],
//     }
    
    
//       componentDidMount() {
//         axios.get(`http://localhost/react-tasks/tuesday4-7/cruds/api/read.php`)
//           .then(res => {
//             // const persons = res.data;
//             this.setState({persons: res.data });
//           })

         
//       }


//       render() {
//         // const{persons}=this.state
       

//         const per=this.state.persons;
//         return (
//             <>
         
//           {per.map((person)=>(
//             <div>
//             <h1>{person.name}</h1>
//             <h1>{person.email}</h1>
//             </div>
//           ))}
//          </>
//         )
//       }
//     }
 
// export default App;


//------------------Create--------------------
// import React from 'react';
// import axios from 'axios';

// export default class App extends React.Component {
//   state = {
//     name: '',
//     email: '',
//     age: ''
//   }

//   handleChange = event => {
//     this.setState({ name: event.target.value });
//   }

//   handleSubmit = event => {
//     event.preventDefault();

//     const user = {
//       name: this.state.name,
//       email: this.state.email,
//       age: this.state.age,
//     };

//     axios.post(`http://localhost/react-tasks/tuesday4-7/cruds/api/create.php`, { user })
//       .then(res => {
//         console.log(res);
//         console.log(res.data);
//       })
//   }

//  create = ()=>{
//     axios.get(`http://localhost/react-tasks/tuesday4-7/cruds/api/create.php?name=${this.state.name}&email=${this.state.email}&age=${this.state.age}`)
    
//     }

//   render() {
//     return (
//       <div>
//         <form onSubmit={this.create}>
//           <label>
//             Person Name:
//             <input type="text" name="name" onChange={(e)=>this.setState({ name: e.target.value })} />
//           </label>
//           <label>
//             email:
//             <input type="text" name="email" onChange={(e)=>this.setState({ email: e.target.value })} />
//           </label>
//           <label>
//             Age:
//             <input type="text" name="age" onChange={(e)=>this.setState({ age: e.target.value })} />
//           </label>
//           <button type="submit">Add</button>
//         </form>
//       </div>
//     )
//   }
// }


//------------------Update--------------------
import React from 'react';
import axios from 'axios';

export default class App extends React.Component {
  state = {
    id:'',
    name: '',
    email: '',
    age: ''
  }


 Update = ()=>{
    axios.get(`http://localhost/react-tasks/tuesday4-7/cruds/api/update.php?name=${this.state.name}&email=${this.state.email}&age=${this.state.age}&id=${this.state.id}`)
    
    }

  render() {
    return (
      <div>
        <form onSubmit={this.Update}>
        <label>
            Person ID:
            <input type="text" name="id" onChange={(e)=>this.setState({ id: e.target.value })} />
          </label>
          <label>
            Person Name:
            <input type="text" name="name" onChange={(e)=>this.setState({ name: e.target.value })} />
          </label>
          <label>
            email:
            <input type="text" name="email" onChange={(e)=>this.setState({ email: e.target.value })} />
          </label>
          <label>
            Age:
            <input type="text" name="age" onChange={(e)=>this.setState({ age: e.target.value })} />
          </label>
          <button type="submit">Update</button>
        </form>
      </div>
    )
  }
}


// ------------------Delete--------------------
// import React from 'react';
// import axios from 'axios';

// export default class App extends React.Component {
//   state = {
//     id:''
//   }


//  Delete = ()=>{
//     axios.get(`http://localhost/react-tasks/tuesday4-7/cruds/api/delete.php?id=${this.state.id}`)
    
//     }

//   render() {
//     return (
//       <div>
//         <form onSubmit={this.Delete}>
//         <label>
//             Person ID:
//             <input type="text" name="id" onChange={(e)=>this.setState({ id: e.target.value })} />
//           </label>
//           <button type="submit">Delete</button>
//         </form>
//       </div>
//     )
//   }
// }