import React, { useState } from 'react';
import axios from 'axios';

function Delete() {
    const [id,setId] = useState(0);
    
    const setID = (event)=> {
      setId(event.target.value);
    }

  const  deletee = ()=>{

    axios.get("http://localhost/react-tasks/tuesday4-7/apicrud/delete.php?id="+id)
    
    }
    
  return (
    <div>
        <input type="text" onChange={setID} />

        <button onClick={deletee}>delete record</button>
      
    </div>
  )
}

export default Delete;