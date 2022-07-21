import './App.css';
import { useSelector,useDispatch } from 'react-redux';
import {increment,decrement} from "./actions";
function App() {
const counter=useSelector(state=>state.counter);
const isLogged=useSelector(state=>state.logged);
const dispatch=useDispatch();
  return (
    <div className="App">
     <h1>Counter is {counter} </h1>
     <button onClick={()=>dispatch(increment(7))} >+</button>
     <button onClick={()=>dispatch(decrement())}>-</button>
{!isLogged?
    <h3>You are not allow to see the data here if you are not logged in</h3>:""
}

    </div>
  );
}

export default App;
