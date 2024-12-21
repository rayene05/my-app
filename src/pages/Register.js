import { useFormik } from "formik";
import { basicSchema } from "./shema/file";
import "./form.css"
import httpclient from "../httpclient";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    try {
      const response = await httpclient.post("//localhost:5000/user", {
        email: values.email,
        password: values.password,
        first_name:values.first_name,
        second_name:values.second_name,
        address:values.address,
        contact_number:values.contact_number,
      });

      if (response.status === 200) {
        // Registration successful, navigate to login page
        navigate("/login");
      } else {
        // Handle unexpected status codes
        throw new Error("Registration failed");
      }
    } catch (error) {
      console.error(error); // Log the error for debugging
      if (error.response && error.response.status === 409) {
        // Set email error for conflict
        alert("check credential")
      } else {
        // Handle other errors (e.g., network issues)
        alert("An error occurred during registration. Please try again later.");
      }
    }
  };
  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      email: "",
    
      password: "",
      confirmPassword: "",
    },
    validationSchema: basicSchema,
    onSubmit,
  });

  console.log(errors);

  return (
    <form className="form_auth" onSubmit={handleSubmit} autoComplete="off">
      <label className="label_auth" htmlFor="email">Email</label>
      <input
        value={values.email}
        onChange={handleChange}
        id="email"
        type="email"
        placeholder="Enter your email"
        onBlur={handleBlur}
        className={errors.email && touched.email ? "input-error" : "input_auth"}
      />
      {errors.email && touched.email && <p className="error">{errors.email}</p>}
      <label className="label_auth" htmlFor="password">Password</label>
      <input
        id="password"
        type="password"
        placeholder="Enter your password"
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
        className={errors.password && touched.password ? "input-error" : "input_auth"}
      />
      {errors.password && touched.password && (
        <p className="error">{errors.password}</p>
      )}
      <label className="label_auth" htmlFor="confirmPassword">Confirm Password</label>
      <input
        id="confirmPassword"
        type="password"
        placeholder="Confirm password"
        value={values.confirmPassword}
        onChange={handleChange}
        onBlur={handleBlur}
        className={
          errors.confirmPassword && touched.confirmPassword ? "input-error" : "input_auth"
        }
      />
      {errors.confirmPassword && touched.confirmPassword && (
        <p className="error">{errors.confirmPassword}</p>
      )}
      <label className="label_auth" htmlFor="first_name">First_name</label>
      <input
        value={values.first_name}
        onChange={handleChange}
        id="first_name"
        type="first_name"
        placeholder="Enter your first name "
        onBlur={handleBlur}
        className={errors.first_name && touched.first_name ? "input-error" : "input_auth"}
      />
      {errors.first_name && touched.first_name && <p className="error">{errors.first_name}</p>}
      <label className="label_auth" htmlFor="second_name">Second_name</label>
      <input
        value={values.second_name}
        onChange={handleChange}
        id="second_name"
        type="second_name"
        placeholder="Enter your second name "
        onBlur={handleBlur}
        className={errors.second_name && touched.second_name ? "input-error" : "input_auth"}
      />
      {errors.second_name && touched.second_name && <p className="error">{errors.second_name}</p>}
      <label className="label_auth" htmlFor="contact_number">contact_number</label>
      <input
        value={values.contact_number}
        onChange={handleChange}
        id="contact_number"
        type="contact_number"
        placeholder="Enter your contact number name "
        onBlur={handleBlur}
        className={errors.contact_number && touched.contact_number ? "input-error" : "input_auth"}
      />
      {errors.contact_number && touched.contact_number && <p className="error">{errors.contact_number}</p>}
      <label className="label_auth" htmlFor="address">address</label>
      <input
        value={values.address}
        onChange={handleChange}
        id="address"
        type="address"
        placeholder="Enter your  adress "
        onBlur={handleBlur}
        className={errors.address && touched.address ? "input-error" : "input_auth"}
      />
      {errors.address && touched.address && <p className="error">{errors.address}</p>}
      <button className="submit_auth" disabled={isSubmitting} type="submit">
        Submit
      </button>
    </form>
  );
};
export default Register;


