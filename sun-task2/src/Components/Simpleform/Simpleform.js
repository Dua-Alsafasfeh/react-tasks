// import React from 'react'
// class SimpleForm extends React.Component{
// constructor(props){
// super(props);
// this.state = {
// first_name:null,
// last_name:null,
// email:null,
// city:null,
// address:null,
// gender:null,
// hobbies:[]
// }
// this.handleInputChange = this.handleInputChange.bind(this);
// }
// handleInputChange(event) {
// const target = event.target;
// var value = target.value;
// const name = target.name;
// if(target.type === 'checkbox'){
// if(target.checked){
// this.state.hobbies.value = value;   
// }else{
// this.state.hobbies.splice(value, 1);
// }
// }else{
// this.setState({
// [name]: value
// });
// }   
// }
// submit(){
// console.warn(this.state)
// }
// render(){
// return(
// <div>
// <div className="row">
// <div className="col-md-6 offset-md-3">
// <br /><br />
// <h3>Register Form</h3><br />
// <form>
// <div className="form-row">
// <div className="form-group col-md-6">
// <label>First Name :</label>
// <input type="text" className="form-control" name="first_name" onChange={this.handleInputChange} />
// </div>
// <div className="form-group col-md-6">
// <label>Last Name :</label>
// <input type="text" className="form-control" name="last_name" onChange={this.handleInputChange} />
// </div>
// </div>
// <div className="form-row">
// <div className="form-group col-md-6">
// <label>Email :</label>
// <input type="email" className="form-control" name="email" onChange={this.handleInputChange} />
// </div>
// <div className="form-group col-md-6">
// <label>City :</label>
// <select className="form-control" name="city" onChange={this.handleInputChange}>
// <option selected>Select City</option>
// <option value="1">city 1</option>
// <option value="2">city 2</option>
// <option value="3">city 3</option>
// </select>
// </div>
// </div>
// <div className="form-row">
// <div className="form-group col-md-6">
// <label>Gender :</label><br />
// <div className="form-check form-check-inline">
// <input className="form-check-input" type="radio" name="gender" id="inlineRadiom" value="male" checked={this.state.gender === "male"} onChange={this.handleInputChange} />
// <label className="form-check-label" for="inlineRadiom">Male</label>
// </div>
// <div className="form-check form-check-inline">
// <input className="form-check-input" type="radio" name="gender" id="inlineRadiof" value="female" checked={this.state.gender === "female"} onChange={this.handleInputChange} />
// <label className="form-check-label" for="inlineRadiof">Female</label>
// </div>
// </div>
// <div className="form-group col-md-6">
// <label>Hobbies :</label><br />
// <div className="form-check form-check-inline">
// <input className="form-check-input" type="checkbox" name="hobbies" id="inlineCheckboxh1" value="1" onChange={this.handleInputChange} />
// <label className="form-check-label" for="inlineCheckboxh1">Reading</label>
// </div>
// <div className="form-check form-check-inline">
// <input className="form-check-input" type="checkbox" name="hobbies" id="inlineCheckboxh2" value="2" onChange={this.handleInputChange} />
// <label className="form-check-label" for="inlineCheckboxh2">Developing</label>
// </div>
// <div className="form-check form-check-inline">
// <input className="form-check-input" type="checkbox" name="hobbies" id="inlineCheckboxh3" value="3" onChange={this.handleInputChange} />
// <label className="form-check-label" for="inlineCheckboxh3">Desiging</label>
// </div>
// </div>
// </div>
// <div className="form-row">
// <div className="form-group col-md-12">
// <label>Address :</label>
// <textarea name="address" className="form-control" onChange={this.handleInputChange} />
// </div>
// </div>
// <div className="form-row">
// <div className="col-md-12 text-center">
// <button type="submit" className="btn btn-primary" onClick={()=>this.submit()}>Submit</button>
// </div>
// </div>
// </form>
// </div>
// </div>
// </div>
// )  
// }
// }
// export default SimpleForm;