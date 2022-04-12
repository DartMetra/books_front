import { useLocation, useNavigate } from "react-router-dom";

import { useContext, useEffect, useState } from "react";
import { Context } from "..";
import $api from "../http";

export function AddPublisher() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const navigate = useNavigate();
  const { store } = useContext(Context);

  function handleSubmit(e) {
    e.preventDefault();
    const data = new FormData();
    data.append("name", name);
    data.append("description", description);
    data.append("image", image);

    $api
      .post("publisher", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res.data);
        navigate("/admin/publisher");
      });
  }

  return (
    <div>
      <form onSubmit={handleSubmit} class="mb-5 tm-comment-form">
        <h2 class="tm-color-primary tm-post-title mb-4">Додати видавництво</h2>
        <div class="mb-4">
          <input class="form-control" required onChange={(e) => setImage(e.target.files[0])} type="file" />
        </div>
        <div class="mb-4">
          <input class="form-control" required onChange={(e) => setName(e.target.value)} placeholder="Ім'я" value={name} type="text" />
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
