import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export function AuthorPage() {
  useEffect(() => {
    document.title = "Author";
  });

  const { id } = useParams();
  const nav = useNavigate();

  function goBack() {
    return nav(-1);
  }

  return (
    <>
      <button onClick={goBack}>Back</button>
      <div>{id}</div>
    </>
  );
}
