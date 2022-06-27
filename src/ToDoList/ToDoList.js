import React, {useState} from "react";
import {Button} from "../ComponentsToDoList/Button";
import {Container} from "../ComponentsToDoList/Container";
import {Dropdown} from "../ComponentsToDoList/Dropdown";
import {Heading3} from "../ComponentsToDoList/Heading";
import {Table, Thead, Th, Tr} from "../ComponentsToDoList/Table";
import { v4 as uuidv4 } from 'uuid';
//import {TextField} from "../ComponentsToDoList/TextField";


export default function ToDoList() {

const [inputs,setInputs] = useState('')
const [todos,setTodos] = useState([])

const handleEvent =(event) =>{
  setInputs(event.target.value)
}

const handleSubmit =(event) =>{
  event.preventDefault()
  setTodos([...todos,{id:uuidv4(), name:inputs}])
  setInputs('')
}

const handleDelete =(id) =>{
  setTodos(todos.filter((item) => item.id !==id ))
}

  return (
    <form onSubmit={handleSubmit} >
      <Container className="w-50">
      <Dropdown>
        <option>Dark theme</option>
        <option>Light theme</option>
        <option>Primary theme</option>
      </Dropdown>
      <Heading3>To do list</Heading3>
      <input onChange={handleEvent} name="taskName" value={inputs} type="text" className="w-50" />
      <Button className="ml-2">
        <i className="fa fa-plus"></i> Add task
      </Button>
      {/* <Button className="ml-2"> <i className="fa fa-upload"></i> Update task</Button> */}
      <hr />
      <Heading3>Task to do</Heading3>
      <Table>
        <Thead>
          {todos.map((item) => 
            <Tr key={item.id}>
            <Th style={{verticalAlign: "middle"}} value = {item.name}>{item.name}</Th>
            <Th className="text-right">
              <Button className="ml-1" onClick={handleDelete}>
                <i className="fa fa-trash"></i>
              </Button>
              
            </Th>
          </Tr>
          )}
        </Thead>
      </Table>
    </Container>
    </form>
    
  );
}
