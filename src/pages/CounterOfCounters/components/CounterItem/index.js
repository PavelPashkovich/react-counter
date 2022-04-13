import { memo } from "react";
import PropTypes from "prop-types";

import styles from "./styles.module.css";

const CounterItem = ({
  id,
  countValue,
  onDecrement,
  onReset,
  onIncrement,
  handleRemoveSpecificCounter,
}) => {
  const isEven = countValue % 2 === 0;
  return (
    <div className={styles.wrapper}>
      <div className={styles.deleteButtonWrapper}>
        <div
          className={`${styles.parityType} ${
            countValue === 0 && styles.hidden
          }`}
        >
          Number is {isEven ? "even" : "odd"}
        </div>
        <button
          className={styles.deleteButton}
          onClick={() => handleRemoveSpecificCounter(id)}
        >
          x
        </button>
      </div>
      <div className={`${styles.screen} ${!isEven && styles.odd}`}>
        {countValue}
      </div>
      <div className={styles.buttons}>
        <button className={styles.button} onClick={() => onDecrement(id)}>
          -
        </button>
        <button className={styles.button} onClick={() => onReset(id)}>
          Reset
        </button>
        <button className={styles.button} onClick={() => onIncrement(id)}>
          +
        </button>
      </div>
    </div>
  );
};

CounterItem.propTypes = {
  id: PropTypes.string.isRequired,
  countValue: PropTypes.number.isRequired,
  onDecrement: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
  onIncrement: PropTypes.func.isRequired,
  handleRemoveSpecificCounter: PropTypes.func,
};

export default memo(CounterItem);
