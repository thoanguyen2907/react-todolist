import React, { useState } from "react";
import AnotherTodoList from "./ToDoList/AnotherTodoList";
import Form from "./ToDoList/Form";
import Heading from "./ToDoList/Heading";

export default function App() {
  const [input, setInput] = useState("");
  // console.log("input", input)
  const [todos, setTodos] = useState([]);

  return (
    <div>
      <Heading />
      <Form
        input={input}
        setInput={setInput}
        todos={todos}
        setTodos={setTodos}
      />
      <AnotherTodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}
