import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { API_URI } from "../../const";
import { BookList } from "../../component/BookList";
import { SearchForm } from "../../component/SearchForm";

export function PublisherPage() {
  const [books, setAuthors] = useState([]);

  useEffect(() => {
    axios.get(API_URI + "publisher").then((res) => {
      console.log(res.data);
      setAuthors(res.data.books);
    });
  }, []);

  return (
    <>
      <SearchForm resource="publisher" />
      <div>
        Publishers
        <div>
          {books.map((book) => (
            <BookList key={book._id} book={book} />
          ))}
        </div>
      </div>
    </>
  );
}
