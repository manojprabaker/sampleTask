import * as Yup from "yup";
export const signupValidation = Yup.object({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  email: Yup.string()
    .email("Invalid email")
    .required("Please Enter your Email"),
  password: Yup.string()
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{1,}$/,
      "Password must containe minimum 8 characters, at least one letter and one number"
    )
    .required("Please Enter Password"),
  confirmPassword: Yup.string()
    .required("Please enter confirm password")
    .oneOf([Yup.ref("password"), null], "Password did not match"),
  jobRole: Yup.string()
    .oneOf(["dev", "des", "qa"])
    .required("Please Select Job Role"),
  gender: Yup.string().required("Please Select Gender"),
  about: Yup.string()
    .max(200, "Must be less than 200")
    .required("Please Enter Details"),
  skills: Yup.array().min(1, "Please Select anyone"),
});
