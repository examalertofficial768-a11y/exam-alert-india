function Footer() {
  return (
    <footer className="bg-dark text-white mt-5 pt-5 pb-3">

      <div className="container">

        <div className="row">

          <div className="col-md-4 mb-4">

            <h3 className="fw-bold text-warning">
              EXAM ALERT INDIA
            </h3>

            <p>
              India's Trusted Government Job Portal.
              Get Latest Jobs, Results, Admit Cards,
              Answer Keys, Syllabus and Current Affairs.
            </p>

          </div>

          <div className="col-md-2 mb-4">

            <h5>Quick Links</h5>

            <ul className="list-unstyled">

              <li><a href="/" className="text-white text-decoration-none">Home</a></li>

              <li><a href="/jobs" className="text-white text-decoration-none">Latest Jobs</a></li>

              <li><a href="/results" className="text-white text-decoration-none">Results</a></li>

              <li><a href="/admit-card" className="text-white text-decoration-none">Admit Card</a></li>

            </ul>

          </div>

          <div className="col-md-3 mb-4">

            <h5>Important</h5>

            <ul className="list-unstyled">

              <li>Privacy Policy</li>

              <li>Terms & Conditions</li>

              <li>Disclaimer</li>

              <li>Contact Us</li>

            </ul>

          </div>

          <div className="col-md-3 mb-4">

            <h5>Follow Us</h5>

            <button className="btn btn-primary w-100 mb-2">
              Telegram
            </button>

            <button className="btn btn-success w-100 mb-2">
              WhatsApp
            </button>

            <button className="btn btn-danger w-100">
              Instagram
            </button>

          </div>

        </div>

        <hr />

        <div className="text-center">

          © 2026 EXAM ALERT INDIA | All Rights Reserved

        </div>

      </div>

    </footer>
  );
}

export default Footer;