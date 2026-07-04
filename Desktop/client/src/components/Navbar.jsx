import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow">
      <div className="container">

        <Link className="navbar-brand fw-bold" to="/">
          EXAM ALERT INDIA
        </Link>

        <button
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#menu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="menu">

          <ul className="navbar-nav ms-auto">

            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/jobs">Jobs</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/results">Results</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/admit-card">Admit Card</Link>
            </li>

          </ul>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;