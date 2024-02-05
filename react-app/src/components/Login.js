import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Profile from "./Profile";
// import { useForm } from "react-hook-form";
import Header from "./Header";
import Footer from "./Footer";

const Login = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const { email, password } = inputValue;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
    // Clear the corresponding error when user starts typing
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    if (!email) {
      newErrors.email = "Email is required";
      isValid = false;
    }

    if (!password) {
      newErrors.password = "Password is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });

  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-left",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      // If form is not valid, return early
      return;
    }

    try {
      const { data } = await axios.post(
        "http://localhost:7300/api/users/auth",
        {
          ...inputValue,
        },
        { withCredentials: true }
      );

      console.log(data);
      const { success, message } = data;

      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          navigate("/home"); //profile code
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      
    }
    setInputValue({
      ...inputValue,
      email: "",
      password: "",
    });
  };
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogout = () => {
    // Implement the logout logic, e.g., clear user session, reset login state
    setIsLoggedIn(false);
    navigate("/"); // Redirect to the login page or another route after logout
  };

  const handleLoginClick = () => {
    // Handle the login logic here
    // Once the user has successfully logged in, set the state variable to true
    setIsLoggedIn(true);
  };


  return (
    <>
    <Header/>
    <div className="form_container">

      {isLoggedIn ? <Profile handleLogout={handleLogout} /> : (
        <>
          <h2>Login Account</h2>
          <form onSubmit={handleSubmit} id="form">
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                value={email}
                placeholder="Enter your email"
                onChange={handleOnChange}
              />
              {errors.email && <span className="error" style={{"color":"red"}}>{errors.email}</span>}
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                value={password}
                placeholder="Enter your password"
                onChange={handleOnChange}
              />
              {errors.password && <span className="error"  style={{"color":"red"}}>{errors.password}</span>}
            </div>
            <button type="submit">Submit</button>
            {/* <button onClick={handleLoginClick}>
      {isLoggedIn ? "home" : "Login"}
    </button> */}
            <span>
              Already don't have an account? <a href="/signup">SignUp</a>
            </span>
          </form>
          <ToastContainer />
        </>
      )}
    </div>
    <Footer/>
    </>
  );
      };

  export default Login;