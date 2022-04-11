import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import { API_URI } from "../../const";
import { SearchForm } from "../../component/SearchForm";

export function BookPage() {
  const param = useParams();
  const [queryParams] = useSearchParams({ page: 1, query: "" });
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios.get(API_URI + "book/" + param.id).then((res) => {
      setBook(res.data);
      console.log(book);
      setLoading(false);
    });
  }, []);

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

                <div>
                  <h2 className="tm-color-primary tm-post-title">Comments</h2>
                  <hr className="tm-hr-primary tm-mb-45" />
                  <div className="tm-comment tm-mb-45">
                    <figure className="tm-comment-figure">
                      <img src="img/comment-1.jpg" alt="Image" className="mb-2 rounded-circle img-thumbnail" />
                      <figcaption className="tm-color-primary text-center">Mark Sonny</figcaption>
                    </figure>
                    <div>
                      <p>
                        Praesent aliquam ex vel lectus ornare tritique. Nunc et eros quis enim feugiat tincidunt et vitae dui. Nullam consectetur
                        justo ac ex laoreet rhoncus. Nunc id leo pretium, faucibus sapien vel, euismod turpis.
                      </p>
                      <div className="d-flex justify-content-between">
                        <a href="#" className="tm-color-primary">
                          REPLY
                        </a>
                        <span className="tm-color-primary">June 14, 2020</span>
                      </div>
                    </div>
                  </div>

                  <form action="" className="mb-5 tm-comment-form">
                    <h2 className="tm-color-primary tm-post-title mb-4">Your comment</h2>
                    <div className="mb-4">
                      <input className="form-control" name="name" type="text" />
                    </div>
                    <div className="mb-4">
                      <input className="form-control" name="email" type="text" />
                    </div>
                    <div className="mb-4">
                      <textarea className="form-control" name="message" rows="6"></textarea>
                    </div>
                    <div className="text-right">
                      <button className="tm-btn tm-btn-primary tm-btn-small">Submit</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <aside className="col-lg-4 tm-aside-col">
              <div className="tm-post-sidebar">
                <hr className="mb-3 tm-hr-primary" />
                <h2 className="mb-4 tm-post-title tm-color-primary">Жанри</h2>
                <ul className="tm-mb-75 pl-5 tm-category-list">
                  {book?.genres?.map((genre) => (
                    <Link to={"/genre/" + genre?._id}>
                      <li>
                        <span className="tm-color-primary">{genre?.title}</span>
                      </li>
                    </Link>
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
