import Tarea from "./Tarea";
import { useState } from "react";
const tareasIniciales = [
  { id: 1, titulo: "Ir al cine" },
  { id: 2, titulo: "Pasear el perro" },
  { id: 3, titulo: "Comprar fruta" },
  { id: 4, titulo: "Tomar agua" },
];

const ListaTareas = () => {
  const [tareas, setTareas] = useState(tareasIniciales);

  const addTask = () => {
    const newTask = {
      id: Math.floor(Math.random() * 100),
      titulo: "Nueva Tarea",
    };

    const newTasks = [...tareas, newTask];

    // for (let index = 0; index < tareas.length; index++) {
    //   newTasks.push(tareas[index]);
    // }

    // newTasks.push(newTask);
    setTareas(newTasks);
  };

  return (
    <>
      <ul id="lista-tareas">
        {tareas.map((tarea) => {
          return <Tarea titulo={tarea.titulo} />;
        })}
      </ul>
      <button onClick={addTask}>Add task</button>
      <button>Remove task</button>
    </>
  );
};

export default ListaTareas;
