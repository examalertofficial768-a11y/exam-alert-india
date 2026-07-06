import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow sticky-top">
      <div className="container">

        <Link className="navbar-brand fw-bold" to="/">
          🇮🇳 EXAM ALERT INDIA
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">

          <ul className="navbar-nav ms-auto">

            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/jobs">Latest Jobs</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/results">Results</Link>
            </li>

            <li className="nav-item dropdown">

              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
              >
                More
              </a>

              <ul className="dropdown-menu">

                <li>
                  <Link className="dropdown-item" to="/admit-card">
                    Admit Card
                  </Link>
                </li>

                <li>
                  <Link className="dropdown-item" to="/answer-key">
                    Answer Key
                  </Link>
                </li>

                <li>
                  <Link className="dropdown-item" to="/syllabus">
                    Syllabus
                  </Link>
                </li>

                <li>
                  <Link className="dropdown-item" to="/current-affairs">
                    Current Affairs
                  </Link>
                </li>

              </ul>

            </li>

            <li className="nav-item ms-lg-3 mt-2 mt-lg-0">
              <button className="btn btn-warning fw-bold">
                Login
              </button>
            </li>

          </ul>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;