import { v4 as uuid } from "uuid";
import * as actions from "../actions";
import { handleActions } from "redux-actions";

const initialState = {
  counters: [],
};

const countersManagerReducer = handleActions(
  {
    [actions.CREATE_COUNTER]: (initialState) => {
      const newCounter = {
        id: uuid(),
        countValue: 0,
      };
      return { counters: [...initialState.counters, newCounter] };
    },
    [actions.REMOVE_SPECIFIC_COUNTER]: (initialState, { payload: id }) => {
      const copy = [...initialState.counters];
      const counterIndexToRemove = copy.findIndex(
        (counter) => counter.id === id
      );
      copy.splice(counterIndexToRemove, 1);
      return { counters: copy };
    },
  },
  initialState
);

export default countersManagerReducer;
