import {
  BsBriefcaseFill,
  BsFileEarmarkTextFill,
  BsCardChecklist,
  BsCheckCircleFill,
  BsBookFill,
  BsNewspaper,
} from "react-icons/bs";

function Categories() {
  const items = [
    { icon: <BsBriefcaseFill size={30} />, title: "Latest Jobs" },
    { icon: <BsFileEarmarkTextFill size={30} />, title: "Results" },
    { icon: <BsCardChecklist size={30} />, title: "Admit Card" },
    { icon: <BsCheckCircleFill size={30} />, title: "Answer Key" },
    { icon: <BsBookFill size={30} />, title: "Syllabus" },
    { icon: <BsNewspaper size={30} />, title: "Current Affairs" },
  ];

  return (
    <div className="row my-4">
      {items.map((item) => (
        <div className="col-6 col-md-4 col-lg-2 mb-3" key={item.title}>
          <div
            className="card shadow-sm border-0 text-center h-100"
            style={{ transition: "0.3s" }}
          >
            <div className="card-body">
              <div className="text-primary mb-3">{item.icon}</div>
              <h6>{item.title}</h6>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Categories;