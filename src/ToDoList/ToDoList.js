import React, { useState } from "react";
import { Button } from "../ComponentsToDoList/Button";
import { Container } from "../ComponentsToDoList/Container";
import { Dropdown } from "../ComponentsToDoList/Dropdown";
import { Heading3 } from "../ComponentsToDoList/Heading";
import { Table, Thead, Th, Tr } from "../ComponentsToDoList/Table";
import { TextField } from "../ComponentsToDoList/TextField";
import { v4 as uuidv4 } from "uuid";

export default function ToDoList() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);
  const handleChange = (event) => {
    setTask(event.target.value);
  };
 const submitHandler = (event) => {
    event.preventDefault();
    const newTodos = [...todos, { id: uuidv4(), name: task }];
    setTodos(newTodos);
    setTask("");
  };
const deleteHandler = ({ id }, index) => {
    console.log(index);
    setTodos(todos.filter((data) => data.id !== id));
  };
 return (
    <form onSubmit={submitHandler}>
      <Container className="w-50">
        <Dropdown>
          <option>Dark theme</option>
          <option>Light theme</option>
          <option>Primary theme</option>
        </Dropdown>
        <Heading3>To do list</Heading3>
        <TextField
          className="w-50"
          name="task"
          value={task}
          onChange={handleChange}
        />
<Button className="ml-2">
          <i className="fa fa-plus"></i> Add task
        </Button>
        <Button className="ml-2">
          <i className="fa fa-upload"></i> Update task
        </Button>
        <hr />
        <Heading3>Task to do</Heading3>
        <Table>
          <Thead>
            {todos.map((item, index) => (
              <Tr key={item.id}>
                <Th style={{ verticalAlign: "middle" }}>{item.name}</Th>
                <Th className="text-right">
                  <Button
                    className="ml-1"
                    onclick={() => deleteHandler(item, index)}
                  >
                    <i className="fa fa-trash"></i>
                  </Button>
                </Th>
              </Tr>
            ))}
          </Thead>
        </Table>
      </Container>
    </form>
  );
}
