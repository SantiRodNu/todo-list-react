import { useState } from "react";
import ListaTareas from "./ListaTareas";
const tareasIniciales = [
  { id: 1, titulo: "Ir al cine", prioridad: "prioridad-baja" },
  { id: 2, titulo: "Pasear el perro", prioridad: "prioridad-alta" },
  { id: 3, titulo: "Comprar fruta", prioridad: "prioridad-media" },
  { id: 4, titulo: "Tomar agua", prioridad: "prioridad-alta" },
];

const FormListaTarea = (props) => {
  const [tareas, setTareas] = useState(tareasIniciales);
  const [nuevaTarea, setNuevaTarea] = useState({
    id: Math.floor(Math.random() * 100),
    titulo: "",
    prioridad: "prioridad-baja",
  });

  const [errors, setErrors] = useState({
    id: false,
    titulo: false,
  });

  const obtenerValorInput = (e) => {
    setNuevaTarea({
      ...nuevaTarea,
      titulo: e.target.value,
      prioridad: "prioridad-alta",
    });
  };

  const addTask = (e) => {
    const newErrors = {};

    if (!nuevaTarea.titulo) {
      newErrors.titulo = true;
      setErrors(newErrors);
      e.preventDefault();
      return;
    }

    const newTasks = [...tareas, nuevaTarea];

    setTareas(newTasks);

    setNuevaTarea({ id: "", titulo: "" });

    newErrors.titulo = false;
    setErrors(newErrors);
    e.preventDefault();
  };

  return (
    <>
      <form>
        <input
          id="tarea"
          type="text"
          name="tarea"
          value={nuevaTarea.titulo}
          placeholder="Descripción de la tarea"
          onChange={obtenerValorInput}
        />
        <select name="prioridad" id="prioridad" defaultValue="">
          <option value="" disabled>
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
      {errors.titulo && <span>Ingrese un título</span>}
    </>
  );
};

export default FormListaTarea;
