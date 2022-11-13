import "./Navigation.css";

const Navigation = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark navbar-color">
        <div className="container-fluid">
          <a className="navbar-brand logo" href="/">
            E-connect
          </a>
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
                <a href="/" className="nav-link">
                  Search <i class="fa fa-search"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navigation;
