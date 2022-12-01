import "./Navigation.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Navigation = () => {
  const [user, setUser] = useState({});

  // check if user logged in
  const getProfile = () => {
    fetch("/getusers")
      .then((res) => res.json())
      .then((user) => {
        console.log("get user success");
        setUser(user);
      })
      .catch(() => {
        console.log("get user fail!!!!");
        setUser({});
      });
  };
  useEffect(getProfile, []);
//   really like your navigation link has a style that changes color when hover
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark navbar-color">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand logo nav-link">
            E-connect
          </Link>
          <button
            className="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            type="button"
            aria-controls="navbarText"
            aria-expanded="false"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse submenu" id="navbarText">
            <ul className="navbar-nav me-auto mb-lg-0">
              <li className="nav-item">
                <Link to="/search" className="nav-link">
                  Search
                  <img
                    className="search-icon"
                    src="images/search-icon.png"
                    alt="search-icon"
                  />
                </Link>
              </li>
//     For the login and signup link here, can also use a logic if the user is logged in, not showing up.
              <li className="nav-item">
                <Link to="/login" className="nav-link">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/signup" className="nav-link">
                  Signup
                </Link>
              </li>
              {user !== {} ? (
                <li className="nav-item">
                  <Link to="/profile" className="nav-link">
                    Profile
                  </Link>
                </li>
              ) : (
                ""
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
Navigation.propTypes = {};
export default Navigation;
