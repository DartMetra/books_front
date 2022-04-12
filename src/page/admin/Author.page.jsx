import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { API_URI } from "../../const";
import { SearchForm } from "../../component/SearchForm";
import $api from "../../http";

export function AuthorAdminPage() {
  const param = useParams();
  const [author, setAuthor] = useState({});
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    axios.get(API_URI + "author/" + param.id).then((res) => {
      setAuthor(res.data);
      console.log(author);
      setLoading(false);
    });
  }, []);

  function handleDelete() {
    $api.delete("author/" + author._id);
    navigate("/admin/author");
  }

  return (
    <>
      {loading ? (
        "LOADING"
      ) : (
        <>
          <SearchForm resource="author" />
          <div class="row tm-row">
            <div class="col-12">
              <hr class="tm-hr-primary tm-mb-55" />
              <button class="tm-btn tm-btn-primary tm-btn-small mb-5" onClick={handleDelete}>
                Видалити
              </button>
            </div>
          </div>
          <div class="row tm-row">
            <div class="col-lg-8 tm-post-col">
              <div class="tm-post-full">
                <div class="mb-4">
                  <img src={API_URI + author.image} alt={author?.name} class="float-right ml-2" />
                  <h2 class="pt-2 tm-color-primary tm-post-title">{author?.name}</h2>

                  <p>{author?.description}</p>

                  <span class="d-block text-right tm-color-primary">{author?.author?.name}</span>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
