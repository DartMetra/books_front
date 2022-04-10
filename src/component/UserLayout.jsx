import { useState } from "react";
import { Outlet } from "react-router-dom";
import { CustomLink } from "./CustomLink";

export function UserLayout() {
  const [show, setShow] = useState(false);

  function toggleHeaderShow() {
    setShow(!show);
  }

  return (
    <>
      {/*HEADER*/}
      <header class={show ? "tm-header show" : "tm-header"} id="tm-header">
        <div class="tm-header-wrapper">
          <button class="navbar-toggler" onClick={toggleHeaderShow} type="button" aria-label="Toggle navigation">
            <i class="fas fa-bars"></i>
          </button>
          <div class="tm-site-header">
            <div class="mb-3 mx-auto tm-site-logo">
              <i class="fas fa-times fa-2x"></i>
            </div>
            <h1 class="text-center">Rotten Mandarines</h1>
          </div>
          <nav class="tm-nav" id="tm-nav">
            <ul>
              <li class="tm-nav-item">
                <CustomLink to="/">
                  <span class="tm-nav-link">
                    <i class="fas fa-home"></i>
                    Home
                  </span>
                </CustomLink>
              </li>
              <li class="tm-nav-item">
                <CustomLink to="/book">
                  <span class="tm-nav-link">
                    <i class="fas fa-book"></i>
                    Books
                  </span>
                </CustomLink>
              </li>
              <li class="tm-nav-item">
                <CustomLink to="/author">
                  <span class="tm-nav-link">
                    <i class="fas fa-users"></i>
                    Authors
                  </span>
                </CustomLink>
              </li>
              <li class="tm-nav-item">
                <CustomLink to="/publisher">
                  <span class="tm-nav-link">
                    <i class="fas fa-users"></i>
                    Publishers
                  </span>
                </CustomLink>
              </li>
            </ul>
          </nav>
          <div class="tm-mb-65">
            <a href="www.linkedin.com/in/dartmetra" class="tm-social-link">
              <i class="fab fa-linkedin tm-social-icon"></i>
            </a>
            <a href="https://github.com/DartMetra" class="tm-social-link">
              <i class="fab fa-github tm-social-icon"></i>
            </a>
            <a href="https://t.me/dartmetra" class="tm-social-link">
              <i class="fab fa-telegram tm-social-icon"></i>
            </a>
          </div>
        </div>
      </header>
      <div class="container-fluid">
        <main class="tm-main">
          <div class="row tm-row">
            <div class="col-12">
              <form method="GET" class="form-inline tm-mb-80 tm-search-form">
                <input class="form-control tm-search-input" name="query" type="text" placeholder="Search..." aria-label="Search" />
                <button class="tm-search-button" type="submit">
                  <i class="fas fa-search tm-search-icon" aria-hidden="true"></i>
                </button>
              </form>
            </div>
          </div>
          <Outlet />
          {/*FOOTER*/}
          <footer class="row tm-row">
            <hr class="col-12" />
            <div class="col-md-6 col-12 tm-color-gray">
              Design:
              <a rel="nofollow" target="_parent" href="https://templatemo.com" class="tm-external-link">
                TemplateMo
              </a>
            </div>
            <div class="col-md-6 col-12 tm-color-gray tm-copyright">Copyright 2020 Xtra Blog Company Co. Ltd.</div>
          </footer>
        </main>
      </div>
    </>
  );
}
