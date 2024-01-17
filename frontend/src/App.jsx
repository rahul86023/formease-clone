import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage/HomePage";
import ExamDetailPage from "./pages/ExamDetailPage/ExamDetailpage";
import NoRoutesAvailable from "./Components/NoRoutesAvailable";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            {/* Set the HomePage component as the index route */}
            <Route index element={<HomePage />} />

            {/* Add a route for exam details */}
            <Route path="exam-details/:id" element={<ExamDetailPage />} />
          </Route>

          <Route path="*" element={<NoRoutesAvailable />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;