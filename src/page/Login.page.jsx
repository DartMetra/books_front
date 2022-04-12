import { useLocation, useNavigate } from "react-router-dom";

import { useContext, useEffect, useState } from "react";
import { Context } from "..";

export function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { store } = useContext(Context);

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="mb-5 tm-comment-form"
      >
        <h2 className="tm-color-primary tm-post-title mb-4">Авторизація</h2>
        <div className="mb-4">
          <input className="form-control" onChange={(e) => setEmail(e.target.value)} placeholder="Email" value={email} type="text" />
        </div>
        <div className="mb-4">
          <input className="form-control" onChange={(e) => setPassword(e.target.value)} placeholder="Password" value={password} type="password" />
        </div>
        <div className="mb-4"></div>
        <div className="text-center">
          <button
            className="tm-btn tm-btn-primary tm-btn-small"
            onClick={() => {
              store.login(email, password);
              navigate("/");
            }}
          >
            Ввійти
          </button>
          <button
            className="tm-btn tm-btn-primary ml-5 tm-btn-small"
            onClick={() => {
              store.registration(email, password);
              navigate("/");
            }}
          >
            Регістрація
          </button>
        </div>
      </form>
    </div>
  );
}
