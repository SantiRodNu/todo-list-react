import "./App.css";
import FormListaTarea from "./FormListaTarea";
import Counter from "./Components/Counter";
import TreeImage from "./Components/TreeImage";
import { useState } from "react";

function App() {
  const [showThings, setShowThings] = useState(false);

  const showOrHide = () => {
    setShowThings(!showThings);
  };

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
        <TreeImage showImage={showThings} showOrHideImage={showOrHide} />
      </main>
    </div>
  );
}

export default App;
