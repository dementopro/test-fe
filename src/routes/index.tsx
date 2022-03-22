import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Transactions from "./Transactions";

const routes = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Transactions />} />
    </Routes>
  </Router>
);

export default routes;
