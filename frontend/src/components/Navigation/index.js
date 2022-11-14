import "./Navigation.css";
import { Link } from "react-router-dom";

const Navigation = () => {
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
                </Link>
              </li>
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
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navigation;
