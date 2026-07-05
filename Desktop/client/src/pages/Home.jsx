import MainLayout from "../layouts/MainLayout";
import BreakingNews from "../components/BreakingNews";
import LatestJobs from "../components/LatestJobs";
import LatestResults from "../components/LatestResults";
import SearchBar from "../components/SearchBar";
import QuickLinks from "../components/QuickLinks";

function Home() {
  return (
    <MainLayout>

      <div className="p-5 bg-light rounded-4 text-center">

        <h1 className="display-4 fw-bold">
          Welcome to EXAM ALERT INDIA
        </h1>

        <p className="lead">
          Latest Government Jobs, Results, Admit Cards and Current Affairs.
        </p>

        <button className="btn btn-primary btn-lg">
          Latest Jobs
        </button>

      </div>

      <BreakingNews />
      <SearchBar />
      <QuickLinks />
      <div className="row">
    
        <div className="col-md-6">
          <LatestJobs />
        </div>

        <div className="col-md-6">
          <LatestResults />
        </div>

      </div>

    </MainLayout>
  );
}

export default Home;