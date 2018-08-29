import React , {Component} from "react";
import Cover from "../hoc/Cover";
import {connect} from "react-redux";
import classes from "./News.css";
class News extends Component{
    render(){
        return (
            <Cover>

                <h2  className= {classes.center}>This is News Component</h2>
                <div className = {classes.button}>
                    <button onClick={this.props.editStatus} >Change Status</button>
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
const mapDispatchToProps = (dispatch, ownProps) =>{
    return {
        editStatus: () =>{
            dispatch({type: "CHANGE_STATUS"})
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(News);