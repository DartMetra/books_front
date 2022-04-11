import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { API_URI } from "../../const";
import { SearchForm } from "../../component/SearchForm";

export function AuthorPage() {
  const param = useParams();
  const [author, setAuthor] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios.get(API_URI + "author/" + param.id).then((res) => {
      setAuthor(res.data);
      console.log(author);
      setLoading(false);
    });
  }, []);

  return (
    <>
      {loading ? (
        "LOADING"
      ) : (
        <>
          <SearchForm resource="author" />
          <div className="row tm-row">
            <div className="col-12">
              <hr className="tm-hr-primary tm-mb-55" />
            </div>
          </div>
          <div className="row tm-row">
            <div className="col-lg-8 tm-post-col">
              <div className="tm-post-full">
                <div className="mb-4">
                  <img src={API_URI + author.image} alt={author?.name} className="float-right ml-2" />
                  <h2 className="pt-2 tm-color-primary tm-post-title">{author?.name}</h2>

                  <p>{author?.description}</p>

                  <span className="d-block text-right tm-color-primary">{author?.author?.name}</span>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
