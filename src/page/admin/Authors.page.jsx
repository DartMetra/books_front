import { useEffect, useState } from "react";
import axios from "axios";
import { API_URI } from "../../const";
import { AuthorGrid } from "../../component/AuthorGrid";
import { SearchForm } from "../../component/SearchForm";
import { useSearchParams, Link } from "react-router-dom";
import { Pagination } from "../../component/Pagination";

export function AuthorsAdminPage() {
  const [authors, setAuthors] = useState({ authors: [], total: 0 });
  const [queryParams] = useSearchParams({ page: 1, query: "" });
  const [curPage, setCurPage] = useState(1);
  const [perPage] = useState(3);

  useEffect(() => {
    axios.get(API_URI + `author?limit=${perPage}&query=${queryParams.get("query")}&skip=${perPage * curPage - perPage}`).then((res) => {
      setAuthors({ authors: res.data.authors, total: res.data.totalCount });
    });
  }, [curPage, queryParams, perPage]);

  const paginate = (pageNumber) => {
    setCurPage(pageNumber);
  };

  return (
    <>
      <SearchForm resource="author" value={queryParams.get("query")} />
      <Link to="/admin/author/create">
        <button className="tm-btn tm-btn-primary tm-btn-small">Додати автора</button>
      </Link>
      {/*BOOKS*/}
      <div className="row tm-row">
        {authors.authors.map((author) => (
          <AuthorGrid author={author} key={author._id} />
        ))}
      </div>
      <Pagination perPage={perPage} total={authors.total} paginate={paginate} page={curPage} />
    </>
  );
}
