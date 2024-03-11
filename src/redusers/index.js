import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import AlertReducer from "./alertReducer";
import UserReducer from './userReducer';

const rootReducer = (history) =>
  combineReducers({
    router: routerReducer(history),
    alert: AlertReducer,
    dluser: UserReducer,
  });

export default rootReducer;