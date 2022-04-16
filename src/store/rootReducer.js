import { combineReducers } from "redux";
import countersManagerReducer from "../pages/ReduxCounterManager/reducers";

export const rootReducer = combineReducers({
  countersManager: countersManagerReducer,
});
