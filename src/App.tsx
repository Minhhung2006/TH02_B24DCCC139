import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Weather from "./components/WeatherApp";
import Students from "./components/StudentList";
import StudentDetail from "./components/StudentDetail";
import News from "./components/NewsApp";

const App: React.FC = () => {
  return (
    <Router>
      <nav style={{ display: "flex", gap: 10, padding: 10, background: "#eee" }}>
        <Link to="/">Thời tiết</Link>
        <Link to="/students">Sinh viên</Link>
        <Link to="/news">Tin tức</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Weather />} />
        <Route path="/students" element={<Students />} />
        <Route path="/students/:id" element={<StudentDetail />} />
        <Route path="/news" element={<News />} />
      </Routes>
    </Router>
  );
};

export default App;
