import React from 'react';
class NameForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: '',yourname:''};
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    
  
    handleChange(event) { 
           this.setState({value: event.target.value}); 
         }
    handleSubmit(event) {
        // this.yourname = 'Your Name: ' + this.state.value;
    //   alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
      this.setState({yourname:event.target.value})
    }
  
    render() {
      return (
        <div>
        <form onClick={this.handleSubmit}>
          <label>
            Name:
            <input type="text" value={this.state.value} onChange={this.handleChange}/>
            </label>
          <input type="submit" name='' value="Submit"/>
        </form>
        <div>{this.state.yourname}</div>
        </div>
      );
    }
  }
  export default NameForm;