import * as yup from "yup";

const validationSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup
    .string()
    .required("Please Enter your password")
    .matches(
      "^(?=.*[A-Za-z])(?=.*d)(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]{8,}$",
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    ),
});

export default validationSchema;
