import { useDispatch, useSelector } from "react-redux";

import ReduxToDoLayout from "../components/ReduxToDoLayout";
import {
  CHANGE_TODO_VALUE,
  CREATE_TODO,
  DELETE_TODO,
  TOGGLE_TODO_MODE,
  TOGGLE_TODO_STATUS,
} from "../actions";
import { useCallback } from "react";

const ReduxToDo = () => {
  const dispatch = useDispatch();

  const { todos } = useSelector((store) => store.reduxToDo);

  const handleToDoCreate = useCallback((value) => {
    dispatch(CREATE_TODO(value));
  }, []);

  const handleToDoValue = useCallback((id, value, mode) => {
    dispatch(CHANGE_TODO_VALUE(id, value, mode));
  }, []);

  const handleToDoStatus = useCallback((id) => {
    dispatch(TOGGLE_TODO_STATUS(id));
  },[]);

  const handleToDoMode = useCallback((id) => {
    dispatch(TOGGLE_TODO_MODE(id));
  },[]);

  const handleToDoDelete = useCallback((id) => {
    dispatch(DELETE_TODO(id));
  },[]);

  return (
    <ReduxToDoLayout
      todos={todos}
      handleToDoCreate={handleToDoCreate}
      handleToDoValue={handleToDoValue}
      handleToDoStatus={handleToDoStatus}
      handleToDoMode={handleToDoMode}
      handleToDoDelete={handleToDoDelete}
    />
  );
};

export default ReduxToDo;
