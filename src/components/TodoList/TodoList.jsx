export default function TodoList({ todos, handleTodo }) {
  return (
    <ul>
      {todos.map((value, index) => {
        return (
          <li key={index}>
            {value}{" "}
            <button
              onClick={() => {
                handleTodo(value);
              }}
            >
              remover
            </button>
          </li>
        );
      })}
    </ul>
  );
}
