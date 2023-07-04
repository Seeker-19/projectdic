import React from "react";
import { Link } from "react-router-dom";
export default function Syllab(props) {
  const Data = [
    {
      id: 1,
      code: "CS 501",
      course: "Data Communication and Networks",
      marks: 100,
      practical: 50,
    },
    {
      id: 2,
      code: "CS 501",
      course: "Data Communication and Networks",
      marks: 100,
      practical: 50,
    },
    {
      id: 3,
      code: "CS 501",
      course: "Data Communication and Networks",
      marks: 100,
      practical: 50,
    },
    {
      id: 4,
      code: "CS 501",
      course: "Data Communication and Networks",
      marks: 100,
      practical: 50,
    },
    {
      id: 5,
      code: "CS 501",
      course: "Data Communication and Networks",
      marks: 100,
      practical: 50,
    },
    {
      id: 6,
      code: "CS 501",
      course: "Data Communication and Networks",
      marks: 100,
      practical: 50,
    },
  ];
  return (
    <div>
      <h1>Full Scheme- 5th semester</h1>
      <div style={{ width: "98%", marginLeft: "1rem" }}>
        <h2
          style={{
            color: props.mode === "dark" ? "black" : "green",
            textAlign: "center",
            marginTop: "3rem",
            textDecoration: "underline",
          }}
        >
          Computer Science
        </h2>
        <table style={{ marginTop: "1.5rem" }}>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Paper Code</th>
              <th>Course Name</th>
              <th>University Assessment</th>
              <th>Practical Marks</th>
            </tr>
          </thead>
          <tbody>
            {/*{Data.map((row) => {
              <tr key={row.id}>
                <td>{row.id}</td>
                <td>{row.code}</td>
                <td>{row.course}</td>
                <td>{row.marks}</td>
                <td>{row.practical}</td>
              </tr>;
            })}*/}
            <tr>
              <td>1</td>
              <td>CS 501</td>
              <td>Data Communication and Networks</td>
              <td>100</td>
              <td>Null</td>
            </tr>
            <tr>
              <td>2</td>
              <td>CS 551</td>
              <td>Technical Communication and Soft Skills (Practical)</td>
              <td>100</td>
              <td>Null</td>
            </tr>
            <tr>
              <td>3</td>
              <td>CS 502</td>
              <td>Computer Graphics</td>
              <td>100</td>
              <td>50</td>
            </tr>
            <tr>
              <td>4</td>
              <td>CS 504</td>
              <td>Principle of Programming Languages</td>
              <td>100</td>
              <td>50</td>
            </tr>
            <tr>
              <td>5</td>
              <td>CS 505 </td>
              <td>Theory of Computation</td>
              <td>100</td>
              <td>50</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div style={{ width: "98%", marginLeft: "1rem" }}>
        <h2
          style={{
            color: props.mode === "dark" ? "black" : "green",
            textAlign: "center",
            marginTop: "3rem",
            textDecoration: "underline",
          }}
        >
          Information Technology
        </h2>
        <table style={{ marginTop: "1.5rem" }}>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Paper Code</th>
              <th>Course Name</th>
              <th>University Assessment</th>
              <th>Practical Marks</th>
            </tr>
          </thead>
          <tbody>
            {/*{Data.map((row) => {
              <tr key={row.id}>
                <td>{row.id}</td>
                <td>{row.code}</td>
                <td>{row.course}</td>
                <td>{row.marks}</td>
                <td>{row.practical}</td>
              </tr>;
            })}*/}
            <tr>
              <td>1</td>
              <td>IT 501 </td>
              <td>Database Management System</td>
              <td>100</td>
              <td>50</td>
            </tr>
            <tr>
              <td>2</td>
              <td>IT 502</td>
              <td>Wireless Communication Technologies</td>
              <td>100</td>
              <td>50</td>
            </tr>
            <tr>
              <td>3</td>
              <td>IT 503</td>
              <td>Network Security and Cryptography</td>
              <td>100</td>
              <td>Null</td>
            </tr>
            <tr>
              <td>4</td>
              <td>IT 504 </td>
              <td>Design and Analysis of Algorithms</td>
              <td>100</td>
              <td>50</td>
            </tr>
            <tr>
              <td>5</td>
              <td>IT 601 </td>
              <td>Data Warehouse and Data Mining</td>
              <td>100</td>
              <td>50</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div style={{ width: "98%", marginLeft: "1rem" }}>
        <h2
          style={{
            color: props.mode === "dark" ? "black" : "green",
            textAlign: "center",
            marginTop: "3rem",
            textDecoration: "underline",
          }}
        >
          Electronics & Communication
        </h2>
        <table style={{ marginTop: "1.5rem" }}>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Paper Code</th>
              <th>Course Name</th>
              <th>University Assessment</th>
              <th>Practical Marks</th>
            </tr>
          </thead>
          <tbody>
            {/*{Data.map((row) => {
              <tr key={row.id}>
                <td>{row.id}</td>
                <td>{row.code}</td>
                <td>{row.course}</td>
                <td>{row.marks}</td>
                <td>{row.practical}</td>
              </tr>;
            })}*/}
            <tr>
              <td>1</td>
              <td>EC 710</td>
              <td>Wireless & Mobile Communication</td>
              <td>100</td>
              <td>50</td>
            </tr>
            <tr>
              <td>2</td>
              <td>EC 701</td>
              <td>Embedded System Design </td>
              <td>100</td>
              <td>50</td>
            </tr>
            <tr>
              <td>3</td>
              <td>EC 501</td>
              <td>VLSI Design </td>
              <td>100</td>
              <td>NULL</td>
            </tr>
            <tr>
              <td>4</td>
              <td>EC 502</td>
              <td>Digital Signal Processing </td>
              <td>100</td>
              <td>NULL</td>
            </tr>
            <tr>
              <td>5</td>
              <td>EC 503 </td>
              <td>Antennas & Wave Propagation</td>
              <td>100</td>
              <td>50</td>
            </tr>
          </tbody>
        </table>
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
