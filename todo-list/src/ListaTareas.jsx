import Tarea from "./Tarea";
const tareas = [
  { titulo: "Pasear a mi perrito" },
  { titulo: "Tomar agua" },
  { titulo: "Dormir" },
];

const ListaTareas = () => {
  return (
    <ul id="lista-tareas">
      {tareas.map((tarea) => {
        return <Tarea titulo={tarea.titulo} />;
      })}
    </ul>
  );
};

export default ListaTareas;
