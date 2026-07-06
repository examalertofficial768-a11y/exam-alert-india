import MainLayout from "../layouts/MainLayout";
import BreakingNews from "../components/BreakingNews";
import SearchBar from "../components/SearchBar";
import QuickLinks from "../components/QuickLinks";
import LatestJobs from "../components/LatestJobs";
import LatestResults from "../components/LatestResults";
import hero from "../assets/hero.png";
import Stats from "../components/Stats";
import Categories from "../components/Categories";

function Home() {
  return (
    <MainLayout>
      <div className="bg-white rounded-4 shadow p-5 mb-4">
        <div className="row align-items-center">

          <div className="col-lg-6">
            <span className="badge bg-primary mb-3">
              🇮🇳 INDIA'S TRUSTED JOB PORTAL
            </span>

            <h1 className="display-4 fw-bold">
              EXAM ALERT INDIA
            </h1>

            <p className="lead">
              Latest Government Jobs, Results, Admit Cards,
              Answer Keys, Syllabus & Current Affairs
            </p>

            <button className="btn btn-primary me-3">
              Latest Jobs
            </button>

            <button className="btn btn-outline-primary">
              View Results
            </button>
          </div>

          <div className="col-lg-6 text-center">
            <img
              src={hero}
              alt="Hero"
              className="img-fluid"
             style={{
  width: "100%",
  maxWidth: "450px",
  height: "auto"
}}
            />
          </div>

        </div>
      </div>

      <BreakingNews />
      <SearchBar />
      <Categories />
      <Stats />

      <div className="row">
        <div className="col-lg-6">
          <LatestJobs />
        </div>

        <div className="col-lg-6">
          <LatestResults />
        </div>
      </div>
    </MainLayout>
  );
}

export default Home;