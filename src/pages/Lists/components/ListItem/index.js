import React, { memo } from "react";
import PropTypes from "prop-types";

import styles from "./styles.module.css";

const ListItem = ({ id, name, age, handleRemove }) => {
  return (
    <div className={styles.wrapper}>
      <h1>{name}</h1>
      <h2>I'm {age} y.o.</h2>
      <button onClick={() => handleRemove(id)}>Remove</button>
    </div>
  );
};

ListItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  age: PropTypes.number,
  handleRemove: PropTypes.func,
};

export default memo(ListItem);
