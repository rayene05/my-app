import { basicSchema2 } from "./shema/file";
import { useFormik } from "formik";
import "./form.css";
import logo from "./login.png";
import httpclient from "../httpclient.js";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    try {
      const response = await httpclient.post("//localhost:5000/login", {
        email: values.email,
        password: values.password,
      });
  
      if (response.status === 200) {
        // Login successful, navigate to user page
        
        navigate("/user");
        // Optionally set session variable or token here
      } else {
        // Handle unexpected status codes (e.g., server error)
        throw new Error("Login failed");
      }
    } catch (error) {
      console.error(error); // Log the error for debugging
      if (error.response && error.response.status === 401) {
        // Set email error for conflict
        alert("check cerdential")
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
    },
    validationSchema: basicSchema2,
    onSubmit,
  });

  return (
    <div className="container">
      <div className="generate_form">
        <div className="form-container">
          <form className="form_auth" onSubmit={handleSubmit} autoComplete="off">
            <p className="title">Login</p>
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

            <button className="submit_auth" disabled={isSubmitting} type="submit">
              Submit
            </button>
          </form>
        </div>
        <img src={logo} alt="logo" className="form-image" />
      </div>
    </div>
  );
};

export default Login;
