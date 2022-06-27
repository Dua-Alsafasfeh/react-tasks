import React from 'react';
class FlavorForm extends React.Component {
  constructor(props) {
    super(props);
   
    this.state = { value: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  // state={form1:''};
  handleChange(event) 
  { 
    this.setState({ value: event.target.value });
   }
  handleSubmit(event) {
    this.form1 ='Your favorite flavor is: ' + this.state.value;
    // alert('Your favorite flavor is: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div>
      <form onClick={this.handleSubmit}>
        <label>
          Pick your favorite flavor:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
      <div>{this.form1}</div>
      </div>
    );
  }
}
export default FlavorForm; 