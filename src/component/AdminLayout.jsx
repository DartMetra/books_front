import { NavLink, Outlet } from "react-router-dom";

export function AdminLayout() {
  return (
    <>
      <header>
        <NavLink to="/admin">Main</NavLink>
      </header>
      <Outlet />

      <footer>By Artem Malish</footer>
    </>
  );
}
