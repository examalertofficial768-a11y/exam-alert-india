import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-lg sticky-top py-2">
      <div className="container">

        {/* Logo */}
        <Link
          className="navbar-brand d-flex align-items-center"
          to="/"
        >
          <img
            src={logo}
            alt="Exam Alert India"
            width="55"
            height="55"
            className="rounded-circle border border-2 border-white me-2"
          />

          <div className="d-none d-md-block">
            <h5 className="fw-bold text-white m-0">
              EXAM ALERT INDIA
            </h5>

            <small className="text-light">
              Trusted Government Job Portal
            </small>
          </div>
        </Link>

        {/* Mobile Button */}

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu */}

        <div
          className="collapse navbar-collapse"
          id="navbarNav"
        >

          <ul className="navbar-nav ms-auto align-items-lg-center">

            <li className="nav-item">
              <Link className="nav-link px-3" to="/">
                🏠 Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link px-3" to="/jobs">
                💼 Jobs
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link px-3" to="/results">
                🏆 Results
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link px-3" to="/admit-card">
                🎫 Admit Card
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link px-3" to="/answer-key">
                🔑 Answer Key
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link px-3" to="/syllabus">
                📚 Syllabus
              </Link>
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