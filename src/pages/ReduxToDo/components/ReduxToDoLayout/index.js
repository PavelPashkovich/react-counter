import { Fragment, useCallback, useState } from "react";
import PropTypes from "prop-types";

import styles from "./styles.module.css";
import ReduxToDoItemRead from "../ReduxToDoItemRead";
import ReduxToDoItemEdit from "../ReduxToDoItemEdit";

const ReduxToDoLayout = ({
  todos,
  handleToDoCreate,
    handleToDoValue,
  handleToDoStatus,
  handleToDoMode,
  handleToDoDelete,
}) => {
  const [inputValue, setInputValue] = useState("");

  const handleToDoChange = useCallback((event) => {
    setInputValue(event.target.value);
  }, []);

  // const handleToDoSubmit = useCallback((event) => {
  //   event.preventDefault();
    // alert(event.target.value);
  // }, [inputValue]);

  return (
    <Fragment>
      {/*<form onSubmit={handleToDoSubmit}>*/}
        <div className={styles.wrapper}>
          <input
              className={styles.input}
              type="text"
              value={inputValue}
              onChange={handleToDoChange}
          />
          <button className={styles.button} onClick={() => handleToDoCreate(inputValue)}>
          {/*<button className={styles.button} role="submit">*/}
            Create
          </button>
        </div>
      {/*</form>*/}

      <div>
        {todos.map((todo) => {
          if (!todo.isEditMode) {
            return (
              <ReduxToDoItemRead
                key={todo.id}
                id={todo.id}
                todoValue={todo.todoValue}
                isDone={todo.isDone}
                handleToDoValue={handleToDoValue}
                handleToDoStatus={handleToDoStatus}
                handleToDoMode={handleToDoMode}
                handleToDoDelete={handleToDoDelete}
              />
            );
          } else {
            return (
              <ReduxToDoItemEdit
                key={todo.id}
                id={todo.id}
                todoValue={todo.todoValue}
                isDone={todo.isDone}
                isEditMode={todo.isEditMode}
                handleToDoValue={handleToDoValue}
                handleToDoStatus={handleToDoStatus}
                handleToDoMode={handleToDoMode}
                handleToDoDelete={handleToDoDelete}
              />
            );
          }
        })}
      </div>
    </Fragment>
  );
};

ReduxToDoLayout.propTypes = {
  todos: PropTypes.array,
  handleToDoCreate: PropTypes.func,
  handleToDoStatus: PropTypes.func,
  handleToDoMode: PropTypes.func,
  handleToDoDelete: PropTypes.func,
};

export default ReduxToDoLayout;
