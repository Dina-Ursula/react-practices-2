import { render } from '@testing-library/react';
import React, { Component } from 'react';
import TodoList from './TodosList/TodosList';

class App extends Component {
  state = {
    todos: [
      { id: 3, text: 'Learn', completed: false },
      { id: 4, text: 'Write', completed: false },
      { id: 5, text: 'Move', completed: false },
    ],
  };
  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };
  render() {
    const { todos } = this.state;
    return (
      <>
        <TodoList todos={todos} onDeleteTodo={this.deleteTodo} />
      </>
    );
  }
}
export default App;
