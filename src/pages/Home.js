import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const userName = JSON.parse(localStorage.getItem("user"));
  const handleLogout =()=>{
    localStorage.removeItem("loggedin")
    navigate("/login")
  }

  return (
    <>
      <div className="main">
        <div className="header">
          <h1>HomePage</h1>
          <hr />
         </div> 

          <div className="form">
        <h1>
          Hello {userName.name} <br />
          welcome to our homepage!
        </h1>
        <hr />
        </div>
        <button onClick={handleLogout} type="submit" className="register">
              Logout
            </button>
        
      </div>
    </>
  );
};

export default Home;
