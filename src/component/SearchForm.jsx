import { useRef } from "react";
import { useNavigate } from "react-router-dom";

export function SearchForm() {
  const searchRef = useRef();
  const nav = useNavigate();

  function handleSearch(e) {
    e.preventDefault();

    console.log("search");
    nav("/book?search=" + searchRef.current.value);
  }

  return (
    <div className="nav-wrapper">
      <form onSubmit={handleSearch}>
        <div className="input-field">
          <input id="search" ref={searchRef} type="search" />
          <label className="label-icon" htmlFor="search">
            <i className="material-icons">search</i>
          </label>
          <i className="material-icons">close</i>
        </div>
      </form>
    </div>
  );
}
