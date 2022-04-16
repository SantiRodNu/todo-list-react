import Tarea from "./Tarea";

const ListaTareas = (props) => {
  return (
    <ul id="lista-tareas">
      {props.tareas.map((tarea) => {
        return <Tarea titulo={tarea.titulo} />;
      })}
    </ul>
  );
};

export default ListaTareas;
