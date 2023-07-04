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
        .post("http://localhost:8000/", {
          email,
          password,
        })
        .then((res) => {
          if (res.data == "exist") {
            history("/home", { state: { id: email } });
          } else if (res.data == "notexist") {
            alert("User have not sign up");
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
      <h1>Login</h1>

      <form action="POST" className="formone">
        <p className="lab">
          <label className="label">E-mail: </label>
          <input
            className="input"
            style={{ marginLeft: "6px" }}
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
            className="input"
            style={{ marginLeft: "6px" }}
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

      <Link to="/signup">Signup Page</Link>
    </div>
  );
}

export default Login;
