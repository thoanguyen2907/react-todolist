import React from 'react'
import {Th, Tr} from "../ComponentsToDoList/Table";
import {Button} from "../ComponentsToDoList/Button";

function TodoItem({todos , deleteHandler}) {
   
        return (
            <div>
                {todos.map((item,index)=>(
                     <Tr key={index}>
                     <Th style={{verticalAlign: "middle"}}>{item}</Th>
                      <Th className="text-right">
                        <Button className="ml-1" onClick={()=>deleteHandler(index)}>
                          <i className="fa fa-trash"></i>
                        </Button>
                      </Th>
                    </Tr>
                )
                   
                )}
           </div> )
    }

export default TodoItem