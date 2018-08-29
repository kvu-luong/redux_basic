import numReducer from "./reducer/numReducer";
import editStatusReducer from "./reducer/statusReducer";

let redux = require("redux");

let allReducer = redux.combineReducers({
    num: numReducer,
    status: editStatusReducer
})
  


//create store for this reducer
let store1 = redux.createStore(allReducer);

//check status of state when it have been changed
//this function must be declare before dispatch.
 store1.subscribe(()=>{
    console.log(store1.getState());
  });

//call out specific action in reducer
store1.dispatch({type: "CHANGE_STATUS"});

store1.dispatch({type: "ADD_NEW", newItem: "lion"});

store1.dispatch({type: "DELETE", index: 2});

//export it out.
export default store1;