import { useCallback, useState } from "react";

const useCounter = (defaultValue = 0) => {
  const [count, setCount] = useState(defaultValue);

  const handleIncrement = useCallback(() => {
    setCount((countValue) => countValue + 1);
  }, []);

  const handleReset = useCallback(() => {
    setCount(0);
  }, []);

  const handleDecrement = useCallback(() => {
    setCount((countValue) => countValue && countValue - 1);
  }, []);

  return {
    count,
    handleIncrement,
    handleReset,
    handleDecrement,
  };
};

export default useCounter;
