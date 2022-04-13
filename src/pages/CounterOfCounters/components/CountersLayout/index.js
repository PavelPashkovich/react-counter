import { memo } from "react";
import PropTypes from "prop-types";

import styles from "./styles.module.css";
import CounterItem from "../CounterItem";

const CountersLayout = ({
  counters,
  handleAddCounter,
  handleRemoveCounter,
  handleRemoveSpecificCounter,
  handleResetCounters,
  handleDecrement,
  handleReset,
  handleIncrement,
  countersSumValue,
}) => {
  return (
    <div>
      <div className={styles.wrapper}>
        <button className={styles.button} onClick={handleAddCounter}>
          Add counter
        </button>
        <button className={styles.button} onClick={handleRemoveCounter}>
          Remove counter
        </button>
        <button className={styles.button} onClick={handleResetCounters}>
          Reset counters
        </button>
      </div>
      <div className={styles.summaryContainer}>
        <div className={styles.total}>Total counters: {counters.length}</div>
        <div className={styles.total}>Total value: {countersSumValue}</div>
      </div>

      <div className={styles.countersContainer}>
        {counters.map((counter) => {
          return (
            <CounterItem
              key={counter.id}
              id={counter.id}
              countValue={counter.countValue}
              handleRemoveSpecificCounter={handleRemoveSpecificCounter}
              onIncrement={handleIncrement}
              onReset={handleReset}
              onDecrement={handleDecrement}
            />
          );
        })}
      </div>
    </div>
  );
};

CountersLayout.propTypes = {
  counterId: PropTypes.string,
  countValue: PropTypes.number,
  handleAddCounter: PropTypes.func,
  handleRemoveCounter: PropTypes.func,
  handleRemoveSpecificCounter: PropTypes.func,
  handleResetCounters: PropTypes.func,
  handleDecrement: PropTypes.func,
  handleReset: PropTypes.func,
  handleIncrement: PropTypes.func,
};

export default memo(CountersLayout);
