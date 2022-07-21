import counterReducer from "./counter";
import loggedReducer from "./isLogged";
import {combineReducers} from 'redux';


const AllReducers=combineReducers({
    counter:counterReducer,
    logged:loggedReducer,
});

export default AllReducers;