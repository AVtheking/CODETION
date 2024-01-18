import * as yup from "yup";


export const schema = yup.object().shape({
  Username: yup
    .string()
    .required("Username is required")
    .min(3, "Username must be at least 3 character")
    .max(15, "Your username is too lengthy.Please limit it to 15 characters")
    .trim(),
  Email: yup
    .string()
    .required("Email is required")
    .email("Please enter a valid email")
    .trim(),
  Password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 character")
    .max(40, "Password must be at most 40 character")
    .trim(),
});
