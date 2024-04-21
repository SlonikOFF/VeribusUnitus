import { combineReducers } from "redux";
import dataSlice from "./dataSlice";

const rootReducer = combineReducers({
  settings: dataSlice,
});

export default rootReducer;
