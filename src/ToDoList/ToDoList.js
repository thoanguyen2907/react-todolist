import React, { useState } from "react";
import { Button } from "../ComponentsToDoList/Button";
import { Container } from "../ComponentsToDoList/Container";
import { Dropdown } from "../ComponentsToDoList/Dropdown";
import { Heading3 } from "../ComponentsToDoList/Heading";
import { Table, Thead, Th, Tr } from "../ComponentsToDoList/Table";
import { TextField } from "../ComponentsToDoList/TextField";
import { v4 as uuidv4 } from "uuid";

export default function ToDoList() {
  const [listTask, setListTask] = useState("");
  const [activityData, setActivityData] = useState([]);

  const handleChange = (event) => {
    setListTask(event.target.value);
  };

  const addTask = (event) => {
    event.preventDefault();
    setActivityData([...activityData, { id: uuidv4(), name: listTask }]);
    console.log(listTask);
    setListTask("");
  };

  const DeleteTask = ({ id }, index) => {
    console.log(index);
    // setActivityData(activityData.filter((filterData) => (
    //   filterData.findIndex(name) !== index))
    // )
    setActivityData(activityData.filter((filterData) => filterData.id !== id));
  };

  return (
    <Container className="w-50">
      <Dropdown>
        <option>Dark theme</option>
        <option>Light theme</option>
        <option>Primary theme</option>
      </Dropdown>
      <Heading3>To do list</Heading3>
      <TextField
        label="Task name"
        className="w-50"
        onChange={handleChange}
        value={listTask}
        type="text"
      />
      <Button className="ml-2" onClick={addTask}>
        <i className="fa fa-plus"></i> Add task
      </Button>
      <Button className="ml-2">
        <i className="fa fa-upload"></i> Update task
      </Button>
      <hr />
      <Heading3>Task to do</Heading3>
      <Table>
        <Thead>
          {activityData.map((task, index) => (
            <Tr key={task.id}>
              <Th style={{ verticalAlign: "middle" }}>{task.name}</Th>
              <Th className="text-right">
                <Button
                  className="ml-1"
                  onClick={() => DeleteTask(task, index)}
                >
                  <i className="fa fa-trash"></i>
                </Button>
              </Th>
            </Tr>
          ))}
        </Thead>
      </Table>
    </Container>
  );
}
