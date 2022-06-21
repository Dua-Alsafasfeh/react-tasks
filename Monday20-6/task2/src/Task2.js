import React from "react";

class Task2 extends React.Component{
    constructor(props){
        
        super(props)
        this.state=[{
            student:"Duaa",
            msg:"The best student in Aqaba cohort",
            like:"Number of likes"
    },
    {
        student:"Majd",
        msg:"The best student in Aqaba cohort",
        like:"Number of likes"
    },
    {
        student:"Marwa",
        msg:"The best student in Aqaba cohort",
        like:"Number of likes"
    },
    {
        student:"Samar",
        msg:"The best student in Aqaba cohort",
        like:"Number of likes"
    }];
  
    }
    render(){
        return(

            <div className="container">
            
            {this.state.map(({student,msg,like}) =>(
                <div className="card">
                <h1>{student}</h1>
                <p>{msg}</p>
                <h4>{like}</h4>
                </div>
            ))}
            </div>
        );
    }
}
export default Task2;