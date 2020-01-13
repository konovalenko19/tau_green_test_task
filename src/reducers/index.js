import { combineReducers } from "redux";


import locationsReducers from "./locationsReducers";

export default combineReducers({
  locations: locationsReducers,
});