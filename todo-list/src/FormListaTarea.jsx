import { useState } from "react";
import ListaTareas from "./ListaTareas";
const tareasIniciales = [
  { id: 1, titulo: "Ir al cine" },
  { id: 2, titulo: "Pasear el perro" },
  { id: 3, titulo: "Comprar fruta" },
  { id: 4, titulo: "Tomar agua" },
];

const FormListaTarea = () => {
  const [tareas, setTareas] = useState(tareasIniciales);
  const [nuevaTarea, setNuevaTarea] = useState({
    id: Math.floor(Math.random() * 100),
    titulo: "",
  });

  const obtenerValorInput = (e) => {
    setNuevaTarea({ ...nuevaTarea, titulo: e.target.value });
  };

  const addTask = () => {
    const newTasks = [...tareas, nuevaTarea];

    setTareas(newTasks);

    setNuevaTarea({ id: "", titulo: "" });
  };

  return (
    <>
      <form action="javascript:void(0)">
        <input
          id="tarea"
          type="text"
          name="tarea"
          value={nuevaTarea.titulo}
          placeholder="Descripción de la tarea"
          onChange={obtenerValorInput}
        />
        <select name="prioridad" id="prioridad">
          <option value="" disabled selected>
            Prioridad
          </option>
          <option value="prioridad-baja">baja</option>
          <option value="prioridad-media">media</option>
          <option value="prioridad-alta">alta</option>
        </select>
        <button onClick={addTask} id="agregar">
          Agregar
        </button>
      </form>
      <ListaTareas tareas={tareas} />
    </>
  );
};

export default FormListaTarea;
