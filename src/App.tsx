// import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./pages/main/MainPage";
import Recipe from "./pages/recipePage/Recipe";

/**
 * The main App component.
 *
 * This component is the top-level component that wraps the entire app.
 * It uses the BrowserRouter from react-router-dom to manage client-side routing.
 *
 * @returns {React.ReactElement} The main App component.
 */
function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/recipe/:name" element={<Recipe />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
