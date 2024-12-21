import * as yup from "yup";
const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
export const basicSchema2 = yup.object().shape({
    email: yup.string().email("Please enter a valid email").required("Required"),
   
    password: yup
      .string()
      .min(5)
      .matches(passwordRules, { message: "Please create a stronger password" })
      .required("Required"),
    
  });
  export const basicSchema = yup.object().shape({
    email: yup.string().email("Please enter a valid email").required("Required"),
   
    password: yup
      .string()
      .min(5)
      .matches(passwordRules, { message: "Please create a stronger password" })
      .required("Required"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match")
      .required("Required"),
  });
 export const validationSchema = yup.object().shape({
  email: yup.string().required('Medicament name is required'),
  adress: yup.string(),
  contactNumber: yup.number().required('Quantity is required'),
  firstName: yup.string().required('Medicament name is required'),
  secondName: yup.string().required('Medicament name is required'),
});
