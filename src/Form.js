import "./Form.css";

export default function Form() {
  return (
    <form className="Search-form">
      <div className="row">
        <div className="col-sm-8 pb-2">
          <input
            type="search"
            placeholder="Type a city..."
            className="form-control"
            autocomplete="off"
          />
        </div>
        <div className="col-sm-3 pb-2">
          <input
            type="submit"
            value="search"
            className="btn btn-primary w-100"
          />
        </div>
      </div>
    </form>
  );
}
