import React from "react";
import Tareas from "./Tareas";

const ListadoTareas = ({ tareas, setTodo }) => {
  return (
    <div className="mx-3 md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      {tareas.length > 0 ? (
        <>
          <h2 className="font-black text-3xl text-center">Listado Tareas</h2>
          <p className="text-lg mt-5 text-center mb-10">
            Administra tus{" "}
            <span className="text-sky-600 font-bold">Tareas</span>
          </p>
          {tareas.map((tarea, index) => {
            return <Tareas key={index} todo={tarea} setTodo={setTodo} />;
          })}
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">No hay Tareas</h2>
          <p className="text-lg mt-5 text-center mb-10">
            Comienza agregando tus {""}
            <span className="text-sky-600 font-bold">Tareas</span>
          </p>
        </>
      )}
    </div>
  );
};

export default ListadoTareas;

