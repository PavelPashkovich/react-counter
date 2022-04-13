import { Routes, Route } from "react-router-dom";

import { ROUTE_NAMES } from "./routeNames";
import CounterContainer from "../pages/Counter/containers/CounterContainer";
import CounterOfCountersContainer from "../pages/CounterOfCounters/containers/CounterOfCountersContainer";
import FunctionalCounterContainer from "../pages/FunctionalCounter/containers/FunctionalCounterContainer";
import HomeView from "../components/HomeView";
import ListsContainer from "../pages/Lists/containers/ListsContainer";
import Layout from "../pages/RenderProp/Layout";

export const Router = () => {
  return (
    <Routes>
      <Route path={ROUTE_NAMES.HOME_PAGE} element={<HomeView />} />
      <Route
        path={ROUTE_NAMES.SIMPLE_COUNTER_PAGE}
        element={<CounterContainer />}
      />
      <Route
        path={ROUTE_NAMES.COUNTER_OF_COUNTERS_PAGE}
        element={<CounterOfCountersContainer />}
      />
      <Route
        path={ROUTE_NAMES.FUNCTIONAL_COUNTER_PAGE}
        element={<FunctionalCounterContainer />}
      />
      <Route path={ROUTE_NAMES.LISTS} element={<ListsContainer />} />
      {/*<Route path={ROUTE_NAMES.RENDER_PROP} element={<Layout />} />*/}
      <Route path="*" element={<HomeView />} />
    </Routes>
  );
};
