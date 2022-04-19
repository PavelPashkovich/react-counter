import { handleActions } from "redux-actions";
import { v4 as uuid } from "uuid";
import cloneDeep from "lodash/cloneDeep";

import * as actions from "../actions";

const initialState = {
  todos: [],
};

const reduxToDoReducer = handleActions(
  {
    [actions.CREATE_TODO]: (initialState, action) => {
      if (action.payload) {
        const newToDo = {
          id: uuid(),
          todoValue: action.payload,
          isDone: false,
          isEditMode: false,
        };
        return { todos: [newToDo, ...initialState.todos] };
      }
      return { todos: [...initialState.todos] };
    },

    [actions.CHANGE_TODO_VALUE]: (initialState, action) => {
      if (action.payload.value) {
        const copy = cloneDeep(initialState.todos);
        const result = copy.map((todo) => {
          if (todo.id === action.payload.id) {
            todo.todoValue = action.payload.value;
            todo.isEditMode = !action.payload.mode;
          }
          return todo;
        });
        return { todos: result };
      }
      alert("You should enter a todo!");
      return { todos: [...initialState] };
    },

    [actions.TOGGLE_TODO_STATUS]: (initialState, action) => {
      const copy = cloneDeep(initialState.todos);
      const result = copy.map((todo) => {
        if (todo.id === action.payload) {
          todo.isDone = !todo.isDone;
        }
        return todo;
      });
      return { todos: result };
    },

    [actions.TOGGLE_TODO_MODE]: (initialState, action) => {
      const copy = cloneDeep(initialState.todos);
      const result = copy.map((todo) => {
        if (todo.id === action.payload) {
          todo.isEditMode = !todo.isEditMode;
        }
        return todo;
      });
      return { todos: result };
    },

    [actions.DELETE_TODO]: (initialState, action) => {
      const copy = [...initialState.todos];
      const todoIndexToRemove = copy.findIndex(
        (todo) => todo.id === action.payload
      );
      copy.splice(todoIndexToRemove, 1);
      return { todos: copy };
    },
  },
  initialState
);

export default reduxToDoReducer;
