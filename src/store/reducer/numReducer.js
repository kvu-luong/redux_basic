let oldState = ["man hinh", "chuot", "desktop"];

let numReducer = (state = oldState, action) =>{
    switch(action.type){
        case "ADD_NEW":
            return  [...state, action.newItem]
        case "DELETE":
            return [ state.filter((value, key)=>{
                return key !== action.index;
             })];
        default: 
             return state;
    }
}

export default numReducer;