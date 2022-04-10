import { API_URI, BASE_URI } from "../const";
import { Link } from "react-router-dom";

export function AuthorList(props) {
  return (
    <div>
      {props.author.name} | {props.author._id} | {props.author.description}
      <img src={API_URI + props.author.image} alt="" /> <Link to={props.author._id}>Author</Link>
    </div>
  );
}
