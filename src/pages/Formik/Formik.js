import { useFormik } from "formik";
import { Checkbox } from "@mui/material";

import useStyles from "./styles";
import styles from "./styles.module.css";

import validationSchema from "./validations";

const Formik = () => {
  // const classes = useStyles();
  // console.log(classes);
  const { values, handleSubmit, handleChange, errors, touched, handleBlur } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      onSubmit: (initialValues) => {
        alert(JSON.stringify(initialValues));
      },
      validationSchema: validationSchema,
    });

  console.log(touched);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">E-mail</label>
          <input
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            id="email"
            name="email"
            type="email"
          />

          {touched.email && errors.email && (
            <p style={{ color: "red" }}>{errors.email}</p>
          )}
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            id="password"
            name="password"
            type="password"
          />

          {touched.password && errors.password && (
            <p style={{ color: "red" }}>{errors.password}</p>
          )}
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>

        <Checkbox className={styles.checkbox} />
      </form>
    </div>
  );
};

export default Formik;
