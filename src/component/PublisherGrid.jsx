import { Link } from "react-router-dom";
import { API_URI } from "../const";

export function PublisherGrid({ publisher }) {
  return (
    <article className="col-12 col-md-6 tm-post">
      <hr className="tm-hr-primary" />
      <Link to={publisher._id}>
        <span className=" tm-post-link ">
          <div className="center">
            <img src={API_URI + publisher.image} alt={publisher._id} className="" />
          </div>

          <h2 className="tm-pt-30 tm-color-primary tm-post-title">{publisher.title}</h2>
        </span>
      </Link>

      <div className="d-flex justify-content-between tm-pt-45">
        <span className="tm-color-primary">
          <Link to={"/publisher/" + publisher._id}>{publisher.name}</Link>
        </span>
        <span className="tm-color-primary"></span>
      </div>
      <hr />
    </article>
  );
}
