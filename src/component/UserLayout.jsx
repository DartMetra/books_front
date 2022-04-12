import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { CustomLink } from "./CustomLink";

import { observer } from "mobx-react-lite";
import { useContext, useEffect } from "react";
import { Context } from "../";

function UserLayout() {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const { store } = useContext(Context);

  function toggleHeaderShow() {
    setShow(!show);
  }

  return (
    <>
      {/*HEADER*/}
      <header className={show ? "tm-header show" : "tm-header"} id="tm-header">
        <div className="tm-header-wrapper">
          <button className="navbar-toggler" onClick={toggleHeaderShow} type="button" aria-label="Toggle navigation">
            <i className="fa fa-bars"></i>
          </button>
          <div className="tm-site-header">
            <div className="mb-3 mx-auto tm-site-logo">
              <i className="fas fa-book fa-2x"></i>
            </div>
            <h1 className="text-center">Rotten Mandarines</h1>
          </div>
          <nav className="tm-nav" id="tm-nav">
            <ul>
              <li className="tm-nav-item">
                <CustomLink to="/">
                  <span className="tm-nav-link">
                    <i className="fas fa-star"></i>
                    Улюблені
                  </span>
                </CustomLink>
              </li>
              <li className="tm-nav-item">
                <CustomLink to="/book">
                  <span className="tm-nav-link">
                    <i className="fas fa-book"></i>
                    Книжки
                  </span>
                </CustomLink>
              </li>
              <li className="tm-nav-item">
                <CustomLink to="/author">
                  <span className="tm-nav-link">
                    <i className="fas fa-users"></i>
                    Автори
                  </span>
                </CustomLink>
              </li>
              <li className="tm-nav-item">
                <CustomLink to="/publisher">
                  <span className="tm-nav-link">
                    <i className="fas fa-globe"></i>
                    Видавництва
                  </span>
                </CustomLink>
              </li>
            </ul>
          </nav>
          <div className="tm-mb-65">
            <a href="www.linkedin.com/in/dartmetra" className="tm-social-link">
              <i className="fab fa-linkedin tm-social-icon"></i>
            </a>
            <a href="https://github.com/DartMetra" className="tm-social-link">
              <i className="fab fa-github tm-social-icon"></i>
            </a>
            <a href="https://t.me/dartmetra" className="tm-social-link">
              <i className="fab fa-telegram tm-social-icon"></i>
            </a>
          </div>
          {store.isAuth ? (
            <button
              className="tm-btn tm-btn-primary tm-btn-small"
              onClick={() => {
                store.logout();
                navigate("/login");
              }}
            >
              Вийти
            </button>
          ) : (
            <button
              className="tm-btn tm-btn-primary tm-btn-small"
              onClick={() => {
                navigate("/login");
              }}
            >
              Логін
            </button>
          )}
        </div>
      </header>
      <div className="container-fluid">
        <main className="tm-main">
          <Outlet />
          {/*FOOTER*/}
          <footer className="row tm-row">
            <hr className="col-12" />
            <div className="col-md-6 col-12 tm-color-gray"></div>
            <div className="col-md-6 col-12 tm-color-gray tm-copyright"></div>
          </footer>
        </main>
      </div>
    </>
  );
}
export default observer(UserLayout);
