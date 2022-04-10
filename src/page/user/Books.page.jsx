import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { API_URI } from "../../const";
import { BookList } from "../../component/BookList";

export function BooksPage() {
  const [books, setAuthors] = useState([]);

  useEffect(() => {
    axios.get(API_URI + "book").then((res) => {
      console.log(res.data);
      setAuthors(res.data.books);
    });
  }, []);

  return (
    <div>
      Books
      <div>
        {books.map((book) => (
          <BookList key={book._id} book={book} />
        ))}
      </div>
    </div>
  );
}
