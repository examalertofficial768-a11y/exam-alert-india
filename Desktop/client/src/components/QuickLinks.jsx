function QuickLinks() {
  const items = [
    "Latest Jobs",
    "Results",
    "Admit Card",
    "Answer Key",
    "Syllabus",
    "Current Affairs",
  ];

  return (
    <div className="row mt-4">
      {items.map((item) => (
        <div className="col-6 col-md-4 col-lg-2 mb-3" key={item}>
          <div className="card text-center shadow-sm h-100">
            <div className="card-body">
              <strong>{item}</strong>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default QuickLinks;