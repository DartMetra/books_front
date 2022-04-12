import { Routes, Route } from "react-router-dom";

import UserLayout from "./component/UserLayout";
import { UserHomePage } from "./page/user/Home.page";
import { AuthorPage } from "./page/user/Author.page";
import { AuthorsPage } from "./page/user/Authors.page";
import { BooksPage } from "./page/user/Books.page";
import { BookPage } from "./page/user/Book.page";
import { PublishersPage } from "./page/user/Publishers.page";
import { PublisherPage } from "./page/user/Publisher.page";

import AdminLayout from "./component/AdminLayout";
import { AuthorAdminPage } from "./page/admin/Author.page";
import { AuthorsAdminPage } from "./page/admin/Authors.page";
import { BooksAdminPage } from "./page/admin/Books.page";
import { BookAdminPage } from "./page/admin/Book.page";
import { PublisherAdminPage } from "./page/admin/Publisher.page";
import { PublishersAdminPage } from "./page/admin/Publishers.page";

import { AddAuthor } from "./component/AddAuthor";

import { LoginPage } from "./page/Login.page";
import { useContext, useEffect } from "react";
import { Context } from ".";

import { observer } from "mobx-react-lite";
import { AddBook } from "./component/AddBook";
import { AddPublisher } from "./component/AddPublisher";
import "./css/bootstrap.min.css";
import "./fontawesome/css/all.min.css";
import "./css/templatemo-xtra-blog.css";

function App() {
  const { store } = useContext(Context);

  useEffect(() => {
    if (localStorage.getItem("accessToken") && localStorage.getItem("refreshToken")) {
      store.checkAuth();
    }
  });
  return (
    <>
      <Routes>
        <Route path="/" element={<UserLayout />}>
          <Route path="/login" element={<LoginPage />} />
          <Route index element={<UserHomePage />} />
          <Route path="author" element={<AuthorsPage />} />
          <Route path="author/:id" element={<AuthorPage />} />
          <Route path="book" element={<BooksPage />} />
          <Route path="book/:id" element={<BookPage />} />
          <Route path="publisher" element={<PublishersPage />} />
          <Route path="publisher/:id" element={<PublisherPage />} />
        </Route>
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="author" element={<AuthorsAdminPage />} />
          <Route path="author/create" element={<AddAuthor />} />
          <Route path="author/:id" element={<AuthorAdminPage />} />

          <Route path="book" element={<BooksAdminPage />} />
          <Route path="book/create" element={<AddBook />} />
          <Route path="book/:id" element={<BookAdminPage />} />

          <Route path="publisher" element={<PublishersAdminPage />} />
          <Route path="publisher/create" element={<AddPublisher />} />
          <Route path="publisher/:id" element={<PublisherAdminPage />} />
        </Route>
      </Routes>
    </>
  );
}
export default observer(App);
