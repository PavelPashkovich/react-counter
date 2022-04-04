import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.css";

const CounterView = ({
  countValue,
  parityType,
  onDecrement,
  onReset,
  onIncrement,
}) => {
  return (
    <div className={styles.wrapper}>
      <div
        className={`${styles.screen} ${parityType !== "even" && styles.odd}`}
      >
        {countValue}
      </div>
      <div className={styles.buttons}>
        <button className={styles.button} onClick={onDecrement}>
          -
        </button>
        <button className={styles.button} onClick={onReset}>
          Reset
        </button>
        <button className={styles.button} onClick={onIncrement}>
          +
        </button>
      </div>
      <div
        className={`${styles.parityType} ${countValue === 0 && styles.hidden}`}
      >
        Number is {parityType}
      </div>
    </div>
  );
};

CounterView.propTypes = {
  countValue: PropTypes.number.isRequired,
  parityType: PropTypes.string.isRequired,
  onDecrement: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
  onIncrement: PropTypes.func.isRequired,
};

export default CounterView;
