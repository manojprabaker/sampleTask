import * as Yup from 'yup'
export const signupValidation = Yup. object({
name: Yup.string() .min(3).required ("Please Enter name"),
email: Yup.string().email("Pleas Enter Valid email").required ("Please Enter Email"),
password: Yup.string(),
})