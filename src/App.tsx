import "./App.css";
import { Route, Routes } from "react-router-dom";
import MainPage from "./MainPage";
import Recipe from "./components/Recipe";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/recipe/:id" element={<Recipe />} />
      </Routes>
    </div>
  );
}

export default App;
