let redux = require("redux");

//create state for reducer
let oldState = {
    num: ["man hinh", "chuot", "desktop"],
    editStatus : true,
  }
//create reducer
var reducer1 = (state = oldState, action) =>{
    switch(action.type){
      case "CHANGE_STATUS":
          return {...oldState, editStatus: !state.editStatus }
      case "ADD_NEW":
          return {...oldState, num: [...state.num, action.newItem]}
      case "DELETE":
          return {...oldState, num: state.num.filter((value, key)=>{
            return key !== action.index;
          })}
      default:
          return "hello world";

    }
  }
//create store for this reducer
let store1 = redux.createStore(reducer1);

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