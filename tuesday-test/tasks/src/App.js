import React from 'react';
import Search from './comp/Search';
import UncontrolledExample from './comp/Slider';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './comp/Login';
import './App.css';
function App(){
  return(
    <div>
      <Search/>
      <UncontrolledExample/>
      <Login/>
    </div>
  );
}
export default App;
