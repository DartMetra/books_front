import { useLocation, useNavigate } from "react-router-dom";

import { useEffect } from "react";

export function LoginPage() {
  useEffect(() => {
    document.title = "Rotten Mandarines";
  }, []);

  const navigate = useNavigate();
  const location = useLocation();

  const fromPath = location.state?.from?.pathname || "/";

  function handleSubmit(e) {
    e.preventDefault();
    const user = e.target.name;
  }

  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name: <input type="text" name="name" />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
