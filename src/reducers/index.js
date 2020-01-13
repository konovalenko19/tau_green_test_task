import { combineReducers } from "redux";

import locationsReducers from "./locationsReducers";
import locationViewReducers from "./locationViewReducers";

export default combineReducers({
  locations: locationsReducers,
  locationView: locationViewReducers,
});