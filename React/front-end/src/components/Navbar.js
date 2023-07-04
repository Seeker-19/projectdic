import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg  navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" to="/home">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/campus">
                Campus
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/academic">
                Academic
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/stats">
                Stats
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/form">
                Form
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/contact">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/syllab">
                Scheme
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/mission">
                Mission
              </Link>
            </li>
            <li className="nav-item">
              {/*<Link className="nav-link active" aria-current="page" to="/">Home</Link>*/}
              <a className="nav-link active" aria-current="page" href="#"></a>
            </li>
            {/* <li className="nav-item">
          <Link className="nav-link" to="/about">{props.aboutText}</Link>
    </li>*/}
          </ul>
          {/*form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-primary" type="submit">Search</button>
    </form>*/}

          <div
            className={`form-check form-switch text-${
              props.mode === "dark" ? "light" : "dark"
            }`}
          >
            <input
              className="form-check-input"
              onClick={props.toggleMode}
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              Enable Dark Mode
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string,
  aboutText: PropTypes.string,
};
Navbar.defaultProps = {
  title: "fghjk",
  aboutText: "ghhjk",
};
export default Navbar;
