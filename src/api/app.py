import uuid
from flask_cors import CORS
import json
from flask import Flask, jsonify, request
from typing import TypedDict


app = Flask(__name__)
CORS(
    app,
    resources={
        r"/*": {
            "origins": "*",
            "headers": "content-type",
            "Access-Control-Allow-Methods": "*"
        }
    }
)
# Definiendo una aplicacion Flask y habilitando solicitudes cruzadas en todas las rutas


def generate_random_id() -> str:
    return str(uuid.uuid4())
    # Funcion que genera un id unico utilizando el modulo uuid


class TodoType(TypedDict):
    id: str
    nombre: str
    tarea: str
    email: str
    fecha: str
    comentario: str
    # Clase TodoType se utiliza para definir el esquema de una tarea "todo"


DB_PATH = "./db.json"
# Ruta del archivo json que contiene las tareas


class Writter:
    def read(self) -> list[TodoType]:
        with open(DB_PATH, "r") as file:
            return json.loads(file.read())
        # Funcion para leer el archivo json y parsearlo a una lista de objetos TodoType

    def write(self, todos: list[TodoType]) -> None:
        with open(DB_PATH, "w") as file:
            file.write(json.dumps(todos))
        # Funcion para escribir una lista de objetos TodoType en el archivo json


class Todos(Writter):
    def get_todos(self) -> list[TodoType]:
        return self.read()
        # Funcion para obtener todas las tareas

    def add_todo(self, todo: TodoType) -> None:
        todo["id"] = generate_random_id()
        t = self.get_todos()
        t.append(todo)
        self.write(t)
        # Funcion para agregar una tarea

    def edit_todo(self, todo: TodoType) -> None:
        ts = self.get_todos()
        for i, t in enumerate(ts):
            if t['id'] == todo["id"]:
                ts[i] = todo
        print(ts)
        self.write(ts)
        # Funcion para editar una tarea existente.

    def remove_todo(self, id: str) -> None:
        ts = list(filter(lambda x: x["id"] != id, self.get_todos()))
        self.write(ts)
        # Funcion para eliminar una tarea existente


todos = Todos()


@app.route('/items', methods=['GET'])
def hello_world():
    return jsonify(todos.get_todos())
    # Ruta para obtener todas las tareas


@app.route('/items', methods=['POST'])
def add_new_todo():
    request_body = request.get_json(force=True)
    todos.add_todo(request_body)
    return jsonify(todos.get_todos())
    # Ruta para agregar una tarea


@app.route('/items/<string:id>', methods=['PUT'])
def put_todo(id):
    request_body = request.get_json(force=True)
    todos.edit_todo(request_body)
    return jsonify(todos.get_todos())
    # Ruta para editar una tarea existente


@app.route('/items/<string:position>', methods=['DELETE'])
def delete_todo(position):
    todos.remove_todo(id=position)
    return jsonify(todos.get_todos())
    # Ruta para eliminar una tarea existente


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=3245, debug=True)
# Iniciando la aplicacion Flask con un host y un puerto específicos
