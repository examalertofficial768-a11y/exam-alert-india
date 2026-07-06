function LatestJobs() {
  const jobs = [
    {
      title: "SSC CGL 2026 Recruitment",
      org: "SSC",
      lastDate: "25 Aug 2026",
      status: "Apply Online",
    },
    {
      title: "Railway Group D Recruitment",
      org: "Indian Railway",
      lastDate: "30 Aug 2026",
      status: "Apply Online",
    },
    {
      title: "Rajasthan Police Constable",
      org: "Rajasthan Police",
      lastDate: "15 Sep 2026",
      status: "Coming Soon",
    },
  ];

  return (
    <div className="card shadow border-0 h-100">

      <div className="card-header bg-primary text-white fw-bold">
        🔥 Latest Jobs
      </div>

      <div className="card-body">

        {jobs.map((job, index) => (

          <div
            key={index}
            className="border rounded p-3 mb-3 text-center"
          >

            <h4>{job.title}</h4>

            <p className="mb-1">
              <strong>Organization:</strong> {job.org}
            </p>

            <p className="mb-3">
              <strong>Last Date:</strong> {job.lastDate}
            </p>

            <div className="d-flex justify-content-center gap-2">

              <button className="btn btn-primary btn-sm">
                {job.status}
              </button>

              <button className="btn btn-outline-dark btn-sm">
                View Details
              </button>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default LatestJobs;