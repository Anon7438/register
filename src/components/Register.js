import React, { useState } from "react";
import { useNavigate , Link } from "react-router-dom";
import "./react.css";


const Register = () => {

  const navigate = useNavigate();
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });



  const handleSubmit =(e) =>{
    e.preventDefault();
    localStorage.setItem("user",JSON.stringify(input));
    navigate("/login");

  };

  return (
    <>
      <div className="main">
        <div className="header">
          <h1>Registration Form</h1>
          <hr />
        </div>
        <div className="form">
          <form onSubmit={handleSubmit}>
            <label for="name">Name </label> <br />
            <input
              type="text"
              placeholder="Enter Your Name"
              name="name"
              value={input.name}
              onChange={(e) =>
                setInput({ ...input, [e.target.name]: e.target.value })
              }
              id="name"
              required
            />{" "}
            <br />
            <label for="email">Email </label> <br />
            <input
              type="email"
              placeholder="Enter your Email"
              name="email"
              value={input.email}
              onChange={(e)=>setInput({...input,[e.target.name]:e.target.value}) }
              id="email"
              required
            />{" "}
            <br />
            <label for="password">Password </label> <br />
            <input
              type="password"
              placeholder="Enter Your Password"
              name="password"
              value={input.password}
              onChange={(e)=>setInput({...input,[e.target.name]:e.target.value}) }
              id="password"
              required
            />{" "}
            <br />
            <hr></hr>
            <button type="submit" className="register">
              Register
            </button>
            <div className="sigin">
              <p>
                Already have an account ? <Link to="/login">Sign in</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
