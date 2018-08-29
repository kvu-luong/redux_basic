import React , {Component} from "react";
import Cover from "../hoc/Cover";
import {connect} from "react-redux";

class News extends Component{
    editStatus = () =>{
        let dispatch = this.props.dispatch;
        dispatch({type: "CHANGE_STATUS"});
    }
    render(){
        return (
            <Cover>
                <h2>This is News Component</h2>
                <button onClick={ ()=> this.editStatus()}>Change Status</button>
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