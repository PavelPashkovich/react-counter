import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";

import ReduxManagerLayout from "../components/ReduxManagerLayout";
import { CREATE_COUNTER, REMOVE_SPECIFIC_COUNTER } from "../actions";
import CounterItem from "../../CounterOfCounters/components/CounterItem";

const ReduxCounterManager = () => {
  const dispatch = useDispatch();

  const { counters } = useSelector((store) => store.countersManager);

  // console.log(counters);

  const handleCounterCreate = () => {
    dispatch(CREATE_COUNTER());
  };

  const handleRemoveSpecificCounter = (id) => {
    dispatch(REMOVE_SPECIFIC_COUNTER(id));
  };

  return (
    <Fragment>
      <button onClick={handleCounterCreate}>Add counter</button>
      <div>
        {counters.map((counter) => (
          <CounterItem
            key={counter.id}
            id={counter.id}
            countValue={counter.countValue}
            handleRemoveSpecificCounter={handleRemoveSpecificCounter}
          />
        ))}
      </div>
    </Fragment>
  );
};

export default ReduxCounterManager;
