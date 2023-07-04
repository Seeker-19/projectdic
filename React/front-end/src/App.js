// import './App.css'

import Login from "./components/Login";
import Signup from "./components/Signup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import img from "./2.png";
import Navbar from "./components/Navbar";
import Syllabus from "./components/Syllabus";
import Syllab from "./components/Syllab";
import Home from "./components/pages/home";
import Campus from "./components/pages/campus";
import Academic from "./components/pages/academic";
import Stats from "./components/pages/stats";
import Form from "./components/pages/form";
import Contact from "./components/pages/contact";

function App() {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#00c6bc";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "#9af2ee";
    }
  };
  let newdate, time;
  const dateopt = {
    weekday: "long",
    year: "numeric",
    day: "numeric",
    month: "long",
  };
  setInterval(() => {
    const date = new Date();
    newdate = date.toLocaleDateString(undefined, dateopt);

    time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    const el = document.getElementById("headingfive");
    if (el) {
      el.innerHTML = newdate + "<br>Time:&nbsp" + time;
    } else {
      console.log("element not found");
    }
  }, 1000);

  const ele = document.getElementById("headingfive");

  if (ele) {
    ele.style = "margin:0";
  } else {
    console.log("element not found");
  }
  return (
    <div>
      <h5
        id="headingfive"
        style={{ fontWeight: "bold", margin: "0.8rem 0.8rem" }}
      ></h5>
      <div className="container">
        <div className="icon">
          <img src={img} style={{ width: "108px", height: "108px" }}></img>
        </div>
        <div className="heading">
          <p className="title">The School of Excellence in Engineering</p>
          <p className="addre">New Delhi-160045|India</p>
        </div>
      </div>
      <Router>
        <Navbar
          title="Engineering School"
          aboutText="About"
          mode={mode}
          toggleMode={toggleMode}
        />

        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home mode={mode} />} />
          <Route path="/campus" element={<Campus mode={mode} />} />
          <Route path="/academic" element={<Academic mode={mode} />} />
          <Route path="/stats" element={<Stats mode={mode} />} />
          <Route path="/form" element={<Form mode={mode} />} />
          <Route path="/contact" element={<Contact mode={mode} />} />
          <Route path="/syllab" element={<Syllab mode={mode} />} />
          <Route path="/mission" element={<Syllabus mode={mode} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
