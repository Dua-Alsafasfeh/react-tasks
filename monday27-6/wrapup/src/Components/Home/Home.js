import React from 'react';

class Home extends React.Component {
 
    render() { 
        return (
            <>
           <h1>Your Name is:{this.props.name}</h1>
           <h1>Your Email is:{this.props.Email}</h1>
           <h1> Your password is:{this.props.Password}</h1>
           </>
        );
    }
}
 
export default Home;