import React, { useState } from "react";
import "./Register.css";

const Register = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const gohome = () => {
    window.location.href = window.location.origin;
  };

  const register = async (e) => {
    e.preventDefault();
    let register_url = window.location.origin + "/djangoapp/register";
    
    const res = await fetch(register_url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            "userName": userName,
            "password": password,
            "firstName": firstName,
            "lastName": lastName,
            "email": email
        }),
    });

    const json = await res.json();
    if (json.status) {
        sessionStorage.setItem('username', json.userName);
        window.location.href = window.location.origin;
    } else if (json.error === "Already Registered") {
      alert("The user with same username is already registered");
      window.location.href = window.location.origin;
    }
  };

  return (
    <div className="register_container" style={{ width: "50%", margin: "auto", marginTop: "5%" }}>
      <div className="header" style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
        <span className="text" style={{ flexGrow: "1", fontSize: "24px", fontWeight: "bold" }}>Sign Up</span>
        <div style={{ display: "flex", flexDirection: "row", justifySelf: "end", alignSelf: "start" }}>
          <a href="/" onClick={(e) => { e.preventDefault(); gohome(); }} style={{ justifyContent: "space-between", alignItems: "flex-end" }}>
            X
          </a>
        </div>
      </div>
      <hr />

      <form onSubmit={register}>
        <div className="inputs">
          <div className="input" style={{ marginBottom: "15px" }}>
            <input 
              type="text" 
              name="userName" 
              placeholder="Username" 
              className="input_field" 
              onChange={(e) => setUserName(e.target.value)} 
              required 
            />
          </div>
          
          <div className="input" style={{ marginBottom: "15px" }}>
            <input 
              type="text" 
              name="firstName" 
              placeholder="First Name" 
              className="input_field" 
              onChange={(e) => setFirstName(e.target.value)} 
              required 
            />
          </div>
          
          <div className="input" style={{ marginBottom: "15px" }}>
            <input 
              type="text" 
              name="lastName" 
              placeholder="Last Name" 
              className="input_field" 
              onChange={(e) => setLastName(e.target.value)} 
              required 
            />
          </div>
          
          <div className="input" style={{ marginBottom: "15px" }}>
            <input 
              type="email" 
              name="email" 
              placeholder="Email" 
              className="input_field" 
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
          </div>
          
          <div className="input" style={{ marginBottom: "15px" }}>
            <input 
              name="psw" 
              type="password" 
              placeholder="Password" 
              className="input_field" 
              onChange={(e) => setPassword(e.target.value)} 
              required 
            />
          </div>
        </div>
        
        <div className="submit_panel" style={{ marginTop: "20px" }}>
          <button className="submit" type="submit">Register</button>
        </div>
      </form>
    </div>
  );
};

export default Register;
