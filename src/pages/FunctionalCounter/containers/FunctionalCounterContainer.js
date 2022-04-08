import { useState, useEffect, useCallback, useMemo } from "react";
import { useNavigate } from "react-router-dom";

import CounterView from "../../../components/CounterView";
import { useCounter, useToggle } from "../../../hooks";
import { ROUTE_NAMES } from "../../../Routs/routeNames";

const FunctionalCounterContainer = () => {
  const { count, handleIncrement, handleReset, handleDecrement } =
    useCounter(0);

  // заменили импортом из костомного хука
  // const [countValue, setCountValue] = useState(0);

  // Component Did Mount
  // useEffect(() => {
  //   console.log("Did Mount");
  // }, []);

  // Component Did Update
  // useEffect(() => {
  //   console.log(`Value is ${countValue}`);
  // }, [countValue]);

  // Component will Unmount
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     console.log("tick");
  //   }, 1000);
  //
  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, []);

  // Component will Unmount
  // useEffect(() => {
  //   return () => {
  //     alert("Bye!");
  //   };
  // }, []);

  // const handleDecrement = () => {
  //   setCountValue(countValue && countValue - 1);
  // };
  //
  // const handleReset = () => {
  //   setCountValue(0);
  // };
  //
  // const handleIncrement = () => {
  //   setCountValue(countValue + 1);
  // };

  const [isActive, handleToggle] = useToggle();

  const navigate = useNavigate();

  const wrap = useCallback(() => {
    if (count > 0) {
      handleDecrement();
    }
  }, [count]);

  useEffect(() => {
    if (count === 5) {
      navigate(ROUTE_NAMES.HOME_PAGE);
    }
  }, [count]);

  return (
    <div>
      <button onClick={handleToggle}>{JSON.stringify(isActive)}</button>
      <CounterView
        countValue={count}
        onIncrement={handleIncrement}
        onReset={handleReset}
        onDecrement={wrap}
      />
    </div>
  );
};

export default FunctionalCounterContainer;
