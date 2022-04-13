import React, { useCallback, useState } from "react";

import ListsLayout from "../components/ListsLayout";
import { dummyUsers } from "../config";

const ListsContainer = () => {
  const [users, setUsers] = useState(dummyUsers);

  const handleRemove = useCallback((id) => {
    setUsers((users) => {
      const copyUsers = [...users];
      const userIndexToDelete = copyUsers.findIndex((user) => user.id === id);
      copyUsers.splice(userIndexToDelete, 1);
      return copyUsers;
    });
  }, []);

  // const users = useMemo(() => dummyUsers, []);

  return <ListsLayout users={users} handleRemove={handleRemove} />;
};

export default ListsContainer;
