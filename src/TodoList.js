import React from "react";

const TodoList = ({ todos, updateTodo, deleteTodo }) => {
  const handleTextChange = (e, id) => {
    updateTodo(id, { text: e.target.value });
  };

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className={`todo-item ${todo.completed ? "completed" : ""}`}
        >
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => updateTodo(todo.id, { completed: !todo.completed })}
          />
          <input
            type="text"
            value={todo.text}
            onChange={(e) => handleTextChange(e, todo.id)}
          />
          <div className="actions">
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
