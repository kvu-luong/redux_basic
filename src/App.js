import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {


  render() {

    var redux = require("redux");
    let oldState = {
      num: ["man hinh", "chuot", "desktop"],
      editStatus : true,
    }
    var reducer1 = (state = oldState, action) =>{
      switch(action.type){
        case "CHANGE_STATUS":
            return {...oldState, editStatus: !state.editStatus }
            break;
        case "ADD_NEW":
            return {...oldState, num: [...state.num, action.newItem]}
            break;
        case "DELETE":
            return {...oldState, num: state.num.filter((value, key)=>{
              return key != action.index;
            })}
            break;
        default:
            return "hello world";
            break;
      }
    }
    let store1 = redux.createStore(reducer1);
    console.log(store1.getState());
    store1.dispatch({type: "CHANGE_STATUS"});
    console.log(store1.getState());
    store1.dispatch({type: "ADD_NEW", newItem: "lion"});
    console.log(store1.getState());
    store1.dispatch({type: "DELETE", index: 2});
    console.log(store1.getState());
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
   
  }

  
}

export default App;
