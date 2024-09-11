import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./MainPage";
import Recipe from "./components/Recipe";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/recipe/:name" element={<Recipe />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
