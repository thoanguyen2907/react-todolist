import React from "react";
import { useState } from "react";
import {Button} from "../ComponentsToDoList/Button";
import {Container} from "../ComponentsToDoList/Container";
import {Dropdown} from "../ComponentsToDoList/Dropdown";
import {Heading3} from "../ComponentsToDoList/Heading";
import {Table, Thead} from "../ComponentsToDoList/Table";
import {TextField} from "../ComponentsToDoList/TextField";
import TodoItem from "./TodoItem";

export default function ToDoList() {
  const [input, setInput] = useState("");
  const [todo ,setTodo] = useState([])

  // getting input
  const handleOnChange = (e)=>{
    const value = e.target.value;
        setInput(value)
     }
// adding todos
  const addTaskHandler =(e)=>{
    e.preventDefault()
    console.log("value :", input)
    const newTodo = [...todo, input]
    setTodo(newTodo)
    setInput("")
    }

// delete todo
const deleteHandler =(indexValue)=>{
  const newTodo = todo.filter((todoItem,index)=> index!==indexValue)
  setTodo(newTodo)
}
  return (
    <Container className="w-50">
      <Dropdown>
        <option>Dark theme</option>
        <option>Light theme</option>
        <option>Primary theme</option>
      </Dropdown>
      <Heading3>To do list</Heading3>
      <TextField label="Task name" className="w-50" onChange={handleOnChange} name="ToDo" value={input}/>
      <Button className="ml-2"onClick={addTaskHandler}>
        <i className="fa fa-plus"></i> Add task
      </Button>
      <Button className="ml-2">
        <i className="fa fa-upload"></i> Update task
      </Button>
      <hr />
      <Heading3>Task to do</Heading3>
      <Table>
        <Thead>
       <TodoItem todos={todo} deleteHandler={deleteHandler}/>
          {/* <Tr>
            <Th style={{verticalAlign: "middle"}}>TodoItem</Th>
            <Th className="text-right">
              <Button className="ml-1">
                <i className="fa fa-trash"></i>
              </Button>
            </Th>
          </Tr> */}
         
        </Thead>
      </Table>
    </Container>
  );
}
