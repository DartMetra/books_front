import { API_URI } from "../../const";
import { useEffect, useState } from "react";
import axios from "axios";
import { AuthorList } from "../../component/AuthorList";

export function AuthorsPage() {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    axios.get(API_URI + "author").then((res) => {
      console.log(res.data);
      setAuthors(res.data.authors);
    });
  }, []);

  function update() {
    axios.get(API_URI + "author").then((res) => {
      console.log(res.data);
    });
  }

  return (
    <div>
      Authors<button onClick={update}></button>
      <div>
        {authors.map((author) => (
          <AuthorList key={author._id} author={author} />
        ))}
      </div>
    </div>
  );
}
