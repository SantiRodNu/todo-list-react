import "./App.css";
import FormListaTarea from "./components/FormListaTarea";
import Counter from "./components/Counter/Counter";
import TreeImage from "./components/TreeImage/TreeImage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <main>
        <h1>Lista de tareas</h1>
        <Router>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/lista-tarea" element={<FormListaTarea />} />
            <Route path="/counter" element={<Counter />} />
            <Route path="/tree-image" element={<TreeImage />} />
          </Routes>
        </Router>
      </main>
    </div>
  );
}

export default App;
