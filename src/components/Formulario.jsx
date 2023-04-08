import React from "react";
import { NewTodo } from "../models/todo";
import { HttpHandler } from "../http/handler";

const Formulario = ({ todo, setTodo }) => {
  const handler = new HttpHandler();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (todo.id === "") {
      handler
        .post(todo)
        .then(() => {
          setTodo(NewTodo());
        })
        .catch(() => {
          console.error("Error");
        });
    } else {
      handler
        .put(todo.id, todo)
        .then(() => {
          setTodo(NewTodo());
        })
        .catch(() => {
          console.error("Error");
        });
    }
  };

  return (
    <div className="mx-3 md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">Formulario de Tareas</h2>

      <p className="text-lg mt-5 text-center mb-10">
        Añade Tareas y {""}
        <span className="text-sky-600 font-bold">Administralas</span>
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-xl rounded-lg py-10 px-5 mb-10"
      >
        <div className="mb-5">
          <label
            htmlFor="nombre"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre Persona
          </label>

          <input
            id="nombre"
            required={true}
            type="text"
            placeholder="Introduce tu nombre"
            className="border-2 w-full p-2 mt-2 placeholder-gray-300 rounded-md"
            value={todo.nombre}
            onChange={(e) =>
              setTodo((prev) => ({ ...prev, nombre: e.target.value }))
            }
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="nombre"
            className="block text-gray-700 uppercase font-bold"
          >
            Nueva Tarea
          </label>

          <input
            id="tarea"
            required={true}
            type="text"
            placeholder="Nombre de la tarea"
            className="border-2 w-full p-2 mt-2 placeholder-gray-300 rounded-md"
            value={todo.tarea}
            onChange={(e) =>
              setTodo((prev) => ({ ...prev, tarea: e.target.value }))
            }
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="email"
            className="block text-gray-700 uppercase font-bold"
          >
            Email
          </label>

          <input
            id="email"
            type="email"
            required={true}
            placeholder="Introduce un correo valido"
            className="border-2 w-full p-2 mt-2 placeholder-gray-300 rounded-md"
            value={todo.email}
            onChange={(e) =>
              setTodo((prev) => ({ ...prev, email: e.target.value }))
            }
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="fecha"
            className="block text-gray-700 uppercase font-bold"
          >
            Fecha de la Tarea
          </label>

          <input
            id="fecha"
            required={true}
            type="date"
            className="border-2 w-full p-2 mt-2 placeholder-gray-300 rounded-md"
            value={todo.fecha}
            onChange={(e) =>
              setTodo((prev) => ({ ...prev, fecha: e.target.value }))
            }
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="comentarios"
            className="block text-gray-700 uppercase font-bold"
          >
            Descripcion
          </label>
          <textarea
            id="comentarios"
            required={true}
            className="border-2 w-full p-2 mt-2 placeholder-gray-300 rounded-md"
            placeholder="Describe brevemente la tarea"
            value={todo.comentario}
            onChange={(e) =>
              setTodo((prev) => ({ ...prev, comentario: e.target.value }))
            }
          />
        </div>

        <input
          type="submit"
          className="bg-sky-600 w-full p-3 text-white uppercase font-bold hover:bg-sky-800 rounded-md cursor-pointer transition-all"
          value={todo.id ? "Editar Tarea" : "Agregar Tarea"}
        />
      </form>
    </div>
  );
};

export default Formulario;