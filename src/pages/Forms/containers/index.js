import { useCallback, useState } from "react";
import { useForm } from "../../../hooks";

const FormContainer = () => {
  const [formValues, handleChange] = useForm({ email: "", password: "" });

  // const [formValues, setFormValues] = useState({ email: "", password: "" });
  //
  // const handleChange = useCallback((event) => {
  //   const { name, value } = event.target;
  //   setFormValues((formValues) => ({
  //     ...formValues,
  //     [name]: value,
  //   }));
  // }, []);

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
      alert(JSON.stringify(formValues));
    },
    [formValues]
  );

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Email</p>
          <input
            name="email"
            value={formValues.email}
            onChange={handleChange}
            type="email"
          />
        </label>
        <label>
          <p>Password</p>
          <input
            name="password"
            value={formValues.password}
            onChange={handleChange}
            type="password"
          />
        </label>
        <button role="submit">Click</button>
      </form>
    </div>
  );
};

export default FormContainer;
