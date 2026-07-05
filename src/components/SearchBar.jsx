function SearchBar() {
  return (
    <div className="card shadow-sm mt-4">
      <div className="card-body">
        <h4 className="mb-3">🔍 Search Jobs</h4>

        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Search Jobs, Results, Admit Card..."
          />

          <button className="btn btn-primary">
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;