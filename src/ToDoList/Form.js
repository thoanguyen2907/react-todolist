import React from 'react'
import {v4 as uuidv4} from 'uuid'

export default function Form({input, setInput, todos, setTodos}) {
    // console.log(input)
    const onInputChange = (event) => {
        setInput(event.target.value)
    }

    const onFormSubmit = (event) => {
        event.preventDefault()
        setTodos([...todos, {id: uuidv4(), title: input}])
        setInput("")
    }
    // console.log(todos)
  return (
    <form onSubmit={onFormSubmit}>
        <input 
        onChange={onInputChange} 
        value={input} 
        type="text" 
        placeholder='Todo' 
        required 
        />
        <button type='submit'>Add</button>
    </form>
  )
}
