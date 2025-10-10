import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import TodosPage from "./TodosPage";
import Header from "./Header";
import StatsPage from "./StatsPage"; 

function App() {
  return (
    <BrowserRouter>
      <div className="layout">
        <Header />
        <main className="content">
          <Routes>
            <Route path="/" element={<TodosPage />} />
            <Route path="/stats" element={<StatsPage />} /> 
          </Routes>
        </main>
        <footer className="footer">Zustand Todo</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
