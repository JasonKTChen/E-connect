import "./CreateCardForm.css";

const CreateCardForm = () => {
  return (
    <>
      <form className="createCard mx-5 my-4 px-3">
        <h3>Create new card</h3>
        <div className="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          ></input>
          <small id="emailHelp" class="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          ></input>
        </div>

        <div className="form-group">
          <label for="exampleFormControlFile1">Example file input</label>
          <input
            type="file"
            className="form-control-file"
            id="exampleFormControlFile1"
          ></input>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};

export default CreateCardForm;
