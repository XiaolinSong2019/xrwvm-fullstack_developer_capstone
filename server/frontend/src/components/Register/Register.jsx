import React, { useState } from "react";
import "./Register.css";
import Header from "../Header/Header";

const Register = () => {
  const [userName, setUserName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register_url = window.location.origin + "/djangoapp/register";

  const register = async (e) => {
    e.preventDefault();

    const response = await fetch(register_url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        userName: userName,
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
      }),
    });

    const json = await response.json();

    if (json.status === "Authenticated") {
      sessionStorage.setItem("username", json.userName);
      window.location.href = "/";
    } else {
      alert("Registration failed. Please try again.");
    }
  };

  return (
    <div>
      <Header />

      <form className="register_container" onSubmit={register}>

        <div className="header">
          Sign Up
        </div>

        <div className="inputs">

          {/* Username */}
          <div className="input">
            <label className="input_field">
              Username
            </label>

            <input
              type="text"
              className="input_field"
              name="username"
              placeholder="Username"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              required
            />
          </div>


          {/* First Name */}
          <div className="input">
            <label className="input_field">
              First Name
            </label>

            <input
              type="text"
              className="input_field"
              name="firstName"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>


          {/* Last Name */}
          <div className="input">
            <label className="input_field">
              Last Name
            </label>

            <input
              type="text"
              className="input_field"
              name="lastName"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>


          {/* Email */}
          <div className="input">
            <label className="input_field">
              Email
            </label>

            <input
              type="email"
              className="input_field"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>


          {/* Password */}
          <div className="input">
            <label className="input_field">
              Password
            </label>

            <input
              type="password"
              className="input_field"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

        </div>


        {/* Register Button */}
        <div className="submit_panel">
          <button
            className="submit"
            type="submit"
          >
            Register
          </button>
        </div>

      </form>
    </div>
  );
};

export default Register;
