import "./App.css";
import ListaTareas from "./ListaTareas";
import FormListaTarea from "./FormListaTarea";

function App() {
  return (
    <div className="App">
      <main>
        <h1>Lista de tareas</h1>
        <FormListaTarea />
        <h3>Tareas</h3>
        <ListaTareas />
        <p>
          Para agregar tareas vamos a tener que hablar de eventos, el DOM y cómo
          interactuar con él
        </p>
      </main>
    </div>
  );
}

export default App;
