import { useState } from "react";
import React from "react";
import image from "./image.jpg";
import ReactDOM from "react-dom/client";
import { Link } from "react-router-dom";
function Syllabus(props) {
  const [syllabus, setSyllab] = useState("false");

  const syllabi = [
    {
      id: 1,
      name: "Computer Science",
    },
    {
      id: 2,
      name: "Information Technology",
    },
    {
      id: 3,
      name: "Electronics & Communication",
    },
  ];
  let d = document.getElementsByClassName("division");
  const handClick = () => {
    alert("button clicked");
    if (syllabus === "false") {
      setSyllab("true");
      d[0].style.visibility = "hidden";
    } else {
      setSyllab("false");
      d[0].style.visibility = "unset";
    }
  };

  return (
    <div>
      <h1>Syllabi</h1>
      <div
        className="card"
        style={{ width: "40rem", margin: "0 auto", marginTop: "2rem" }}
      >
        <img className="card-img-top" src={image} alt="Card image cap" />

        <div
          className="card-body"
          style={{
            backgroundColor: props.mode === "dark" ? "aqua" : "white",
          }}
        >
          <div className="card-text">
            <h2
              style={{
                textAlign: "center",
                color: "purple",
                textDecoration: "underline",
              }}
            >
              Subjects
            </h2>
            <div className="division">
              <ul type="disc">
                {syllabi.map((ele) => (
                  <li
                    style={{
                      color: "blue",
                      fontSize: "1.5rem",
                      marginTop: "1rem",
                    }}
                    key={ele.id}
                  >
                    {ele.name}
                  </li>
                ))}
              </ul>
            </div>
            <button
              style={{ marginLeft: "15rem", marginTop: "2rem" }}
              type="button"
              className="btn btn-primary"
              onClick={handClick}
            >
              {syllabus === "true" ? "Show" : "Hide"}
            </button>
          </div>
        </div>
      </div>
      <h1 id="mission">Vision & Mission</h1>
      <div className="librar">
        <h3 style={{ fontWeight: "bold", margin: "1rem 2rem" }}>Vision:</h3>
        <p>
          To impart knowledge of Electrical and Electronics Engineering and
          prepare graduates to achieve excellence in engineering education and
          research.
        </p>
        <h3 style={{ fontWeight: "bold", margin: "1rem 2rem" }}>Mission:</h3>
        <ul type="disc">
          <li>
            <p style={{ marginLeft: 0 }}>
              To prepare students with deep understanding of fundamentals of
              Electrical and Electronics Engineering.
            </p>
          </li>
          <li>
            <p style={{ marginLeft: 0 }}>
              To prepare professionals with positive attitude, values and
              vision.
            </p>
          </li>
          <li>
            <p style={{ marginLeft: 0 }}>
              To collaborate with industry, research organizations and academia
              to encourage innovation.
            </p>
          </li>
          <li>
            <p style={{ marginLeft: 0 }}>
              To provide a platform for engineering graduates to create and
              design new products and systems that can help industry and society
              as a whole.
            </p>
          </li>
        </ul>
      </div>
      <h1 style={{ color: "green", marginTop: "3rem" }}>
        Thankyou for visiting !!!
      </h1>
      <Link to="/home">
        <button style={{ marginTop: "5%" }} className="button">
          Return
        </button>
      </Link>
    </div>
  );
}
export default Syllabus;
