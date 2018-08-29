import React, { Component } from 'react';

import './App.css';
import News from "./component/News";
import {connect} from "react-redux";

class App extends Component {


  render() {  
    return (
      <div className="App">
        <News/>
        <h3 style={{"textAlign": "center"}}>{this.props.dulieu}</h3>
      </div>
    );  
  }
}

const mapStateToProps = (state, ownProps) =>{
  return {
    //get sum state in store, then we assign it for props: dulieu
    dulieu: state.num,
  }
}
export default connect(mapStateToProps)(App);
