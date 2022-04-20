import "./App.css";
import FormListaTarea from "./components/FormListaTarea";
import Counter from "./components/Counter/Counter";
import TreeImage from "./components/TreeImage/TreeImage";
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
        <FormListaTarea />
        <TreeImage showImage={showThings} showOrHideImage={showOrHide} />
        <Counter titulo="Hola. Soy un counter :D" subtitulo="Subtitulo" />
      </main>
    </div>
  );
}

export default App;
