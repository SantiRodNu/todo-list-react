import Tarea from "./Tarea";

const ListaTareas = (props) => {
  const { tareas } = props;

  return (
    <>
      <ul id="lista-tareas">
        {tareas.map((tarea) => {
          return <Tarea titulo={tarea.titulo} />;
        })}
      </ul>
    </>
  );
};

export default ListaTareas;
