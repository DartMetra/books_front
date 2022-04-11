import { Link } from "react-router-dom";
import { API_URI } from "../const";

export function BookGrid({ book }) {
  return (
    <article className="col-12 col-md-6 tm-post">
      <hr className="tm-hr-primary" />
      <Link to={"/book/" + book._id}>
        <span className=" tm-post-link ">
          <div className="center">
            <img src={API_URI + book.image} alt={book._id} className="img" />
          </div>

          <h2 className="tm-pt-30 tm-color-primary tm-post-title">{book.title}</h2>
        </span>
      </Link>

      <div className="d-flex justify-content-between tm-pt-45">
        <span className="tm-color-primary">
          <Link to={"/author/" + book.author._id}>{book.author.name}</Link>
        </span>
        <span className="tm-color-primary">{new Date(book.date).getFullYear()}</span>
      </div>
      <hr />
      <div className="d-flex justify-content-between">
        <span>36 comments</span>
        <span>
          <Link to={"/publisher/" + book.publisher._id}>{book.publisher.name}</Link>
        </span>
      </div>
    </article>
  );
}
