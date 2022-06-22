import React from "react";
import {Button} from "../ComponentsToDoList/Button";
import {Container} from "../ComponentsToDoList/Container";
import {Dropdown} from "../ComponentsToDoList/Dropdown";
import {Heading3} from "../ComponentsToDoList/Heading";
import {Table, Thead, Th, Tr} from "../ComponentsToDoList/Table";
import {TextField} from "../ComponentsToDoList/TextField";

export default function ToDoList() {
  return (
    <Container className="w-50">
      <Dropdown>
        <option>Dark theme</option>
        <option>Light theme</option>
        <option>Primary theme</option>
      </Dropdown>
      <Heading3>To do list</Heading3>
      <TextField label="Task name" className="w-50" />
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
          <Tr>
            <Th style={{verticalAlign: "middle"}}>Learn react</Th>
            <Th className="text-right">
              <Button className="ml-1">
                <i className="fa fa-trash"></i>
              </Button>
            </Th>
          </Tr>
        </Thead>
      </Table>
    </Container>
  );
}
