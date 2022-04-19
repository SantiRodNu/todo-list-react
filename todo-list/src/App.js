import "./App.css";
import FormListaTarea from "./FormListaTarea";
import Counter from "./Components/Counter";
import Buscador from "./Ejercicios/Buscador";

function App() {
  return (
    <div className="App">
      <main>
        <h1>Lista de tareas</h1>
        <Counter titulo="Hola. Soy un counter :D" subtitulo="Subtitulo" />
        <FormListaTarea />
        <h3>Tareas</h3>
        <p>
          Para agregar tareas vamos a tener que hablar de eventos, el DOM y cómo
          interactuar con él
        </p>
      </main>
    </div>
  );
}

export default App;
