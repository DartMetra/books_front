import { Link } from "react-router-dom";
import { API_URI } from "../const";
import $api from "../http";

export function BookGrid({ book, pre }) {
  function addToFavorite() {
    $api.post("user/favorite", { _id: book._id });
  }

  return (
    <article className="col-12 col-md-6 tm-post">
      <hr className="tm-hr-primary" />
      <Link to={pre ? pre + book?._id : book?._id}>
        <span className=" tm-post-link ">
          <div className="center">
            <img src={API_URI + book?.image} alt={book?._id} className="img" />
          </div>

          <h2 className="tm-pt-30 tm-color-primary tm-post-title">{book?.title}</h2>
        </span>
      </Link>

      <div className="d-flex justify-content-between tm-pt-45">
        <span className="tm-color-primary">
          <Link to={"/author/" + book?.author?._id}>{book?.author?.name}</Link>
        </span>
        <span className="tm-color-primary">{new Date(book?.date)?.getFullYear()}</span>
      </div>
      <hr />
      <div className="d-flex justify-content-between">
        <span>
          <button className="btn btn-small btn-primary" onClick={addToFavorite}>
            <i className="fa fa-star"></i>
          </button>
        </span>
        <span>{book?.publisher?.name}</span>
      </div>
    </article>
  );
}
