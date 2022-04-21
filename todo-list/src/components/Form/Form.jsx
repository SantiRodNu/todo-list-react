import { useState } from "react";
const Form = () => {
  const [userName, setUserName] = useState("");
  const [userError, setUserError] = useState(false);

  const inputOnChange = (e) => {
    setUserName(e.target.value);
  };

  const controlUserInput = () => {
    if (!userName) {
      setUserError(true);
      alert("Escriba su nombre de usuario");
      return;
    }
  };

  const onClickButton = (e) => {
    controlUserInput();
  };

  return (
    <form>
      <input
        id="tarea"
        type="text"
        name="tarea"
        placeholder="Descripción de la tarea"
        onChange={inputOnChange}
      />
      <select name="prioridad" id="prioridad" defaultValue="">
        <option value="" disabled>
          Prioridad
        </option>
        <option value="prioridad-baja">baja</option>
        <option value="prioridad-media">media</option>
        <option value="prioridad-alta">alta</option>
      </select>
      <button onClick={onClickButton} id="agregar">
        Agregar
      </button>
    </form>
  );
};

export default Form;
