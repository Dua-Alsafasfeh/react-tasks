import React, { Component } from 'react';
import Table from './Table';

class Newform extends Component {
    constructor(props){
        super(props);
        this.state={
            name:'',
            isSubmitted:false,
            age: null,
}
            this.changeName = this.changeName.bind(this);
            this.changeAge = this.changeAge.bind(this);
            this.submitName = this.submitName.bind(this);

        
    }
    changeName(event) {
        // console.log(event);
        event.preventDefault();
        this.setState({name: event.target.value});
    }
    changeAge(event) {
        event.preventDefault();
        this.setState({age: event.target.value});
    }
    submitName(event) {
        event.preventDefault();
        this.setState({isSubmitted: true});
        // {isSubmitted && 
        
        // }
        // console.log(this.state.name,'Hello');
        
    }
    render() { 
        return (
            <>
            <form onSubmit={this.submitName}>
                <input type="text" id='name' value={this.state.name} onChange={this.changeName}/>
                <input type="number" id='age' value={this.state.age} onChange={this.changeAge}/>
                <input type="submit" value="submit" />
            </form>
            <div>
                <Table  name={this.state.name} Age={this.state.age}/>
            </div>
            </>
        );
    }
}
 
export default Newform;