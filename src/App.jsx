import { useEffect, useState } from "react";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import ListadoTareas from "./components/ListadoTareas";
import { HttpHandler } from "./http/handler";
import { NewTodo } from "./models/todo";

function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState(NewTodo());
  const [updated, setUpdated] = useState(0);
  const handler = new HttpHandler();

  useEffect(() => {
    const caller = async () => {
      let response = await handler.get();
      setTodos(response);
    };
    caller();
  }, [todo]);

  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="md:flex mt-12">
        <Formulario todo={todo} setTodo={setTodo} />

        <ListadoTareas tareas={todos} setTodo={setTodo} />
      </div>
    </div>
  );
}

export default App;