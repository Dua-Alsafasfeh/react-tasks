const counterReducer=(state=0,action)=>{

    switch(action.type){
        case "INCREMENT":
            return state+action.anas;
        case "DECREMENT":
            return state -1;
        default:
            return state;
    }
}
export default counterReducer;