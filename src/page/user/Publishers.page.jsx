import { useEffect, useState } from "react";
import axios from "axios";
import { API_URI } from "../../const";
import { PublisherGrid } from "../../component/PublisherGrid";
import { SearchForm } from "../../component/SearchForm";
import { useSearchParams } from "react-router-dom";
import { Pagination } from "../../component/Pagination";

export function PublishersPage() {
  const [publishers, setPublishers] = useState({ publishers: [], total: 0 });
  const [queryParams] = useSearchParams({ page: 1, query: "" });
  const [curPage, setCurPage] = useState(1);
  const [perPage] = useState(3);

  useEffect(() => {
    axios.get(API_URI + `publisher?limit=${perPage}&query=${queryParams.get("query")}&skip=${perPage * curPage - perPage}`).then((res) => {
      setPublishers({ publishers: res.data.publishers, total: res.data.totalCount });
    });
  }, [curPage, queryParams, perPage]);

  const paginate = (pageNumber) => {
    setCurPage(pageNumber);
  };

  return (
    <>
      <SearchForm resource="publisher" value={queryParams.get("query")} />
      {/*BOOKS*/}
      <div className="row tm-row">
        {publishers.publishers.map((publisher) => (
          <PublisherGrid publisher={publisher} key={publisher._id} />
        ))}
      </div>
      <Pagination perPage={perPage} total={publishers.total} paginate={paginate} page={curPage} />
    </>
  );
}
