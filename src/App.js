import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { Navbar } from "./components";
import { Hackathons, Home, Internships, Jobs, Promote } from "./pages";

const App = () => {
  return (
    <div className="App">
      <Router>
        <ToastContainer />
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home toast={toast} />} />
          <Route exact path="/jobs" element={<Jobs toast={toast} />} />
          <Route
            exact
            path="/internships"
            element={<Internships toast={toast} />}
          />
          <Route
            exact
            path="/hackathons"
            element={<Hackathons toast={toast} />}
          />
          <Route exact path="/promote" element={<Promote toast={toast} />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
