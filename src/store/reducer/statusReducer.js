let oldStatus = false;

let editStatusReducer = (state = oldStatus, action) =>{
    switch (action.type){
        case "CHANGE_STATUS":
            return !state;
        default:
            return state;
    }
}

export default editStatusReducer;