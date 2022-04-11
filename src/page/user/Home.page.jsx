import { useEffect, useState } from "react";
import axios from "axios";
import { API_URI } from "../../const";
import { BookGrid } from "../../component/BookGrid";
import { SearchForm } from "../../component/SearchForm";

export function UserHomePage() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    document.title = "Rotten Mandarines";
    axios.get(API_URI + "book?limit=10").then((res) => {
      setBooks(res.data.books);
      console.log(res.data);
    });
  }, []);

  return (
    <>
      <SearchForm resource="book" />
      {/*BOOKS*/}
      <div class="row tm-row">
        {books.map((book) => (
          <BookGrid book={book} key={book._id} />
        ))}
      </div>
    </>
  );
}
