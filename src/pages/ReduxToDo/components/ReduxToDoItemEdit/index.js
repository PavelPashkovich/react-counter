import { memo, useCallback, useState } from "react";
import PropTypes from "prop-types";

import styles from "../ReduxToDoItemEdit/styles.module.css";

const ReduxToDoItemEdit = ({
  id,
  todoValue,
  isEditMode,
  handleToDoValue,
  handleToDoMode,
}) => {
  const [inputValue, setInputValue] = useState("");

  const handleToDoChange = useCallback((event) => {
    setInputValue(event.target.value);
  }, []);

  return (
    <div>
      <div className={styles.wrapper}>
        <input
          className={styles.input}
          type="text"
          value={inputValue}
          onChange={handleToDoChange}
        />
        <div className={styles.buttonWrapper}>
          <button className={styles.button} onClick={() => handleToDoValue({id: id, value: inputValue, mode: isEditMode})}>
            Confirm
          </button>
          <button
            className={styles.button}
            onClick={() => {
              handleToDoMode(id);
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

ReduxToDoItemEdit.propTypes = {
  id: PropTypes.string,
  todoValue: PropTypes.string,
  isDone: PropTypes.bool,
  isEditMode: PropTypes.bool,
  handleToDoValue: PropTypes.func,
  handleToDoMode: PropTypes.func,
};

export default memo(ReduxToDoItemEdit);
