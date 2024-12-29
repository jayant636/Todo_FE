import React, { useEffect, useState } from "react";
import { addTodo, getTodoById, updateTodoo } from "../services/TodoService";
import { useNavigate, useParams } from "react-router-dom";

const AddTodoComponent = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [completed, setCompleted] = useState(false);
  // useParams hook to fetch the id from the url
  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      getTodoById(id)
        .then((response) => {
          console.log(response.data);
          setTitle(response.data.title);
          setDescription(response.data.description);
          setCompleted(response.data.completed);
        })
        .catch((e) => {
          console.error(e);
        });
    }
  }, [id]);

  function pagetitle() {
    if (id) {
      return <h2 className="text-center">Update Todo</h2>;
    } else {
      return <h2 className="text-center">Add Todo</h2>;
    }
  }

  function updateTodo(e) {
    e.preventDefault();
    const todo = { title, description, completed };
    updateTodoo(id, todo)
      .then((response) => {
        console.log(response.data);
        navigate("/todos");
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function saveAndupdateTodo(e) {
    e.preventDefault();
    const todo = { title, description, completed };
    console.log(todo);
    addTodo(todo)
      .then((response) => {
        console.log(response.data);
        navigate("/todos");
      })
      .catch((e) => console.error(e));
  }

  return (
    <div className="container">
      <div className="row">
        <div className="card col-md-6 offset-md-3 ">
          {pagetitle()}
          <div className="card-body">
            <form>
              <div className="form-group mb-2">
                <label>Todo Title:</label>
                <input
                  className="form-control"
                  type="text"
                  name="title"
                  value={title}
                  placeholder="Enter Title"
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="form-group mb-2">
                <label>Todo Description:</label>
                <input
                  className="form-control"
                  type="text"
                  name="description"
                  value={description}
                  placeholder="Enter description"
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <div className="form-group mb-2">
                <label>Todo Status:</label>
                <select
                  className="form-control"
                  name="completed"
                  value={completed}
                  onChange={(e) => setCompleted(e.target.value)}
                >
                  <option value="false">No</option>
                  <option value="true">Yes</option>
                </select>
              </div>
              <div>
                {id ? (
                  <button
                    className="btn btn-success"
                    onClick={(e) => updateTodo(e)}
                  >
                    Update
                  </button>
                ) : (
                  <button
                    className="btn btn-success"
                    onClick={(e) => saveAndupdateTodo(e)}
                  >
                    Submit
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTodoComponent;
