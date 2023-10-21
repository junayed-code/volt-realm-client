import * as Yup from "yup";

export const signUpSchema = Yup.object().shape({
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
});

export const logInSchema = Yup.object().shape({
  email: Yup.string().email().required("This field is required."),
  password: Yup.string().min(6).required("This field is required."),
});

export const addProductSchema = Yup.object().shape({
  name: Yup.string().min(5).max(50).required("This field is required."),
  brand: Yup.string().min(3).max(30).required("This field is required."),
  type: Yup.string().min(4).max(25).required("This field is required."),
  image: Yup.string().url().required("This field is required."),
  price: Yup.number("Price must be a 'number' type")
    .positive("Price must be a positive number")
    .required("This field is required."),
  rating: Yup.number("Rating must be a 'number' type")
    .positive("Rating must be a positive number")
    .required("This field is required."),
  description: Yup.string()
    .min(20)
    .max(120)
    .required("This field is required."),
});

export const updateProductSchema = Yup.object().shape({
  name: Yup.string().min(5).max(50),
  brand: Yup.string().min(3).max(30),
  type: Yup.string().min(4).max(25),
  image: Yup.string().url(),
  price: Yup.number("Price must be a 'number' type value").positive(
    "Price must be a positive number"
  ),
  rating: Yup.number("Rating must be a 'number' type value").positive(
    "Rating must be a positive number"
  ),
  description: Yup.string().min(20).max(120),
});
