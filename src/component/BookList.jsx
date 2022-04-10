import { API_URI } from "../const";

export function BookList(props) {
  return (
    <div>
      {props.book.name} | {props.book._id} | {props.book.description}
      <img src={API_URI + props.book.image} alt="" />
    </div>
  );
}
