function Stats() {
  const stats = [
    { title: "Latest Jobs", count: "500+" },
    { title: "Results", count: "200+" },
    { title: "Admit Cards", count: "150+" },
    { title: "Visitors", count: "10K+" },
  ];

  return (
    <div className="row my-4">
      {stats.map((item) => (
        <div className="col-6 col-md-3 mb-3" key={item.title}>
          <div className="card text-center shadow-sm border-0 h-100">
            <div className="card-body">
              <h2 className="text-primary fw-bold">{item.count}</h2>
              <p className="mb-0">{item.title}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Stats;