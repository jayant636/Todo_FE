import React, { useEffect, useState } from "react";
import { completeTodo, deleteTodo, getAllTodos } from "../services/TodoService";
import { useNavigate } from "react-router-dom";

const ListTodoComponent = () => {
  const [todo, setTodo] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    listTodo();
  }, []);

  function listTodo() {
    getAllTodos()
      .then((response) => {
        setTodo(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function addNewtodo() {
    navigate("/addTodo");
  }

  function deleteTodoById(id) {
    deleteTodo(id).then(() => {
      listTodo();
    });
  }

  function completedTodo(id) {
    completeTodo(id).then(() => {
      listTodo();
    });
  }

  function updateTodo(id) {
    console.log(id);

    // !!!!!Very imp
    // Use single backward inverted commas to add id dynamically
    navigate(`/updateTodo/${id}`);
  }

  return (
    <div className="container">
      <h2 className="text-center">List of TODO's</h2>
      <div>
        <button className="btn btn-primary mb-2" onClick={addNewtodo}>
          Add Task
        </button>
      </div>
      <div>
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th>Task</th>
              <th>Description</th>
              <th>Completed</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {todo.map((todo) => (
              <tr key={todo.id}>
                <td>{todo.title}</td>
                <td>{todo.description}</td>
                <td>{todo.completed ? "Yes" : "No"}</td>
                <td>
                  <button
                    className="btn btn-dark"
                    onClick={() => updateTodo(todo.id)}
                  >
                    Update
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteTodoById(todo.id)}
                  >
                    Delete
                  </button>
                  <button
                    className="btn btn-primary"
                    onClick={() => completedTodo(todo.id)}
                  >
                    Completed
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListTodoComponent;
