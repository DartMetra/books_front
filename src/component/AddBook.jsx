import { useLocation, useNavigate } from "react-router-dom";

import { useContext, useEffect, useState } from "react";
import { Context } from "..";
import $api from "../http";

export function AddBook() {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [genre, setGenre] = useState([]);
  const [genres, setGenres] = useState([]);
  const [image, setImage] = useState("");
  const [author, setAuthor] = useState("");
  const [authors, setAuthors] = useState([]);
  const navigate = useNavigate();
  const { store } = useContext(Context);
  useEffect(() => {
    $api.get("author").then((res) => {
      setAuthors(res.data.authors);
    });
  }, []);

  useEffect(() => {
    $api.get("genre").then((res) => {
      setGenres(res.data.genres);
    });
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    const data = new FormData();
    data.append("title", title);
    data.append("description", description);
    data.append("image", image);
    data.append("date", new Date(date).getFullYear());
    genre.map((e) => data.append("genres[]", e));
    data.append("author", author);

    $api
      .post("book", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res.data);
        navigate("/admin/book");
      });
  }

  return (
    <div>
      <form onSubmit={handleSubmit} class="mb-5 tm-comment-form">
        <h2 class="tm-color-primary tm-post-title mb-4">Додати книгу</h2>
        <div class="mb-4">
          <input class="form-control" required onChange={(e) => setImage(e.target.files[0])} type="file" />
        </div>
        <div class="mb-4">
          <input class="form-control" required onChange={(e) => setTitle(e.target.value)} placeholder="Назва" value={title} type="text" />
        </div>{" "}
        <div class="mb-4">
          <input class="form-control" required onChange={(e) => setDate(e.target.value)} placeholder="Дата публікації" value={date} type="date" />
        </div>
        <div class="mb-4">
          {" "}
          <span>Жанри</span>
          <select
            size="5"
            class="form-control"
            multiple
            onChange={(e) => {
              let options = e.target.options;
              let value = [];
              for (var i = 0, l = options.length; i < l; i++) {
                if (options[i].selected) {
                  value.push(options[i].value);
                }
              }
              setGenre(value);
            }}
          >
            {genres?.map((e) => (
              <option value={e._id}>{e.title}</option>
            ))}
          </select>
        </div>
        <div class="mb-4">
          {" "}
          <span>Автор</span>
          <select
            size="3"
            class="form-control"
            onChange={(e) => {
              let options = e.target.options;
              let value = [];
              for (var i = 0, l = options.length; i < l; i++) {
                if (options[i].selected) {
                  value.push(options[i].value);
                }
              }
              setAuthor(value);
            }}
          >
            {authors?.map((e) => (
              <option value={e._id}>{e.name}</option>
            ))}
          </select>
        </div>
        <div class="mb-4">
          <textarea
            class="form-control"
            placeholder="Опис"
            required
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            rows="6"
          ></textarea>
        </div>
        <div class="mb-4"></div>
        <div class="text-center">
          <button class="tm-btn tm-btn-primary tm-btn-small">Додати</button>
        </div>
      </form>
    </div>
  );
}
