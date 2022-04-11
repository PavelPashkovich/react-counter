import { useCallback, useState } from "react";

import { v4 as uuid } from "uuid";

import CountersLayout from "../components/CountersLayout";

const CounterOfCountersContainer = (callback, deps) => {
  const [counters, setCounters] = useState([]);

  const handleAddCounter = useCallback(() => {
    setCounters((counters) => {
      const copyCounters = [...counters];
      copyCounters.map((counter) => {
        if (counter.countValue % 2 === 0) {
          ++counter.countValue;
        }
      });
      copyCounters.push({ id: uuid(), countValue: 0 });
      return copyCounters;
    });
  }, []);

  const handleRemoveCounter = useCallback(() => {
    setCounters((counters) => {
      const copyCounters = [...counters];
      copyCounters.pop();
      copyCounters.map((counter) => {
        if (counter.countValue % 2 !== 0) {
          --counter.countValue;
        }
      });
      return copyCounters;
    });
  }, []);

  const handleRemoveSpecificCounter = useCallback((id) => {
    setCounters((counters) => {
      const copyCounters = [...counters];
      const counterIndexToDelete = copyCounters.findIndex(
        (counter) => counter.id === id
      );
      copyCounters.splice(counterIndexToDelete, 1);
      return copyCounters;
    });
  }, []);

  const handleResetCounters = useCallback(() => {
    setCounters([]);
  }, []);

  const handleDecrement = useCallback((id) => {
    setCounters((counters) => {
      const copyCounters = [...counters];
      copyCounters.map((counter) => {
        if (counter.id === id) {
          counter.countValue && --counter.countValue;
        }
      });
      return copyCounters;
    });
  }, []);

  const handleReset = useCallback((id) => {
    setCounters((counters) => {
      const copyCounters = [...counters];
      copyCounters.map((counter) => {
        if (counter.id === id) {
          counter.countValue = 0;
        }
      });
      return copyCounters;
    });
  }, []);

  const handleIncrement = useCallback((id) => {
    setCounters((counters) => {
      const copyCounters = [...counters];
      copyCounters.map((counter) => {
        if (counter.id === id) {
          ++counter.countValue;
        }
      });
      return copyCounters;
    });
  }, []);

  const countersSumValue = counters.reduce((sum, counter) => {
    sum += counter.countValue;
    return sum;
  }, 0);

  return (
    <div>
      <div>
        <CountersLayout
          counters={counters}
          handleAddCounter={handleAddCounter}
          handleRemoveCounter={handleRemoveCounter}
          handleRemoveSpecificCounter={handleRemoveSpecificCounter}
          handleResetCounters={handleResetCounters}
          handleIncrement={handleIncrement}
          handleReset={handleReset}
          handleDecrement={handleDecrement}
          countersSumValue={countersSumValue}
        />
      </div>
    </div>
  );
};

export default CounterOfCountersContainer;
