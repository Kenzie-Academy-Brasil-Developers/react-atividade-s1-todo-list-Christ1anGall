import "./App.css";
import { useState } from "react";
import Form from "./components/Form/Form";
import TodoList from "./components/TodoList/TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  function addTodo(newTodo) {
    setTodos((oldTodos) => [...oldTodos, newTodo]);
  }

  function handleTodo(todo) {
    let todosFilter = todos.filter((value) => {
      return value !== todo;
    });
    setTodos(todosFilter);
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>TO-DO</p>
        <Form addTodo={addTodo}></Form>
        <TodoList todos={todos} handleTodo={handleTodo}></TodoList>
      </header>
    </div>
  );
}

export default App;
