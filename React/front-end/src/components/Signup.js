import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const history = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function submit(e) {
    e.preventDefault();

    try {
      await axios
        .post("http://localhost:8000/signup", {
          email,
          password,
        })
        .then((res) => {
          if (res.data == "exist") {
            alert("User already exists");
          } else if (res.data == "notexist") {
            history("/home", { state: { id: email } });
          }
        })
        .catch((e) => {
          alert("wrong details");
          console.log(e);
        });
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div
      className="login"
      style={{ backgroundColor: "rgb(150, 217, 48)", marginLeft: "36%" }}
    >
      <h1>Signup</h1>

      <form action="POST" className="formone">
        <p className="lab">
          <label className="label">E-mail:</label>
          <input
            style={{ marginLeft: "10px" }}
            className="input"
            type="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="Email"
          />
        </p>
        <p className="lab">
          <label className="label">Password:</label>
          <input
            style={{ marginLeft: "10px" }}
            className="input"
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="Password"
          />
        </p>
        <button
          type="submit"
          style={{ marginLeft: "2%" }}
          className="login"
          onClick={submit}
        >
          Submit
        </button>
      </form>

      <br />
      <p>OR</p>
      <br />

      <Link to="/">Login Page</Link>
    </div>
  );
}

export default Login;
