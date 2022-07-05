import React, { useState } from 'react';
// import './App.css';
 
   function Sample() {
     const [age, setAge] = useState('');
     return (
       <div>
        <div>
            
            <p className='PP'>You clicked <section className='btn-sm text-warning bg-dark'>{age}</section>  times</p>
        </div>
         
         <div  className="DD position-absolute top-50 start-50 translate-middle mt-5">
         <button onClick={() => setAge(age + 'A')} className="btn btn-danger" type="button">
         A
        </button>
         <button onClick={() => setAge(age + 'B')} className="btn btn-danger" type="button">
         B
        </button>
         <button onClick={() => setAge(age + 'C')} className="btn btn-danger" type="button">
         C
        </button>
         <button onClick={() => setAge(age + 'D')} className="btn btn-danger" type="button">
         D
        </button>
         <button onClick={() => setAge(age + 'F')} className="btn btn-danger" type="button">
         F
        </button>
         <button onClick={() => setAge(age + 'G')} className="btn btn-danger" type="button">
         G
        </button>
         <button onClick={() => setAge(age + 'H')} className="btn btn-danger" type="button">
         H
        </button>
         <button onClick={() => setAge(age + 'I')} className="btn btn-danger" type="button">
         I
        </button>
         <button onClick={() => setAge(age + 'J')} className="btn btn-danger" type="button">
         J
        </button>
         <button onClick={() => setAge(age + 'K')} className="btn btn-danger" type="button">
         K
        </button>
         <button onClick={() => setAge(age + '-')} className="btn btn-danger" type="button">
         -
        </button>
        </div>
      </div>
    );}
    export default Sample;