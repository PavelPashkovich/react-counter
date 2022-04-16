import { createAction } from "redux-actions";

export const INCREMENT_COUNTER = createAction("INCREMENT_COUNTER");
export const DECREMENT_COUNTER = createAction("DECREMENT_COUNTER");
export const RESET_COUNTER = createAction("RESET_COUNTER");
export const REMOVE_SPECIFIC_COUNTER = createAction("REMOVE_SPECIFIC_COUNTER");

export const CREATE_COUNTER = createAction("CREATE_COUNTER");
