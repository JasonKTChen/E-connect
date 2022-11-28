import "./search.css";
import Card from "../../components/Card";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

const SearchScreen = () => {
  return (
    <div>
      <Navigation />
      <div className="row">
        <div className="col-1">
          <ul className="vertical-bar">
            <li>popular search</li>
            <li>
              <a className="active" href="#home">
                SDW
              </a>
            </li>
            <li>
              <a href="#news">DS</a>
            </li>
            <li>
              <a href="#contact">DA</a>
            </li>
            <li>
              <a href="#about">BA</a>
            </li>
          </ul>
        </div>
        <div className="col-10 pt-5 search-bar">
          <div className="search-input m-5">
            <input type="text" placeholder="Search Cards..."></input>
            <button className="search-button mx-3">Search</button>
          </div>
          <div className="search-result px-5">
            <div className="row">
              <div className="col-3">
                <Card />
              </div>
              <div className="col-3">
                <Card />
              </div>
              <div className="col-3">
                <Card />
              </div>
              <div className="col-3">
                <Card />
              </div>
              <div className="col-3">
                <Card />
              </div>
              <div className="col-3">
                <Card />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};
export default SearchScreen;
