import "./OtherCards.css";
import Card from "../Card";

const OtherCards = () => {
  return (
    <>
      <div className="row py-3 mx-5">
        <h3 className="p-3">Collections</h3>
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

export default OtherCards;
