import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import RoutesApp from "./RoutesApp";
import Nav from "./components/Nav/Nav";
import First from "./useEffect/FirstUseEfect";
import CounterWithUseEffect from "./useEffect/Counter";
import CounteIncrement from "./useEffect/CounterIncrement";

function App() {
  return (
    <div>
      <main>
        {/* <h1>Lista de tareas</h1> */}
        {/* <First name="you" /> */}
        <CounteIncrement />
        {/* <CounterWithUseEffect /> */}
        {/* <Router>
          <Nav />
          <RoutesApp />
        </Router> */}
        <footer> Soy un footer pequeñito</footer>
      </main>
    </div>
  );
}

export default App;
