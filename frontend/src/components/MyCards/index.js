import "./MyCards.css";
import Card from "../Card";

const MyCards = () => {
  return (
    <>
      <div className="row py-3 mx-5">
        <h3 className="p-3">Your Cards</h3>
        <div className="col-sm-3">
          <Card />
        </div>
        <div className="col-sm-3">
          <Card />
        </div>
        <div className="col-sm-3">
          <Card />
        </div>
        <div className="col-sm-3">
          <Card />
        </div>
        <div className="col-sm-3">
          <Card />
        </div>
      </div>
    </>
  );
};

export default MyCards;
