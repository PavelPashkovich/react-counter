import { combineReducers } from "redux";
import countersManagerReducer from "../pages/ReduxCounterManager/reducers";
import reduxToDoReducer from "../pages/ReduxToDo/reducers";

export const rootReducer = combineReducers({
  countersManager: countersManagerReducer,
  reduxToDo: reduxToDoReducer,
});
