import logo from "./logo.svg";
import { HashRouter } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router";
import Project from "./project";

function App() {
  return (
    <HashRouter>
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="project" />} />
          <Route path="/project/*" element={<Project />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
