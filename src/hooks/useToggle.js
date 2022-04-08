import { useCallback, useState } from "react";

const useToggle = (defaultValue = false) => {
  const [isActive, setActive] = useState(defaultValue);

  const handleToggle = useCallback(() => {
    setActive((isActive) => !isActive);
  }, []);

  return [isActive, handleToggle];
};

export default useToggle;
