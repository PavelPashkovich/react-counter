import { createAction } from "redux-actions";

export const CREATE_TODO = createAction("CREATE_TODO");
export const CHANGE_TODO_VALUE = createAction("CHANGE_TODO_VALUE");
export const TOGGLE_TODO_STATUS = createAction("TOGGLE_TODO_STATUS");
export const TOGGLE_TODO_MODE = createAction("TOGGLE_TODO_MODE");
export const DELETE_TODO = createAction("DELETE_TODO");
