import { Routes, Route } from "react-router-dom";
import CounterContainer from "../pages/Counter/containers/CounterContainer";
import { ROUTE_NAMES } from "./routeNames";

export const Router = () => {
  return (
    <Routes>
      <Route path={ROUTE_NAMES.HOME_PAGE} element={<div>Home</div>} />
      <Route path={ROUTE_NAMES.COUNTER_PAGE} element={<CounterContainer />} />
    </Routes>
  );
};
