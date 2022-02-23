import { combineReducers } from "redux";

var Data = {
  Characters:[],
  Page:{
    current:0,
    max:1
  }
};

const reducer = (state = Data, action) => {
  if(action.type === "FETCH_DATA"){
    state.Characters = action.payload
    return {...state}
  }
  return state
};


const allReducers = combineReducers({
  reducer,
});

export default allReducers;



