import React from "react";
import { Link } from "react-router-dom";

import styles from "./styles.module.css";
import { ROUTE_NAMES } from "../../Routs/routeNames";

const Header = () => {
  return (
    <div className={styles.header}>
      <Link to={ROUTE_NAMES.HOME_PAGE}>Home</Link>
      {/*<Link to={ROUTE_NAMES.LISTS}>Lists</Link>*/}
      {/*<Link to={ROUTE_NAMES.SIMPLE_COUNTER_PAGE}>Simple Counter</Link>*/}
      {/*<Link to={ROUTE_NAMES.COUNTER_OF_COUNTERS_PAGE}>Counter of counters</Link>*/}
      {/*<Link to={ROUTE_NAMES.FUNCTIONAL_COUNTER_PAGE}>Functional Counter</Link>*/}
      <Link to={ROUTE_NAMES.REDUX_COUNTER_MANAGER}>ReduxCM</Link>
      <Link to={ROUTE_NAMES.FORM}>Form</Link>
      <Link to={ROUTE_NAMES.FORMIK}>Formik</Link>
      <Link to={ROUTE_NAMES.REDUX_TODO}>Redux-todo</Link>
    </div>
  );
};

export default Header;
