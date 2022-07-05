import React, { useState } from 'react';
import axios from 'axios';

function Update() {

    const [id, setId] = useState(1);
    const [name, setName] = useState('test-name');
    const [email, setEmail] = useState('test-email');
    const [age, setAge] = useState(999);
    const [salary, setSalary] = useState(111);

    const idHandel = (e)=>{setId(e.target.value)}
    const nameHandel = (e)=>{setName(e.target.value)}
    const emailHandel = (e)=>{setEmail(e.target.value)}
    const ageHandel = (e)=>{setAge(e.target.value)}
    const salaryHandel = (e)=>{setSalary(e.target.value)}

    const clickHandel = ()=>{
        axios.post('http://localhost/react-tasks/tuesday4-7/apicrud/update.php?id='+id+'&name='+name+'&email='+email+'&age='+age+'&salary='+salary)
        .then((data) => {
            // console.log('localhost/api-crud/php_crud/update.php?id='+id+'&name='+name+'&email='+email+'&age='+age+'&salary='+salary);
        })
        .catch((error) => {
            console.error(error);
        });
    }

    return (  
        <>
            <div>
            <label>ID: </label>
            <br/>
            <input type={'number'} onChange={idHandel} />
            </div>
            <div>
            <label>NAME: </label>
            <br/>
            <input type={'text'} onChange={nameHandel} />
            </div>
            <div>
            <label>EMAIL: </label>
            <br/>
            <input type={'text'} onChange={emailHandel} />
            </div>
            <div>
            <label>AGE: </label>
            <br/>
            <input type={'text'} onChange={ageHandel} />
            </div>
            <div>
            <label>SALARY: </label>
            <br/>
            <input type={'text'} onChange={salaryHandel} />
            </div>
            <button onClick={clickHandel}>UPDATE</button>
        </>
    );
}

export default Update;