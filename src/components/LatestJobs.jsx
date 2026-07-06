import useJobs from "../hooks/useJobs";

function LatestJobs() {

  const { jobs, loading } = useJobs();

  if (loading) {
    return (
      <div className="card shadow border-0">
        <div className="card-body">
          <h4>Loading Jobs...</h4>
        </div>
      </div>
    );
  }

  return (
    <div className="card shadow border-0">

      <div className="card-header bg-primary text-white">
        🔥 Latest Jobs
      </div>

      <div className="card-body">

        {jobs.length === 0 ? (
          <h5>No Jobs Found</h5>
        ) : (

          jobs.map((job) => (

            <div
              key={job._id}
              className="border rounded p-3 mb-3"
            >

              <h4>{job.title}</h4>

              <p>
                <strong>Organization :</strong>{" "}
                {job.organization}
              </p>

              <p>
                <strong>Last Date :</strong>{" "}
                {job.lastDate}
              </p>

              <a
                href={job.applyLink}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary btn-sm"
              >
                Apply Now
              </a>

            </div>

          ))

        )}

      </div>

    </div>
  );
}

export default LatestJobs;