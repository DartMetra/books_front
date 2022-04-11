import { useRef } from "react";
import { useNavigate } from "react-router-dom";

export function SearchForm({ resource, value }) {
  const searchRef = useRef(value);
  const nav = useNavigate();

  function handleSearch(e) {
    e.preventDefault();

    console.log("search");
    nav("/" + resource + "?query=" + searchRef.current.value);
  }

  return (
    <div className="row tm-row">
      <div className="col-12">
        <form onSubmit={handleSearch} className="form-inline tm-mb-80 tm-search-form">
          <input className="form-control tm-search-input" ref={searchRef} type="text" placeholder="Search..." aria-label="Search" />
          <button className="tm-search-button" type="submit">
            <i className="fas fa-search tm-search-icon" aria-hidden="true"></i>
          </button>
        </form>
      </div>
    </div>
  );
}
SearchForm.defaultProps = { resource: "book", value: "" };
