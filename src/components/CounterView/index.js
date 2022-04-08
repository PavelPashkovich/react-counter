import React from "react";
import { memo } from "react";
import PropTypes from "prop-types";

import styles from "./styles.module.css";

const CounterView = ({ countValue, onDecrement, onReset, onIncrement }) => {
  const isEven = countValue % 2 === 0;
  return (
    <div className={styles.wrapper}>
      <div className={`${styles.screen} ${!isEven && styles.odd}`}>
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
        Number is {isEven ? "even" : "odd"}
      </div>
    </div>
  );
};

CounterView.propTypes = {
  countValue: PropTypes.number.isRequired,
  onDecrement: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
  onIncrement: PropTypes.func.isRequired,
};

export default memo(CounterView);
