import React, { Component } from 'react';
import Home from '../Home/Home';

class Form  extends Component {
  constructor(props){
    super(props);

    this.state={
        UserName:'',
        Email:'',
        Password:'',

        displayHome:true,
        displayForm:false,

    };

    this.handleChange= this.handleChange.bind(this);
    this.handleEmailChange= this.handleEmailChange.bind(this);
    this.handlePasswordChange= this.handlePasswordChange.bind(this);
    this.handleSubmit= this.handleSubmit.bind(this);

  }

  handleChange(event){
    this.setState({UserName:event.target.value}
        )
  }

  handleEmailChange(event){
    this.setState({Email:event.target.value})
  }

  handlePasswordChange(event){
    this.setState({Password:event.target.value})
  }

  handleSubmit(event){
    event.preventDefault();
    alert((this.state.UserName+''+this.state.Email+''+this.state.Password ));
    console.log(this.state.UserName,"submit");
    this.setState({
    displayHome:false,
    displayForm:true,
        
    })
    
  }
    render() { 
    console.log(this.state,"submit");

        return (
            <div className='container'>
                {!this.state.displayForm &&(
            <form>
                User Name:
               <input type="text" name='UserName' className='form-control' onChange={this.handleChange} /><br></br><br></br>
               Email:
               <input type="email"  name='Email' className='form-control'onChange={this.handleEmailChange}/><br></br><br></br>
               Password:
               <input type="password" name='Password' className='form-control' onChange={this.handlePasswordChange}/><br></br><br></br>

               <input type="submit" onClick={this.handleSubmit} />

            </form>
            )}

            {!this.state.displayHome && (
          <Home name={this.state.UserName} Email={this.state.Email} Password={this.state.Password}/>
          )}
            </div>
        );
    }
}
 
export default Form;