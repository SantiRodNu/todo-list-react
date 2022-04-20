const ListaTareas = (props) => {
  const { tareas } = props;

  return (
    <>
      <ul id="lista-tareas">
        {tareas.map((tarea, i) => {
          return (
            <li className={tarea.prioridad} key={i}>
              {tarea.titulo}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ListaTareas;
