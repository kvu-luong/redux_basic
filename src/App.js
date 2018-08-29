import React, { Component } from 'react';

import './App.css';
import News from "./component/News";
import {connect} from "react-redux";

class App extends Component {


  render() {  
    return (
      <div className="App">
        <News/>
        {this.props.dulieu}
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
