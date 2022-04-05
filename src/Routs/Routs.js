import { Routes, Route } from "react-router-dom";
import { ROUTE_NAMES } from "./routeNames";
import CounterContainer from "../pages/Counter/containers/CounterContainer";

export const Router = () => {
  return (
    <Routes>
      <Route path={ROUTE_NAMES.HOME_PAGE} element={<div>Home</div>} />
      <Route path={ROUTE_NAMES.COUNTER_PAGE} element={<CounterContainer />} />
    </Routes>
  );
};
