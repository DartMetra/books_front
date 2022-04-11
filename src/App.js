import { Routes, Route } from "react-router-dom";
import { UserLayout } from "./component/UserLayout";
import { AdminLayout } from "./component/AdminLayout";
import { UserHomePage } from "./page/user/Home.page";
import { AdminHomePage } from "./page/admin/Home.page";
import { AuthorPage } from "./page/user/Author.page";
import { LoginPage } from "./page/Login.page";
import { AuthorsPage } from "./page/user/Authors.page";

import { RequireAuth } from "./hoc/RequireAuth";
import { BooksPage } from "./page/user/Books.page";
import { BookPage } from "./page/user/Book.page";

export function App() {
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
          <Route path="publisher" element={<>Publishers</>} />
          <Route path="publisher/:id" element={<>Publisher</>} />
          <Route path="genre" element={<>genres</>} />
          <Route path="genre/:id" element={<>genre</>} />
        </Route>
        <Route
          path="/admin"
          element={
            <RequireAuth>
              <AdminLayout />
            </RequireAuth>
          }
        >
          <Route index element={<AdminHomePage />} />
        </Route>
      </Routes>
    </>
  );
}
