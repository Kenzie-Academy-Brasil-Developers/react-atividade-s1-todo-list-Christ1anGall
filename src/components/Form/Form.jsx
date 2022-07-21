import { useState } from "react";
import "./style.css";
export default function Form({ addTodo }) {
  const [userInput, setUserInput] = useState("");
  return (
    <span>
      <input
        type="text"
        placeholder="digite sua tarefa"
        onChange={(event) => {
          setUserInput(event.target.value);
        }}
      />

      <button
        onClick={() => {
          addTodo(userInput);
        }}
      >
        Enviar
      </button>
    </span>
  );
}
