import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
 
class Update extends React.Component {
  constructor(props) {
    super(props);
    this.state = {id: '', name: '', email: '', city:'', country:'', job:''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
 
  componentDidMount() {
    axios.get('http://localhost/react-tasks/crud/crudphp/contacts.php/?id=' + this.props.match.params.id)
    .then(response => response.data)
    .then((data) => {
      // handle success
      console.log(data);
      this.setState({ id: data.id, name: data.name, email: data.email, city: data.city, country: data.country, job: data.job })
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
     
  }
 
  handleChange(event) {
      const state = this.state
      state[event.target.name] = event.target.value
      this.setState(state);
  }
 
  handleSubmit(event) {
      event.preventDefault();
 
      let formData = new FormData();
      formData.append('name', this.state.name)
      formData.append('email', this.state.email)
      formData.append('city', this.state.city)
      formData.append('country', this.state.country)
      formData.append('job', this.state.job)
 
      axios({
          method: 'post',
          url: 'http://localhost/react-tasks/crud/crudphp/contacts.php/?id=' + this.props.match.params.id,
          data: formData,
          config: { headers: {'Content-Type': 'multipart/form-data' }}
      })
      .then(function (response) {
          //handle success
          console.log(response)
          if(response.status === 200) {
            alert("Contact update successfully.");
          }
      })
      .catch(function (response) {
          //handle error
          console.log(response)
      });
  }
 
  render() {
    return (
            <div className="container">
        <h1 className="page-header text-center">Update Contact</h1>
              <Link to="/" className="btn btn-primary btn-xs">Home</Link>
        <div className="col-md-12">
            <div className="panel panel-primary">
                <div className="panel-body">
                <form onSubmit={this.handleSubmit}>
                <input type="hidden" name="id" value={this.state.id}/>
                <label>Name</label>
                <input type="text" name="name" className="form-control" value={this.state.name} onChange={this.handleChange} />
  
                <label>Email</label>
                <input type="email" name="email" className="form-control" value={this.state.email} onChange={this.handleChange} />
  
                <label>Country</label>
                <input type="text" name="country" className="form-control" value={this.state.country} onChange={this.handleChange} />
  
                <label>City</label>
                <input type="text" name="city" className="form-control" value={this.state.city} onChange={this.handleChange} />
  
                <label>Job</label>
                <input type="text" name="job" className="form-control" value={this.state.job} onChange={this.handleChange} />
                <br/>
                <input type="submit" className="btn btn-primary btn-block" value="Update Contact" />
            </form>
                </div>
            </div>
            </div>
               </div>
    );
  }
}
 
export default Update;