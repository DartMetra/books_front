export function Pagination({ total, perPage, paginate, page }) {
  const pagenums = [];

  for (let i = 1; i <= Math.ceil(total / perPage); i++) {
    pagenums.push(i);
  }

  return (
    <>
      <div className="tm-paging-wrapper">
        <span className="d-inline-block mr-3">Page</span>
        <nav className="tm-paging-nav d-inline-block">
          <ul>
            {pagenums.map((number) => (
              <li key={number} className={page === number ? "tm-paging-item active" : "tm-paging-item"}>
                <span onClick={() => paginate(number)} className="mb-2 tm-btn tm-paging-link pointer">
                  {number}
                </span>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}
