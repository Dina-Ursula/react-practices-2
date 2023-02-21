import React from 'react';

const TodoList = ({ todos, onDeleteTodo }) => (
  <ul>
    {todos.map(({ id, text }) => (
      <li key={id}>
        <p>{text}</p>
        <button onClick={() => onDeleteTodo(id)}>deleted</button>
      </li>
    ))}
  </ul>
);
export default TodoList;
