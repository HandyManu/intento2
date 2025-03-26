import React, { useState } from "react";
import "../Components/Estudiantes.css";

// Todo.jsx

const Todo = () => {
    // Estado para manejar la lista de tareas
    const [todos, setTodos] = useState([]);
    // Estado para manejar el valor del input
    const [task, setTask] = useState("");
    const [file, setFile] = useState("");
    const [line, setLine] = useState("");

    // Función para agregar una nueva tarea
    const addTodo = () => {
        if (task.trim() === "") return; // Evitar agregar tareas vacías
        setTodos([...todos, { id: Date.now(), name: task, age: file, idCard: line }]);

        setTask(""); // Limpiar el input
        setFile("");
        setLine("");
    };

    return (
        <div className="todo-container">
            <h1>Lista de estudiantes</h1>
            <div className="todo-input">
                <input
                    type="text"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    placeholder="Nombre"
                />
                <input
                    type="text"
                    value={file}
                    onChange={(e) => setFile(e.target.value)}
                    placeholder="Edad"
                />
                <input
                    type="text"
                    value={line}
                    onChange={(e) => setLine(e.target.value)}
                    placeholder="Carnet"
                />
                
                <button onClick={addTodo}>Añadir</button>
            </div>

            <ul className="todo-list">
                {todos.map((todo) => (
                    <li key={todo.id} className={todo.completed ? "completed" : ""}>
                        <span>{`Nombre: ${todo.name}, Edad: ${todo.age}, Carnet: ${todo.idCard}`}</span>

                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Todo;