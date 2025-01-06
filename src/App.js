import React, { useState } from "react";

export default function App() {
  const [todos, setTodos] = useState([
      // todo
      { id: 1, title: "code", description: "javascript", deleted: false },
      { id: 2, title: "read", description: "book", deleted: false },
      { id: 3, title: "play", description: "football", deleted: false },
    ]),
    [todo, setTodo] = useState({});

  // Delete Function
  const deleteFxn = _id =>
    setTodos(
      todos.map(todo => (todo.id === _id ? { ...todo, deleted: true } : todo))
    );
  // Edit Function
  const activeTodo = _id => setTodo(todos.find(({ id }) => id === _id));
  const updateTodos = _user => {
    setTodos(
      [...todos.filter(({ id }) => id !== _user.id), _user].sort(
        (a, b) => a.id - b.id
      )
    );
    clearUser();
  };

  const clearUser = () => setTodo({ id: todos.length + 1, name: "" });

  return (
    <div>
      <h1>User todos</h1>

      <div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {todos
              .filter(e => e.deleted === false)
              .map(({ id, title, description }) => {
                return (
                  <tr>
                    <td>{id}</td>
                    <td>{title}</td>
                    <td>{description}</td>
                    <td>
                      <button
                        type="button"
                        title="Edit"
                        onClick={() => activeTodo(id)}>
                        Edit
                      </button>
                      <button
                        type="button"
                        title="Delete"
                        onClick={() => deleteFxn(id)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
      <hr />
      <div>
        <h3>User Form</h3>
        <form>
          <button type="button" onClick={clearUser}>
            Create New
          </button>
          <br />
          <label>
            Title:
            <input
              type="text"
              name="title"
              value={todo.title}
              onChange={e => setTodo({ ...todo, title: e.target.value })}
            />
          </label>
          <br />
          <label>
            Description:
            <textarea
              name="description"
              value={todo.description}
              onChange={e => setTodo({ ...todo, description: e.target.value })}
            />
          </label>
          <button type="button" onClick={() => updateTodos(todo)}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
