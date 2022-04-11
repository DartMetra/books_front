import { useMatch, useResolvedPath, Link } from "react-router-dom";

export function CustomLink({ children, to, ...props }) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <div>
      <Link className={match ? "active tm-nav-item" : "tm-nav-item"} to={to} {...props}>
        {children}
      </Link>
    </div>
  );
}
