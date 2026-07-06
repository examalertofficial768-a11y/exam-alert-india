function LatestResults() {
  const results = [
    {
      title: "SSC GD Result",
      date: "10 July 2026",
    },
    {
      title: "UPSC Pre Result",
      date: "15 July 2026",
    },
    {
      title: "Rajasthan CET Result",
      date: "20 July 2026",
    },
  ];

  return (
    <div className="card shadow border-0 h-100">

      <div className="card-header bg-success text-white fw-bold">
        📋 Latest Results
      </div>

      <div className="card-body">

        {results.map((item, index) => (

          <div
            key={index}
            className="border rounded p-3 mb-3 text-center"
          >

            <h4>{item.title}</h4>

            <p className="mb-3">
              <strong>Result Date:</strong> {item.date}
            </p>

            <div className="d-flex justify-content-center gap-2">

              <button className="btn btn-success btn-sm">
                View Result
              </button>

              <button className="btn btn-outline-secondary btn-sm">
                Download PDF
              </button>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default LatestResults;