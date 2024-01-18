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
    .max(40, "Password must be at most 40 character")
    .matches(
      /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      "Password must contain at least 8 characters, one uppercase \n one number and one special case character"
    )
    .trim(),
});
export const loginSchema = yup.object().shape({
  Email: yup
    .string()
    .required("Email is required")
    .email("Please enter a valid email")
    .trim(),
  Password: yup
    .string()
    .required("Password is required")
    .max(40, "Password must be at most 40 character")
    .matches(
      /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      "Password must contain at least 8 characters  one \n uppercase one number and one special case character"
    )
    .trim(),
});
export const forgetSchema = yup.object().shape({
  Email: yup
    .string()
    .required("Email is required")
    .email("Please enter a valid email")
    .trim(),
});