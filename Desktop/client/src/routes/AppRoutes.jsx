import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Jobs from "../pages/Jobs";
import Results from "../pages/Results";
import AdmitCard from "../pages/AdmitCard";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/results" element={<Results />} />
        <Route path="/admit-card" element={<AdmitCard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;