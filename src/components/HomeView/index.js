import { Link } from "react-router-dom";

import { ROUTE_NAMES } from "../../Routs/routeNames";

import styles from "./styles.module.css";

const HomeView = () => {
  return (
    <div className={styles.home}>
      <ul>
        <li>
          <Link to={ROUTE_NAMES.SIMPLE_COUNTER_PAGE}>Simple Counter</Link>
        </li>
        <li>
          <Link to={ROUTE_NAMES.COUNTER_OF_COUNTERS_PAGE}>
            Counter of counters
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default HomeView;
