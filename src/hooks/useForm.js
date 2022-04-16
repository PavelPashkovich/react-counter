import { useCallback, useState } from "react";

const useForm = (initialFields) => {
  const [formState, setFormState] = useState(initialFields);

  const handleFormChange = useCallback((event) => {
    const { name, value } = event.target;
    setFormState((formState) => ({
      ...formState,
      [name]: value,
    }));
  }, []);

  const handleFormReset = useCallback(() => {
    setFormState(initialFields);
  }, []);

  return [formState, handleFormChange, handleFormReset];
};

export default useForm;
