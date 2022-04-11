import React from "react";
import PropTypes from "prop-types";

import ListItem from "../ListItem";
import styles from "./styles.module.css";

const ListsLayout = ({ users, handleRemove }) => {
  return (
    <div className={styles.wrapper}>
      {users.map((user) => {
        return (
          <ListItem
            id={user.id}
            key={user.id}
            name={user.name}
            age={user.age}
            handleRemove={handleRemove}
          />
        );
      })}
    </div>
  );
};

ListsLayout.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      age: PropTypes.number,
    })
  ).isRequired,
};

export default ListsLayout;
