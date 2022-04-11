import { useEffect, useState } from "react";
import axios from "axios";
import { API_URI } from "../../const";
import { BookGrid } from "../../component/BookGrid";
import { SearchForm } from "../../component/SearchForm";
import { useSearchParams } from "react-router-dom";
import { Pagination } from "../../component/Pagination";

export function BooksPage() {
  const [books, setBooks] = useState({ books: [], total: 0 });
  const [queryParams] = useSearchParams({ page: 1, query: "" });
  const [curPage, setCurPage] = useState(1);
  const [perPage] = useState(3);

  useEffect(() => {
    console.log(queryParams.get("page"));
    axios.get(API_URI + `book?limit=${perPage}&query=${queryParams.get("query")}`).then((res) => {
      setBooks({ books: res.data.books, total: res.data.totalCount });
    });
  }, []);

  useEffect(() => {
    axios.get(API_URI + `book?limit=${perPage}&query=${queryParams.get("query")}&skip=${perPage * curPage - perPage}`).then((res) => {
      setBooks({ books: res.data.books, total: res.data.totalCount });
    });
  }, [curPage, queryParams, perPage]);

  const paginate = (pageNumber) => {
    setCurPage(pageNumber);
  };

  return (
    <>
      <SearchForm resource="book" value={queryParams.get("query")} />
      {/*BOOKS*/}
      <div className="row tm-row">
        {books.books.map((book) => (
          <BookGrid book={book} key={book._id} />
        ))}
      </div>
      <Pagination perPage={perPage} total={books.total} paginate={paginate} page={curPage} />
    </>
  );
}
