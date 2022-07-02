import React from "react";
import {FaTimes} from "react-icons/fa"
import {Button} from "../ComponentsToDoList/Button";
import {Container} from "../ComponentsToDoList/Container";

export default function AnotherTodoList({ todos, setTodos }){
  const handleDelete = ({ id }) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  return (
    <Container>
    <div>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.title}
            <Button className="ml-1" onClick={() => handleDelete(todo)}>
              <FaTimes style={{color: "red"}} />
              {/* <i className="fa fa-trash"></i> */}
            </Button>
        </li>
      ))}
      </div>
      </Container>
  );
}
