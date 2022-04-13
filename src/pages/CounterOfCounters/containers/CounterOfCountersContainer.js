import { useCallback, useState } from "react";

import { v4 as uuid } from "uuid";

import cloneDeep from "lodash/cloneDeep";

import CountersLayout from "../components/CountersLayout";

import { isEven } from "../../../utils";

const CounterOfCountersContainer = (callback, deps) => {
  const [counters, setCounters] = useState([]);

  const handleAddCounter = useCallback(() => {
    setCounters((counters) => {
      const copy = cloneDeep(counters);
      copy.map((counter) => {
        if (isEven(counter.countValue)) {
          counter.countValue++;
        }
        return counter;
      });
      copy.push({ id: uuid(), countValue: 0 });
      return copy;
    });
  }, []);

  const handleRemoveCounter = useCallback(() => {
    setCounters((counters) => {
      const copy = cloneDeep(counters);
      copy.map((counter) => {
        if (!isEven(counter.countValue)) {
          --counter.countValue;
        }
        return counter;
      });
      copy.pop();
      return copy;
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
      const copy = cloneDeep(counters);
      return copy.map((counter) => {
        if (counter.id === id) {
          counter.countValue && --counter.countValue;
        }
        return counter;
      });
    });
  }, []);

  const handleReset = useCallback((id) => {
    setCounters((counters) => {
      const copy = cloneDeep(counters);
      return copy.map((counter) => {
        if (counter.id === id) {
          counter.countValue = 0;
        }
        return counter;
      });
    });
  }, []);

  const handleIncrement = useCallback((id) => {
    setCounters((counters) => {
      const copy = cloneDeep(counters);
      return copy.map((counter) => {
        if (counter.id === id) {
          ++counter.countValue;
        }
        return counter;
      });
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
