import React, { useState } from "react";
import { useNavigate ,Link } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleLogin = (e) => {
    e.preventDefault();
    const loggeduser = JSON.parse(localStorage.getItem("user"));
    if (
      input.email === loggeduser.email &&
      input.password === loggeduser.password
    ) {
      localStorage.setItem("loggedin", true);
      navigate("/");
    } else {
      alert("Invalid Credential!");
    }
  };

  return (
    <>
      <div className="main">
        <div className="header">
          <h1>Login Form</h1>
          <hr />
        </div>
        <div className="form">
          <form onSubmit={handleLogin}>
            <label for="email">Email </label> <br />
            <input
              type="email"
              placeholder="Enter your Email"
              name="email"
              value={input.email}
              onChange={(e) =>
                setInput({ ...input, [e.target.name]: e.target.value })
              }
              id="email"
              required
            />
            <br />
            <label for="password">Password </label> <br />
            <input
              type="password"
              placeholder="Enter Your Password"
              name="password"
              value={input.password}
              onChange={(e) =>
                setInput({ ...input, [e.target.name]: e.target.value })
              }
              id="password"
              required
            />
            <br />
            <hr />
            <button type="submit" className="register">
              Sign In
            </button>
            <div className="sigin">
              <p>
                Don't have an account ? <Link to="/register" >Register here</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
