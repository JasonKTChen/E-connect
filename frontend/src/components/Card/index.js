import "./Card.css";

const Card = () => {
  return (
    <>
      <div className="card">
        <h5 className="card-header">Name</h5>
        <div className="card-body">
          <h5 className="card-title">Job title</h5>
          <p className="card-text">
            <ol className="card-details">
              <li>phone</li>
              <li>email</li>
              <li>social media</li>
              <li>address</li>
            </ol>
          </p>
          <a href="/" className="btn btn-primary mx-1 w-30">
            Update
          </a>
          <a href="/" className="btn btn-primary w-30">
            Delete
          </a>
        </div>
      </div>
    </>
  );
};

export default Card;
