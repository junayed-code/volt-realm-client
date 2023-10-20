import * as Yup from "yup";

export const registerSchema = Yup.object().shape({
  uname: Yup.string()
    .min(2, "User name must be at least 2 characters")
    .max(25, "User name must be at most 25 characters")
    .required("This field is required."),
  email: Yup.string().email().required("This field is required."),
  password: Yup.string()
    .min(6)
    .max(20)
    .matches(/(?=.*?[A-Z])/, "Must contain at least 1 upper case letter")
    .matches(/(?=.*?[a-z])/, "Must contain at least 1 lower case letter")
    .matches(
      /(?=.*?[#?!@$%^&*-])/,
      "Must include at least 1 special character - [#?!@$%^&*-]"
    )
    .required("This field is required."),
  photoURL: Yup.string().url(),
});

export const logInSchema = Yup.object().shape({
  email: Yup.string().email().required("This field is required."),
  password: Yup.string().min(6).required("This field is required."),
});
