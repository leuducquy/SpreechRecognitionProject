import { combineReducers } from "redux";
import blank from './blankReducer';
import auth from './auth';
export default combineReducers({
  auth,
  blank
});
