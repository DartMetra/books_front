import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import { API_URI } from "../../const";
import { SearchForm } from "../../component/SearchForm";
import { useNavigate } from "react-router-dom";
import $api from "../../http";

export function BookAdminPage() {
  const param = useParams();
  const [queryParams] = useSearchParams({ page: 1, query: "" });
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    axios.get(API_URI + "book/" + param.id).then((res) => {
      setBook(res.data);
      console.log(book);
      setLoading(false);
    });
  }, []);

  function handleDelete() {
    $api.delete("book/" + book._id);
    navigate("/admin/book");
  }

  return (
    <>
      {loading ? (
        "LOADING"
      ) : (
        <>
          <SearchForm resource="book" value={queryParams.get("query")} />
          <div className="row tm-row">
            <div className="col-12">
              <hr className="tm-hr-primary tm-mb-55" />
              <button class="tm-btn tm-btn-primary tm-btn-small mb-5" onClick={handleDelete}>
                Видалити
              </button>
            </div>
          </div>
          <div className="row tm-row">
            <div className="col-lg-8 tm-post-col">
              <div className="tm-post-full">
                <div className="mb-4">
                  <img src={API_URI + book.image} className="float-right ml-2" />
                  <h2 className="pt-2 tm-color-primary tm-post-title">{book?.title}</h2>
                  <p className="tm-mb-40">Рік видання (Україна): {new Date(book.date).getFullYear()}</p>

                  <p>{book?.description}</p>

                  <span className="d-block text-right tm-color-primary">{book?.author?.name}</span>
                </div>
              </div>
            </div>
            <aside className="col-lg-4 tm-aside-col">
              <div className="tm-post-sidebar">
                <hr className="mb-3 tm-hr-primary" />
                <h2 className="mb-4 tm-post-title tm-color-primary">Жанри</h2>
                <ul className="tm-mb-75 pl-5 tm-category-list">
                  {book?.genres?.map((genre) => (
                    <li>
                      <span className="tm-color-primary">{genre?.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </>
      )}
    </>
  );
}
