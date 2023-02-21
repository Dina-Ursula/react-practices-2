import React, { Component } from 'react';
import TodoList from './TodosList/TodosList';

class App extends Component {
  state = {
    todos: [
      { id: 3, text: 'Learn', completed: true },
      { id: 4, text: 'Write', completed: true },
      { id: 5, text: 'Make homework', completed: false },
      { id: 6, text: 'Search in Google', completed: true },
      { id: 7, text: 'Improve Skils', completed: false },
      { id: 8, text: 'Find first job', completed: false },
    ],
  };
  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };
  render() {
    const { todos } = this.state;

    const totalTodoCount = todos.length;
    const completedTodosCount = todos.reduce(
      (acc, todo) => (todo.completed ? acc + 1 : acc),
      0
    );

    return (
      <>
        <div>
          <p>Total amount:{totalTodoCount}</p>
          <p>Amount done:{completedTodosCount}</p>
        </div>
        <TodoList todos={todos} onDeleteTodo={this.deleteTodo} />
      </>
    );
  }
}
export default App;
