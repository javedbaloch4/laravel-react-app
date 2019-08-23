import React from "react";
import { Link } from "react-router-dom";

const Nav = props => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light react-nav ">
        <div className={"container"}>
          <Link to="/">
            <a className="navbar-brand" href="#">
              {props.logo}
            </a>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className={"nav-item"}>
                <Link to="/login" className={"nav-link"}>
                  <i className="fa fa-sign-in" />
                  &nbsp;Login
                </Link>
              </li>

              <li className={"nav-item"}>
                <Link to="/register" className={"nav-link"}>
                  <i className={"fa fa-user-plus"} />
                  &nbsp;Register
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/users" className={"nav-link"}>
                  <i className={"fa fa-list"} />
                  &nbsp;View Users
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
