import React, { useState } from "react";

const TodoItem = ({ todo, updateTodo, toggleComplete, deleteTodo }) => {
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(todo.text);

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleUpdate = () => {
    if (text.trim() !== "") {
      updateTodo(todo.id, { text });
      setEditing(false);
    }
  };

  return (
    <li>
      {editing ? (
        <input
          type="text"
          value={text}
          onChange={handleTextChange}
          onBlur={handleUpdate}
          autoFocus
        />
      ) : (
        <div
          className={`todo-item ${todo.completed ? "completed" : ""}`}
          onClick={() => toggleComplete(todo.id)}
        >
          {todo.text}
        </div>
      )}
      <button onClick={() => setEditing(true)}>Edit</button>
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </li>
  );
};

export default TodoItem;
