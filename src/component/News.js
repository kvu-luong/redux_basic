import React , {Component} from "react";
import Cover from "../hoc/Cover";
import {connect} from "react-redux";
import classes from "./News.css";
class News extends Component{
    editStatus = () =>{
        let dispatch = this.props.dispatch;
        dispatch({type: "CHANGE_STATUS"});
    }
    render(){
        return (
            <Cover>

                <h2  className= {classes.center}>This is News Component</h2>
                <div className = {classes.button}>
                    <button onClick={ ()=> this.editStatus()} >Change Status</button>
                </div>
               
            </Cover>
        )
    }
}

const mapStateToProps = (state , ownProps) =>{
    return {
        editStatus: state.editStatus,

    }
}
export default connect(mapStateToProps)(News);