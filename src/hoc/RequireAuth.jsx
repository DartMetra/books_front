import { Navigate, useLocation } from "react-router-dom";

export function RequireAuth({ next }) {
  const location = useLocation();
  const auth = true;

  if (!auth) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return next;
}
