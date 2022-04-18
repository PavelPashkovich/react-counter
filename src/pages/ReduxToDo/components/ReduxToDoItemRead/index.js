import { memo } from "react";
import PropTypes from "prop-types";

import styles from "../ReduxToDoItemRead/styles.module.css";

const ReduxToDoItemRead = ({
  id,
  todoValue,
  isDone,
  isEditMode,
  handleToDoStatus,
  handleToDoMode,
  handleToDoDelete,
}) => {
  return (
    <div>
      <div className={styles.wrapper}>
        <div className={styles.todoWrapper}>
          <input
              type="checkbox"
              id={id}
              defaultChecked={isDone}
              onClick={() => handleToDoStatus(id)}
          />
          <span className={`${isDone && styles.done}`}>{todoValue}</span>
        </div>

        <div className={styles.buttonWrapper}>
          <button
            className={styles.button}
            onClick={() => {
              handleToDoMode(id);
            }}
          >
            Edit
          </button>
          <button
            className={styles.button}
            onClick={() => handleToDoDelete(id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

ReduxToDoItemRead.propTypes = {
  id: PropTypes.string,
  todoValue: PropTypes.string,
  isDone: PropTypes.bool,
  isEditMode: PropTypes.bool,
  handleToDoStatus: PropTypes.func,
  handleToDoMode: PropTypes.func,
  handleToDoDelete: PropTypes.func,
};

export default memo(ReduxToDoItemRead);
