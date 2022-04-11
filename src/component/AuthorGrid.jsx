import { Link } from "react-router-dom";
import { API_URI } from "../const";

export function AuthorGrid({ author }) {
  return (
    <article className="col-12 col-md-6 tm-post">
      <hr className="tm-hr-primary" />
      <Link to={author._id}>
        <span className=" tm-post-link ">
          <div className="center">
            <img src={API_URI + author.image} alt={author._id} className="img" />
          </div>

          <h2 className="tm-pt-30 tm-color-primary tm-post-title">{author.title}</h2>
        </span>
      </Link>

      <div className="d-flex justify-content-between tm-pt-45">
        <span className="tm-color-primary">
          <Link to={"/author/" + author._id}>{author.name}</Link>
        </span>
        <span className="tm-color-primary"></span>
      </div>
      <hr />
    </article>
  );
}
