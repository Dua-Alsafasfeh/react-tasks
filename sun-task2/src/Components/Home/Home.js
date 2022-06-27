import React, { Component } from 'react';
import Show from '../Show/Show';
class Home extends Component {
    state = {
        temp: '',
        email_temp: '',
        value: '',
        email_value: '',
        is_submited: false
    }

    getValue = (event) => {
        const name = this.name.value;
        const email = this.email.value;

        this.setState({ temp: name, email_temp: email })
        console.log(this.state.temp, this.state.email_temp);

    }

    handleSubmit = (event) => {
        event.preventDefault()
        console.log(this.state.temp, this.state.email_temp);

        this.setState({ value: this.state.temp })
        this.setState({ email_value: this.state.email_temp })
        this.setState({ is_submited: true })

        console.log("ss", this.state.value, this.state.email_value);


    }
    render() {

        return (

            <div>
                {!this.state.is_submited && (
                    <div>
                        <form  >
                            <div>
                                <input type="text" onChange={this.getValue} name="name" ref={(input) => this.name = input} id="" />
                            </div>
                            <div>
                                <input type="text" onChange={this.getValue} name="email" ref={(input) => this.email = input} id="" />
                            </div>
                            <input type="button" value="Login" onClick={this.handleSubmit} />
                        </form>
                        <div> Data in the same Component : {this.state.value}</div>
                    </div>
                )}

                <div><Show value={this.state.value} email={this.state.email_value} /></div>


            </div >
        );
    }
}

export default Home;