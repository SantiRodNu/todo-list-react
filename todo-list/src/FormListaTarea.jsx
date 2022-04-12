const FormListaTarea = () => {
  return (
    <form>
      <input
        id="tarea"
        type="text"
        name="tarea"
        placeholder="Descripción de la tarea"
      />
      <select name="prioridad" id="prioridad">
        <option value="" disabled selected>
          Prioridad
        </option>
        <option value="prioridad-baja">baja</option>
        <option value="prioridad-media">media</option>
        <option value="prioridad-alta">alta</option>
      </select>
      <button id="agregar">Agregar</button>
    </form>
  );
};

export default FormListaTarea;
